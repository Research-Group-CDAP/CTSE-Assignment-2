package com.ctse.productservice.controller;

import com.ctse.productservice.model.Product;
import com.ctse.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable String productId){
        return productService.getProductById(productId);
    }

    @GetMapping("/")
    public ResponseEntity<?> getProducts(){
        return productService.getProducts();
    }

    @PostMapping("/")
    public ResponseEntity<?> insertProduct(@RequestBody Product product,@RequestHeader("Authorization") String authorization){
        return productService.insertProduct(product,authorization);
    }

    @PutMapping("/{productId}")
    public ResponseEntity<?> updateStudentById(@PathVariable String productId, @RequestBody Product product, @RequestHeader("Authorization") String authorization){
        return productService.updateProductById(productId,product,authorization);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<?> deleteById(@PathVariable String productId,@RequestHeader("Authorization") String authorization){
        return productService.deleteById(productId,authorization);
    }

}
