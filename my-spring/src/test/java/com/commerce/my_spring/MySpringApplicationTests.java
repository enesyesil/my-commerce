package com.commerce.my_spring;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@SpringBootTest
class MySpringApplicationTests {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Test
    void contextLoads() {
        assertNotNull(passwordEncoder, "BCryptPasswordEncoder bean should be initialized");
    }
}

