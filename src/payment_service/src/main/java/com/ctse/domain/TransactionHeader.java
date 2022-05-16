package com.ctse.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "transactionHeaders")
public class TransactionHeader {

	@Id
	private String id;
	
	private String orderId;
	
	private String userId;
	
	private float totalPrice;
	
	private String status;
	
	private String fromAccount;
	
	private Date createdDate;
	
	private Date modifiedDate;

	public TransactionHeader(String id, String orderId, String userId, float totalPrice, String status,
			String fromAccount, Date createdDate, Date modifiedDate) {
		super();
		this.id = id;
		this.orderId = orderId;
		this.userId = userId;
		this.totalPrice = totalPrice;
		this.status = status;
		this.fromAccount = fromAccount;
		this.createdDate = createdDate;
		this.modifiedDate = modifiedDate;
	}

	public TransactionHeader() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFromAccount() {
		return fromAccount;
	}

	public void setFromAccount(String fromAccount) {
		this.fromAccount = fromAccount;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
		
}
