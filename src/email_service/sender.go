package main

import (
	"context"
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	gomail "gopkg.in/mail.v2"
)

type Email struct {
	To      string `json:"to,omitempty" validate:"required"`
	Subject string `json:"subject,omitempty" validate:"required"`
	Body    string `json:"body,omitempty" validate:"required"`
}

func Send(c *fiber.Ctx) error {
	_, cancel := context.WithTimeout(context.Background(), 60*time.Second)
	var email Email
	defer cancel()

	if err := c.BodyParser(&email); err != nil {
		SendBadRequestResponse(c, &fiber.Map{"data": err.Error()})
	}

	from := EnvSenderEmail()
	password := EnvSenderPassword()

	client := gomail.NewMessage()

	client.SetHeader("From", from)
	client.SetHeader("To", email.To)
	client.SetHeader("Subject", email.Subject)
	client.SetBody("text/html", email.Body)

	auth := gomail.NewDialer("smtp.gmail.com", 587, from, password)

	if err := auth.DialAndSend(client); err != nil {
		fmt.Println(err.Error())
	}

	fmt.Println("Email sent successfully ✅")
	SendSuccessResponse(c, &fiber.Map{"data": email})
	return nil
}

func EmailRoute(app *fiber.App) {
	app.Post("/send", Send)
}
