package controllers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"order_service/configs"
	"order_service/handlers"
	"order_service/models"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var orderCollection *mongo.Collection = configs.GetCollections(configs.DB, "orders")
var productCollection *mongo.Collection = configs.GetCollections(configs.DB, "products")
var orderValidator = validator.New()

func CreateOrder(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
	var order models.Order
	defer cancel()

	if err := c.BodyParser(&order); err != nil {
		handlers.SendBadRequestResponse(c, &fiber.Map{"data": err.Error()})
	}

	if validateErr := orderValidator.Struct(&order); validateErr != nil {
		handlers.SendBadRequestResponse(c, &fiber.Map{"data": validateErr.Error()})
	}

	newOrder := models.Order{
		OrderId:          primitive.NewObjectID(),
		OrderDate:        time.Now().String(),
		OrderDiscription: order.OrderDiscription,
		OrderFee:         order.OrderFee,
		Products:         order.Products,
		UserInfo:         order.UserInfo,
	}

	_, err := orderCollection.InsertOne(ctx, newOrder)
	if err != nil {
		handlers.SendErrorResponse(c, &fiber.Map{"data": err.Error()})
	}

	// Call email service
	endPoint := configs.EnvEmailService() + "/send"
	subject := "Order #" + newOrder.OrderId.String()
	body := "<h3>Hello " + newOrder.UserInfo.FirstName + " " + newOrder.UserInfo.LastName + "</h3>" + "<p>Your order created successfully.</p>" + "<p>Order ID: #" + newOrder.OrderId.String() + "</p>"
	emailData := map[string]string{"to": newOrder.UserInfo.Email, "subject": subject, "body": body}
	jsonData, err := json.Marshal(emailData)
	if err != nil {
		fmt.Println(err.Error())
	}

	fmt.Println("📧 Sending email...")
	resp, err := http.Post(endPoint, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println(err.Error())
	}

	json.NewDecoder(resp.Body)

	handlers.SendSuccessResponse(c, &fiber.Map{"data": newOrder})
	return nil
}

func GetOrders(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
	defer cancel()

	cursor, err := orderCollection.Find(ctx, bson.M{})
	if err != nil {
		handlers.SendErrorResponse(c, &fiber.Map{"data": err.Error()})
	}

	var resutls []models.Order
	err = cursor.All(ctx, &resutls)
	if err != nil {
		handlers.SendErrorResponse(c, &fiber.Map{"data": err.Error()})
	}

	for _, ord := range resutls {
		for j, prod := range ord.Products {
			var product = getProductInfo(prod.ProductId)
			ord.Products[j].Info.ProductTitle = product.ProductTitle
			ord.Products[j].Info.ImageURL = product.ImageURL
			ord.Products[j].Info.Price = product.Price
			ord.Products[j].Info.CategoryId = product.CategoryId
		}
	}

	handlers.SendSuccessResponse(c, &fiber.Map{"data": resutls})
	return nil
}

func GetOrderById(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
	orderId := c.Params("orderId")
	fmt.Println(orderId)
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(orderId)

	var order models.Order
	if err := orderCollection.FindOne(ctx, bson.M{"orderid": objId}).Decode(&order); err != nil {
		handlers.SendErrorResponse(c, &fiber.Map{"message": err.Error()})
	}

	for i, prod := range order.Products {
		var product = getProductInfo(prod.ProductId)
		order.Products[i].Info.ProductTitle = product.ProductTitle
		order.Products[i].Info.ImageURL = product.ImageURL
		order.Products[i].Info.Price = product.Price
		order.Products[i].Info.CategoryId = product.CategoryId
	}

	handlers.SendSuccessResponse(c, &fiber.Map{"data": order})
	return nil
}

func getProductInfo(productId primitive.ObjectID) models.OrderProduct {
	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()

	var product models.OrderProduct
	err := productCollection.FindOne(ctx, bson.M{"_id": productId}).Decode(&product)
	if err != nil {
		fmt.Println(err.Error())
	}
	return product
}
