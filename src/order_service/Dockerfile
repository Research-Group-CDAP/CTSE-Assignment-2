# Build
FROM golang:1.18-alpine AS build
ENV GO111MODULE=on
WORKDIR /order_service
COPY . .
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build

# Deploy
FROM alpine:3.8
ENV MONGO_URL=mongodb+srv://rusiru:RavB1998@linkup-cluster.a1bvi.mongodb.net/clicktocart?retryWrites=true&w=majority
WORKDIR /root/
COPY --from=build /order_service/order_service .
EXPOSE 9090
ENTRYPOINT ["./order_service"]