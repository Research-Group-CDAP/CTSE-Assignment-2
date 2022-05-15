# Build

FROM golang:1.18-alpine AS build

ENV GO111MODULE=on

WORKDIR /email_service

COPY . .

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build




# Deploy

FROM alpine:3.8

WORKDIR /root/

COPY --from=build /email_service/email_service .

EXPOSE 9040

ENTRYPOINT ["./email_service"] 