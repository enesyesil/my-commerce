import axiosInstance from '../utils/axiosInstance';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  address: string;
  orders: number;
}



export const fetchUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await axiosInstance.get('/User/Profile');
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      window.location.href = '/login'; // Redirect to login
    }
    throw error;
  }
};

export const updateUserAddress = async (address: string): Promise<void> => {
    const response = await axiosInstance.put('/User/address', { address });
    return response.data;
  };
