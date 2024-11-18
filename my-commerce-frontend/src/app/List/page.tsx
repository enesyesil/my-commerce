'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$15', image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: '$20', image: '/product3.jpg' },
];

const ProductsPage: React.FC = () => (
  <div className="min-h-screen bg-yellow-200 flex flex-col justify-between">
    <Header />
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default ProductsPage;
