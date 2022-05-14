package com.ctse.cartservice.model;

public class OrderProduct {

    private String id;

    private String productTitle;

    private String imageUrl;

    private Double price;

    private int quantity;

    private Double totalPrice;

    public OrderProduct() {
    }

    public OrderProduct(String id) {
        this.id = id;
    }

    public OrderProduct(String id, String productTitle, String imageUrl, Double price, int quantity, Double totalPrice) {
        this.id = id;
        this.productTitle = productTitle;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductTitle() {
        return productTitle;
    }

    public void setProductTitle(String productTitle) {
        this.productTitle = productTitle;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
