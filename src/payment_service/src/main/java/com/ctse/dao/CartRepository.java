package com.ctse.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ctse.domain.Cart;

public interface CartRepository extends MongoRepository<Cart, String> {

}
