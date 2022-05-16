package com.ctse.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ctse.domain.TransactionHeader;

@Repository
public interface TransactionHeaderRepository extends MongoRepository<TransactionHeader, String> {

}
