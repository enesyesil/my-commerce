import axiosInstance from '../utils/axiosInstance';
import { Product } from './catalog';


export interface CartItem {
  id: number;
  productId: number;
  quantity: number;
}

export const addItemToCart = async (productId: number, quantity: number = 1): Promise<void> => {
  await axiosInstance.post('/cart/add', { productId, quantity });
};

export const updateCartItem = async (cartItemId: number, quantity: number): Promise<void> => {
  await axiosInstance.put(`/cart/${cartItemId}`, { quantity });
};

export const removeCartItem = async (cartItemId: number): Promise<void> => {
  await axiosInstance.delete(`/cart/remove/${cartItemId}`);
};

export const fetchCart = async (): Promise<CartItem[]> => {
  const response = await axiosInstance.get('/cart');
  return response.data;
};
