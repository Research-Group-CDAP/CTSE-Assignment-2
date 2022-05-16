package com.ctse.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ctse.dao.UserRepository;
import com.ctse.domain.Cart;
import com.ctse.domain.User;
import com.ctse.models.PaymentRequest;

@Service
public class PaymentServiceImpl implements PaymentService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public ResponseEntity<?> addPayment(Cart newCart, PaymentRequest paymentRequest) {
		
		Optional<User> user = userRepository.findById(newCart.getUserId());
		
		paymentRequest.setOrderDescription("Order was placed on " + new Date());
		
		return null;
		
	}

	
}
