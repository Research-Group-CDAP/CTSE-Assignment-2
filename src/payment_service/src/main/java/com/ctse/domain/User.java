package com.ctse.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(value = "users")
public class User {

	@Id
	private String id;
	
	private String first_name;
	
	private String last_name;
	
	private String email;
	
	private String mobileNumber;
	
	private String address;
	
	private String password;
	
	private String role;
	
	private Date createdAt;
	
	private Date updatedAt;
	
	private String authToken;

	public User(String id, String firstName, String lastName, String email, String mobileNumber, String address,
			String password, String role, Date createdAt, Date updatedAt, String authToken) {
		super();
		this.id = id;
		this.first_name = firstName;
		this.last_name = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.password = password;
		this.role = role;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.authToken = authToken;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return first_name;
	}

	public void setFirstName(String firstName) {
		this.first_name = firstName;
	}

	public String getLastName() {
		return last_name;
	}

	public void setLastName(String lastName) {
		this.last_name = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getAuthToken() {
		return authToken;
	}

	public void setAuthToken(String authToken) {
		this.authToken = authToken;
	}
		
}
