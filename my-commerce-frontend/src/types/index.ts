// src/types/index.ts

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
  }
  
  export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
  }
  