package com.ctse.productservice.service;

import com.ctse.productservice.model.Authorized;
import com.ctse.productservice.model.Product;
import com.ctse.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    RestTemplate restTemplate;

    public ResponseEntity<?> getProductById(String productId){

        Optional<Product> product =  productRepository.findById(productId);
        if(product.isPresent()){
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No Product Found",HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> getProducts(){

        List<Product> products = productRepository.findAll();
        if(products.size() > 0){
            return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
        }else {
            return new ResponseEntity<>("No Products Found",HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> insertProduct(Product product, String authorization){

        try{
            Boolean isSeller =  isSeller(authorization);
            if(isSeller == true) {
                productRepository.save(product);
                return new ResponseEntity<Product>(product, HttpStatus.OK);
            }else{
                return new ResponseEntity<String>("Access Denied", HttpStatus.OK);
            }
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> updateProductById(String productId, Product product, String authorization){

        Boolean isSeller =  isSeller(authorization);
        if(isSeller == true) {
            Optional<Product> existingProduct =  productRepository.findById(productId);
            if(existingProduct.isPresent()){
                Product updateProduct = existingProduct.get();
                updateProduct.setProductTitle(product.getProductTitle());
                updateProduct.setCategoryId(product.getCategoryId());
                updateProduct.setQuantity(product.getQuantity());
                return new ResponseEntity<>(productRepository.save(updateProduct), HttpStatus.OK);

            }else{
                return new ResponseEntity<>("Product Update Error",HttpStatus.NOT_FOUND);
            }
        }else{
            return new ResponseEntity<String>("Access Denied", HttpStatus.OK);
        }
    }

    public ResponseEntity<?> deleteById(String productId,String authorization){
        try{
            Boolean isSeller =  isSeller(authorization);
            if(isSeller == true) {
                productRepository.deleteById(productId);
                return new ResponseEntity<>("Success deleted with " + productId,HttpStatus.OK);
            }else{
                return new ResponseEntity<String>("Access Denied", HttpStatus.OK);
            }
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }

    public Boolean isSeller(String authorization) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", authorization);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Authorized> response = restTemplate.exchange(
                "http://20.237.97.59:5002/api/auth/authorizeSeller", HttpMethod.GET, entity,
                new ParameterizedTypeReference<Authorized>() {
                });

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody().getIsAuthorized();
        } else {
            return false;
        }
    }

}
