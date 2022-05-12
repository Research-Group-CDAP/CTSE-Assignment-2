package com.ctse.productservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String categoryId;

    private String productTitle;

    private String imageUrl;

    private Double price;

    private int quantity;

    public Product() {
    }

    public Product(String categoryId, String productTitle, String imageUrl, Double price, int quantity) {
        this.categoryId = categoryId;
        this.productTitle = productTitle;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
    }

    public Product(String id, String categoryId, String productTitle, String imageUrl, Double price, int quantity) {
        this.id = id;
        this.categoryId = categoryId;
        this.productTitle = productTitle;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
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
}
