package com.ctse.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DeliveryRequest {

	private String customerName;	
	private String address;	
	private String mobileNumber;			
	private String totPrice;	
	private String status;
	private String orderId;
	
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
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
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getTotPrice() {
		return totPrice;
	}
	public void setTotPrice(String totPrice) {
		this.totPrice = totPrice;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	@Override
	public String toString() {
		return "DeliveryRequest [customerName=" + customerName + ", address=" + address + ", mobileNumber="
				+ mobileNumber + ", totPrice=" + totPrice + ", status=" + status + ", orderId=" + orderId + "]";
	}

}
