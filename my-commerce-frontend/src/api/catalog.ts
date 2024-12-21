import axiosInstance from '../utils/axiosInstance';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Ensure price remains a number
  image?: string; // Optional, used if the product has an image
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await axiosInstance.get('/catalog');
      return response.data.map((product: any) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image || '/fallback.jpg',
      }));
    } catch (err) {
      console.error('Error fetching products:', err); // Log the error for debugging
      throw new Error('Failed to fetch products.');
    }
  };
  

// Fetch product details by ID
export const fetchProductDetails = async (id: string): Promise<Product> => {
  const response = await axiosInstance.get(`/catalog/${id}`);
  return {
    id: response.data.id,
    name: response.data.name,
    description: response.data.description,
    price: response.data.price, // Keep price as a number
    image: response.data.image || '/fallback.jpg', // Provide a fallback for missing images
  };
};
