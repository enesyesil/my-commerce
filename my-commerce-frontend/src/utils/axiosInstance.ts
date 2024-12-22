import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://ecom-api-npeki.ondigitalocean.app/', // Backend base URL
  withCredentials: true, // Include cookies or credentials
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use((config) => {
  // Add Authorization token dynamically if needed
  const token = 'your-auth-token'; // Replace with your token fetching logic
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log('Request:', config); // Log request details
  return config;
});

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response); // Log successful responses
    return response;
  },
  (error) => {
    console.error('Axios Error:', error.response || error.message); // Log error details
    return Promise.reject(error);
  }
);

export default axiosInstance;
