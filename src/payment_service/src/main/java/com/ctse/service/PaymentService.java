package com.ctse.service;

import org.springframework.http.ResponseEntity;

import com.ctse.domain.Cart;
import com.ctse.models.PaymentRequest;

public interface PaymentService {

	public ResponseEntity<?> addPayment(Cart newCart, PaymentRequest paymentRequest);

}
