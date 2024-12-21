import axiosInstance from '../utils/axiosInstance';

export const fetchSalesHistory = async (): Promise<any[]> => {
  const response = await axiosInstance.get('/admin/sales');
  return response.data;
};

export const updateInventory = async (productId: number, quantity: number): Promise<void> => {
  await axiosInstance.put(`/admin/inventory/${productId}`, { quantity });
};

export const updateUserDetails = async (userId: number, userDetails: any): Promise<void> => {
  await axiosInstance.put(`/admin/users/${userId}`, userDetails);
};
