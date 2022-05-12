package com.ctse.productservice.service;

import com.ctse.productservice.model.Product;
import com.ctse.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

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

    public ResponseEntity<?> insertProduct(Product product){

        try{
            productRepository.save(product);
            return new ResponseEntity<Product>(product, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    public ResponseEntity<?> updateProductById(String productId, Product product){

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

    }

    public ResponseEntity<?> deleteById(String productId){
        try{
            productRepository.deleteById(productId);
            return new ResponseEntity<>("Success deleted with " + productId,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }

}
