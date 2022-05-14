package com.ctse.cartservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "carts")
public class Cart {

    @Id
    private String id;

    private String userId;

    private List<OrderProduct> orderProducts;

    public Cart() {
    }

    public Cart(String id, String userId, List<OrderProduct> orderProducts) {
        this.id = id;
        this.userId = userId;
        this.orderProducts = orderProducts;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<OrderProduct> getOrderProducts() {
        return orderProducts;
    }

    public void setOrderProducts(List<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
    }
}
