package com.commerce.my_spring;

import com.commerce.my_spring.controller.AuthController;
import com.commerce.my_spring.service.AuthService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AuthController.class)
@Import(TestSecurityConfig.class) // Use test-specific security configuration
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuthService authService;

    @Test
    void testRegisterSuccess() throws Exception {
        // Mock AuthService response
        when(authService.register(
                "John", "Doe", "john@example.com", "password123", "1234567890", 1))
                .thenReturn(null); // Or return a mocked User object

        // Test /auth/register endpoint
        mockMvc.perform(post("/auth/register")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .param("firstname", "John")
                .param("lastname", "Doe")
                .param("email", "john@example.com")
                .param("password", "password123")
                .param("phone", "1234567890")
                .param("addressId", "1"))
                .andExpect(status().isOk());
    }
}
