package com.commerce.my_spring.controller;

import com.commerce.my_spring.model.User;
import com.commerce.my_spring.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(
            @RequestParam String firstname,
            @RequestParam String lastname,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String phone,
            @RequestParam Integer addressId
    ) {
        return authService.register(firstname, lastname, email, password, phone, addressId);
    }

    @PostMapping("/login")
    public User login(@RequestParam String email, @RequestParam String password) {
        return authService.login(email, password);
    }
}
