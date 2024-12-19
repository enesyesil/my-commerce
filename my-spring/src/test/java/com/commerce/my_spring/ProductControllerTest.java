package com.commerce.my_spring;

import com.commerce.my_spring.controller.ProductController;
import com.commerce.my_spring.model.Product;
import com.commerce.my_spring.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.lang.reflect.Field;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ProductControllerTest {

    private MockMvc mockMvc;
    private ProductService productService;
    private ProductController productController;

    @BeforeEach
    void setUp() throws Exception {
        productService = Mockito.mock(ProductService.class);
        productController = new ProductController();

        // Use reflection to inject the mocked ProductService into the controller
        Field productServiceField = ProductController.class.getDeclaredField("productService");
        productServiceField.setAccessible(true);
        productServiceField.set(productController, productService);

        mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
    }

    @Test
    void testGetProductById() throws Exception {
        Product mockProduct = new Product();
        mockProduct.setId(1L);
        mockProduct.setName("Test Product");
        mockProduct.setPrice(99.99);

        when(productService.getProductById(1L)).thenReturn(mockProduct);

        mockMvc.perform(get("/products/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Test Product"))
                .andExpect(jsonPath("$.price").value(99.99));
    }
}
