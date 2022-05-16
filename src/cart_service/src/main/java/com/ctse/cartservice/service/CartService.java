package com.ctse.cartservice.service;

import com.ctse.cartservice.model.Authorized;
import com.ctse.cartservice.model.Cart;
import com.ctse.cartservice.model.OrderProduct;
import com.ctse.cartservice.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.annotation.Order;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    RestTemplate restTemplate;

    public ResponseEntity<?> getCartByUserId(String userId) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart != null) {
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No Product Found", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> getCarts() {
        List<Cart> carts = cartRepository.findAll();
        if (carts.size() > 0) {
            return new ResponseEntity<List<Cart>>(carts, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No Products Found", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> insertCart(Cart cart,String authorization) {
        try {
            Boolean isBuyer =  isBuyer(authorization);
            if(isBuyer == true){
                Cart checkCart = cartRepository.findByUserId(cart.getUserId());
                if (checkCart != null) {
                    return new ResponseEntity<>("Cart already exist for this user", HttpStatus.OK);
                } else {
                    cartRepository.save(cart);
                    return new ResponseEntity<Cart>(cart, HttpStatus.OK);
                }
            }else{
                return new ResponseEntity<String>("Access Denied", HttpStatus.OK);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> addProductToCartById(String cartId, OrderProduct orderProduct) {

        Optional<Cart> existingOrder = cartRepository.findById(cartId);
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = existingOrder.get().getOrderProducts();
            Boolean existStatus = false;
            for (OrderProduct singleOrderProduct : productList) {
                if (singleOrderProduct.getId().equals(orderProduct.getId())) {
                    existStatus = true;
                }
            }
            if (existStatus == true) {
                return new ResponseEntity<>(orderProduct.getProductTitle() + " Already Added", HttpStatus.OK);
            } else {
                productList.add(orderProduct);
                updateCart.setOrderProducts(productList);

                return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);
            }

        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> addProductToCartByUserId(String userId, OrderProduct orderProduct) {

        Optional<Cart> existingOrder = Optional.ofNullable(cartRepository.findByUserId(userId));
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = existingOrder.get().getOrderProducts();
            Boolean existStatus = false;
            for (OrderProduct singleOrderProduct : productList) {
                if (singleOrderProduct.getId().equals(orderProduct.getId())) {
                    existStatus = true;
                }
            }
            if (existStatus == true) {
                return new ResponseEntity<>(orderProduct.getProductTitle() + " Already Added", HttpStatus.OK);
            } else {
                productList.add(orderProduct);
                updateCart.setOrderProducts(productList);

                return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);
            }

        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> updateProductByCartIdAndProductId(String cartId, String productId, OrderProduct orderProduct) {

        Optional<Cart> existingOrder = cartRepository.findById(cartId);
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = existingOrder.get().getOrderProducts();
            for (OrderProduct singleProduct : productList) {
                if (singleProduct.getId().equals(productId)) {
                    singleProduct.setProductTitle(orderProduct.getProductTitle());
                    singleProduct.setPrice(orderProduct.getPrice());
                    singleProduct.setQuantity(orderProduct.getQuantity());
                    singleProduct.setImageUrl(orderProduct.getImageUrl());
                    singleProduct.setTotalPrice(orderProduct.getTotalPrice());
                }
            }
            updateCart.setOrderProducts(productList);
            return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> updateProductByUserIdAndProductId(String userId, String productId, OrderProduct orderProduct) {

        Optional<Cart> existingOrder = Optional.ofNullable(cartRepository.findByUserId(userId));
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = existingOrder.get().getOrderProducts();
            for (OrderProduct singleProduct : productList) {
                if (singleProduct.getId().equals(productId)) {
                    singleProduct.setProductTitle(orderProduct.getProductTitle());
                    singleProduct.setPrice(orderProduct.getPrice());
                    singleProduct.setQuantity(orderProduct.getQuantity());
                    singleProduct.setImageUrl(orderProduct.getImageUrl());
                    singleProduct.setTotalPrice(orderProduct.getTotalPrice());
                }
            }
            updateCart.setOrderProducts(productList);
            return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> removeProductByCartIdAndProductId(String cartId, String productId) {

        Optional<Cart> existingOrder = cartRepository.findById(cartId);
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = existingOrder.get().getOrderProducts();
            int deleteOrderProductIndex = -1;
            for (OrderProduct singleProduct : productList) {
                if (singleProduct.getId().equals(productId)) {
                    productList.remove(++deleteOrderProductIndex);
                    break;
                }
            }

            updateCart.setOrderProducts(productList);
            return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> removeProductByUserIdAndProductId(String userId, String productId) {

        Optional<Cart> existingOrder = Optional.ofNullable(cartRepository.findByUserId(userId));
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = existingOrder.get().getOrderProducts();
            int deleteOrderProductIndex = -1;
            for (OrderProduct singleProduct : productList) {
                if (singleProduct.getId().equals(productId)) {
                    productList.remove(++deleteOrderProductIndex);
                    break;
                }
            }

            updateCart.setOrderProducts(productList);
            return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> clearCartById(String cartId) {

        Optional<Cart> existingOrder = cartRepository.findById(cartId);
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = updateCart.getOrderProducts();
            productList.clear();
            updateCart.setOrderProducts(productList);
            return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> clearCartByUserId(String userId) {

        Optional<Cart> existingOrder = Optional.ofNullable(cartRepository.findByUserId(userId));
        if (existingOrder.isPresent()) {
            Cart updateCart = existingOrder.get();
            List<OrderProduct> productList = updateCart.getOrderProducts();
            productList.clear();
            updateCart.setOrderProducts(productList);
            return new ResponseEntity<>(cartRepository.save(updateCart), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Product Update Error", HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<?> deleteById(String cartId) {
        try {
            cartRepository.deleteById(cartId);
            return new ResponseEntity<>("Success deleted with " + cartId, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    public Boolean isBuyer(String authorization) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", authorization);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Authorized> response = restTemplate.exchange(
                "http://20.237.97.59:5002/api/auth/authorizeBuyer", HttpMethod.GET, entity,
                new ParameterizedTypeReference<Authorized>() {
                });

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody().getIsAuthorized();
        } else {
            return false;
        }
    }

}
