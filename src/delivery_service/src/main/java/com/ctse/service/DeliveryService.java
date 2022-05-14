package com.ctse.service;

import org.springframework.http.ResponseEntity;

import com.ctse.models.DeliveryRequest;
import com.ctse.models.DeliveryResponse;


public interface DeliveryService {

	public ResponseEntity<?> getAllDeliveries();

	public DeliveryResponse addDeliveries(DeliveryRequest deliveryRequest);

}
