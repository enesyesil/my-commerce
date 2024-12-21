import axiosInstance from '../utils/axiosInstance';

export interface User {
    id: string;
    email: string;
    role?: 'admin' | 'user'; // Role-based access control
  }
  
// Login user
  export const loginUser = async (email: string, password: string): Promise<void> => {
    await axiosInstance.post('/auth/login', { email, password });
  };
  
  // Logout user
  export const logoutUser = async (): Promise<void> => {
    await axiosInstance.post('/auth/logout');
  };
  
  // Verify login status
  export const verifyUser = async (): Promise<{ loggedIn: boolean; user?: any }> => {
    const response = await axiosInstance.get('/auth/verify');
    return response.data; // { loggedIn: true, user: {...} }
  };