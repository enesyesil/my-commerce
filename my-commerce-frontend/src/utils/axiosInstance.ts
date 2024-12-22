import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ecom-api-npeki.ondigitalocean.app/', // Backend base URL
  withCredentials: true, // Include credentials (if applicable)
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  console.log('Request:', config); // Log request details
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response); // Log response details
    return response;
  },
  (error) => {
    console.error('Axios Error:', error.response || error.message); // Log error details
    return Promise.reject(error);
  }
);

export default axiosInstance;
