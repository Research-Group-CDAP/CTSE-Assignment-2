package main

import (
	"os"

	"github.com/joho/godotenv"
)

func EnvSenderEmail() string {
	godotenv.Load()

	return os.Getenv("SENDER_EMAIL")
}

func EnvSenderPassword() string {
	godotenv.Load()

	return os.Getenv("SENDER_PASSWORD")
}
