package com.ctse.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ctse.domain.Product;

public interface ProductRepository extends MongoRepository<Product, String> {

}
