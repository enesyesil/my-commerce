'use client';

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { fetchProducts} from '../../api/catalog';
import { Product } from '../../types/api';


const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p className="text-center text-black font-bold">Loading...</p>;
  if (error) return <p className="text-center text-red-500 font-bold">{error}</p>;

  return (
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
};

export default ProductsPage;
