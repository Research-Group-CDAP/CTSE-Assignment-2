package com.ctse.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ctse.dao.DeliveryRepository;
import com.ctse.domain.Delivery;
import com.ctse.domain.Order;
import com.ctse.models.DeliveryRequest;
import com.ctse.models.DeliveryResponse;

@Service
public class DeliveryServiceImpl implements DeliveryService {
	
	@Autowired
	private DeliveryRepository deliveryRepository;

	@Override
	public ResponseEntity<?> getAllDeliveries() {
		
		List<Delivery> delivery = deliveryRepository.findAll();
		
		if(delivery.size() > 0) {
			return new ResponseEntity<List<Delivery>>(delivery, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("No Deliveries.", HttpStatus.BAD_GATEWAY);
		}
		
	}

	@Override
	public DeliveryResponse addDeliveries(DeliveryRequest deliveryRequest) {
		
		DeliveryResponse response = new DeliveryResponse();
		
		if(deliveryRequest != null) {
			
			Delivery delivery = new Delivery();
			
			delivery.setAddress(deliveryRequest.getAddress());
			delivery.setCustomerName(deliveryRequest.getCustomerName());
			delivery.setMobileNumber(deliveryRequest.getMobileNumber());
			delivery.setTotPrice(deliveryRequest.getTotPrice());
			delivery.setOrderId(deliveryRequest.getOrderId());
			delivery.setStatus("A");
			
			delivery = deliveryRepository.save(delivery);
			
			if(delivery != null) {
				response.setStatusCode("000");
				response.setStatusMsg("SUCCESS");
			} else {
				response.setStatusCode("999");
				response.setStatusMsg("FAIL");
			}
		} else {
			
			response.setStatusCode("999");
			response.setStatusMsg("FAIL");
		}
		return response;
	}

}
