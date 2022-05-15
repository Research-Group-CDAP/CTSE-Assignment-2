package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Order struct {
	OrderId          primitive.ObjectID   `json:"orderId,omitempty"`
	OrderDate        string               `json:"orderDate,omitempty" validate:"required"`
	OrderDiscription string               `json:"orderDiscription,omitempty"`
	OrderFee         float64              `json:"OrderFee,omitempty" validate:"required"`
	Products         []OrderProductRecord `json:"products,omitempty"`
	UserInfo         OrderUser            `json:"userinfo,omitempty" validate:"required"`
}

type OrderProductRecord struct {
	ProductId primitive.ObjectID `json:"productId,omitempty"`
	Quantity  int                `json:"quantity,omitempty"`
	UnitPrice float64            `json:"unitPrice,omitempty"`
	Info      OrderProduct       `json:"info,omitempty"`
}

type OrderProduct struct {
	CategoryId   string  `json:"categoryId,omitempty"`
	ProductTitle string  `json:"productTitle,omitempty"`
	ImageURL     string  `json:"imageURL,omitempty"`
	Price        float64 `json:"price,omitempty"`
}

type OrderUser struct {
	Email     string             `json:"email" validate:"required"`
	UserId    primitive.ObjectID `json:"userid" validate:"required"`
	FirstName string             `json:"firstname" validate:"required"`
	LastName  string             `json:"lastname" validate:"required"`
}
