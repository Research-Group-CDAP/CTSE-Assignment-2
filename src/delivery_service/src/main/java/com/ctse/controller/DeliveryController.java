package com.ctse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ctse.models.DeliveryRequest;
import com.ctse.models.DeliveryResponse;
import com.ctse.service.DeliveryService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/delivery")
public class DeliveryController {
	
	@Autowired
	private DeliveryService deliveryDervice;

	@GetMapping
	public ResponseEntity<?> getDeliveryList() {
		return deliveryDervice.getAllDeliveries();
	}
	
	@PostMapping
	public ResponseEntity<?> addDeliveries(@RequestBody DeliveryRequest deliveryRequest){
		
		DeliveryResponse response = deliveryDervice.addDeliveries(deliveryRequest);
		
		if(response.getStatusCode().equalsIgnoreCase("000")) {
			return new ResponseEntity<DeliveryResponse>(response, HttpStatus.OK);
			
		} else {
			return new ResponseEntity<DeliveryResponse>(response, HttpStatus.BAD_GATEWAY);
		}
		 
	}
}
