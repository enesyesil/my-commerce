package com.commerce.my_spring.controller;

import com.commerce.my_spring.model.Cart;
import com.commerce.my_spring.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping
    public List<Cart> getCartItems(@RequestParam Long userId) {
        return cartService.getCartItems(userId);
    }
}
