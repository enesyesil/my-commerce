
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number; // Ensure price remains a number
    image?: string; // Optional, used if the product has an image
  }
  
  export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
  }
  
  export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    createdAt: string;
    status: 'pending' | 'completed' | 'cancelled'; // Example order statuses
  }
  
  export interface User {
    id: string;
    email: string;
    role?: 'admin' | 'user'; // Role-based access control
  }
  