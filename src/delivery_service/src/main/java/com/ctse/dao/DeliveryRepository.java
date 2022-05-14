package com.ctse.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ctse.domain.Delivery;

@Repository
public interface DeliveryRepository extends MongoRepository<Delivery, String> {
	
}
