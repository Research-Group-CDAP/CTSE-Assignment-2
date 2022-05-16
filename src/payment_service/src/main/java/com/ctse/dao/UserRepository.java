package com.ctse.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ctse.domain.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
