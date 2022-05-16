package com.ctse.cartservice.controller;

import com.ctse.cartservice.model.Cart;
import com.ctse.cartservice.model.OrderProduct;
import com.ctse.cartservice.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getCartByUserId(@PathVariable String userId){
        return cartService.getCartByUserId(userId);
    }

    @GetMapping("/")
    public ResponseEntity<?> getCarts(){
        return cartService.getCarts();
    }

    @PostMapping("/")
    public ResponseEntity<?> insertCart(@RequestBody Cart cart,@RequestHeader("Authorization") String authorization){
        return cartService.insertCart(cart,authorization);
    }

    @PutMapping("/{cartId}")
    public ResponseEntity<?> addProductToCartById(@PathVariable String cartId, @RequestBody OrderProduct orderProduct){
        return cartService.addProductToCartById(cartId,orderProduct);
    }

    @PutMapping("/addtocart/user/{userId}")
    public ResponseEntity<?> addProductToCartByUserId(@PathVariable String userId, @RequestBody OrderProduct orderProduct){
        return cartService.addProductToCartByUserId(userId,orderProduct);
    }

    @PutMapping("/{cartId}/{productId}")
    public ResponseEntity<?> updateProductByCartIdAndProductId(@PathVariable String cartId, @PathVariable String productId, @RequestBody OrderProduct orderProduct){
        return cartService.updateProductByCartIdAndProductId(cartId,productId,orderProduct);
    }

    @PutMapping("/updateproduct/user/{userId}/{productId}")
    public ResponseEntity<?> updateProductByUserIdAndProductId(@PathVariable String userId, @PathVariable String productId, @RequestBody OrderProduct orderProduct){
        return cartService.updateProductByUserIdAndProductId(userId,productId,orderProduct);
    }

    @PutMapping("/clear/{cartId}")
    public ResponseEntity<?> clearCartById(@PathVariable String cartId){
        return cartService.clearCartById(cartId);
    }

    @PutMapping("/clear/user/{userId}")
    public ResponseEntity<?> clearCartByUserId(@PathVariable String userId){
        return cartService.clearCartByUserId(userId);
    }

    @DeleteMapping("/removeproduct/{cartId}/{productId}")
    public ResponseEntity<?> removeProductByCartIdAndProductId(@PathVariable String cartId, @PathVariable String productId){
        return cartService.removeProductByCartIdAndProductId(cartId,productId);
    }

    @DeleteMapping("/removeproduct/user/{userId}/{productId}")
    public ResponseEntity<?> removeProductByUserIdAndProductId(@PathVariable String userId, @PathVariable String productId){
        return cartService.removeProductByUserIdAndProductId(userId,productId);
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<?> deleteById(@PathVariable String cartId){
        return cartService.deleteById(cartId);
    }

//    @GetMapping("/test/api")
//    public ResponseEntity<?> callAPI(@RequestHeader("Authorization") String authorization){
//        return cartService.callAPI(authorization);
//    }
}
