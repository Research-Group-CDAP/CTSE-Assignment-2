package com.ctse.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ctse.dao.DeliveryRepository;
import com.ctse.domain.Delivery;
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

	@Override
	public Delivery getDeliveryById(String id) {
		
		Optional<Delivery> delivery = deliveryRepository.findById(id);
		
		if(delivery.isPresent()) {
			return delivery.get();
		} else {
			return null;
		}
	}

	@Override
	public DeliveryResponse deleteDelivery(String deliveryId) {
		
		DeliveryResponse response = new DeliveryResponse();
		
		try{
			deliveryRepository.deleteById(deliveryId);
			
			response.setStatusCode("000");
			response.setStatusMsg("Successfully deleted the delivery " + deliveryId);

		}catch (Exception e){
			response.setStatusCode("999");
			response.setStatusMsg("Delivery item deletion failed.");
        }
		
		return response;
	}

}
