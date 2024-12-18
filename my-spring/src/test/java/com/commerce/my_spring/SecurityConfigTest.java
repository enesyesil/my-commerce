package com.commerce.my_spring;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class SecurityConfigTest {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Test
    public void testPasswordEncoderBean() {
        assertNotNull(passwordEncoder, "BCryptPasswordEncoder bean should be loaded into the context");
        System.out.println("BCryptPasswordEncoder bean is available: " + passwordEncoder);
    }
}
