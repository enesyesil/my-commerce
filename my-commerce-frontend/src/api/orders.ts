import axiosInstance from '../utils/axiosInstance';
import { CartItem } from './cart';

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    createdAt: string;
    status: 'pending' | 'completed' | 'cancelled'; // Example order statuses
  }
  
 

  export const placeOrder = async (): Promise<void> => {
    await axiosInstance.post('/order');
  };
  
  export const fetchOrderHistory = async (userId: string): Promise<any[]> => {
    const response = await axiosInstance.get(`/order/${userId}`);
    return response.data;
  };
  