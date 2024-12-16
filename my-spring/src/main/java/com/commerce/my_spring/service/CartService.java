package com.commerce.my_spring.service;

import com.commerce.my_spring.model.Cart;
import com.commerce.my_spring.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getCartItems(Long userId) {
        return cartRepository.findByUserId(userId);
    }
}
