package com.ctse.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "products")
public class Product {

	@Id
	private String id;
	
	private String categoryId;
	
	private String productTitle;
	
	private String imageUrl;
	
	private float price;
	
	private int quantity;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getProductTitle() {
		return productTitle;
	}

	public void setProductTitle(String productTitle) {
		this.productTitle = productTitle;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Product(String id, String categoryId, String productTitle, String imageUrl, float price, int quantity) {
		super();
		this.id = id;
		this.categoryId = categoryId;
		this.productTitle = productTitle;
		this.imageUrl = imageUrl;
		this.price = price;
		this.quantity = quantity;
	}

	public Product() {
		super();
	}
	
}
