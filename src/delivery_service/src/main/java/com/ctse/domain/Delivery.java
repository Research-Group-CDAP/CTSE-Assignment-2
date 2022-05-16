package com.ctse.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="deliveries")
public class Delivery {

	@Id
	private String id;
	
	private String customerName;
	
	private String address;
	
	private String mobileNumber;
			
	private String totPrice;
	
	private String status;

	private String orderId;
	
	public Delivery() {
		super();
	}

	public Delivery(String id, String customerName, String address, String mobileNumber, String customerId,
			String totPrice, String status, String orderId) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.address = address;
		this.mobileNumber = mobileNumber;
		this.totPrice = totPrice;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTotPrice() {
		return totPrice;
	}

	public void setTotPrice(String totPrice) {
		this.totPrice = totPrice;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	
}
