package configs

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func EnvMongoURL() string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error with loading .env file")
	}

	return os.Getenv("MONGO_URL")
}