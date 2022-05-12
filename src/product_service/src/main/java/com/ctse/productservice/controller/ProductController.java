package com.ctse.productservice.controller;

import com.ctse.productservice.model.Product;
import com.ctse.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products/{id}")
    public ResponseEntity<?> getProductById(@PathVariable String productId){
        return productService.getProductById(productId);
    }

    @GetMapping("/products")
    public ResponseEntity<?> getProducts(){
        return productService.getProducts();
    }

    @PostMapping("/products")
    public ResponseEntity<?> insertProduct(@RequestBody Product product){
        return productService.insertProduct(product);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<?> updateStudentById(@PathVariable String productId, @RequestBody Product product){
        return productService.updateProductById(productId,product);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<?> deleteById(@PathVariable String productId){
        return productService.deleteById(productId);
    }

}
