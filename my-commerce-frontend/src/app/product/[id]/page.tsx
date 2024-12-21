'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // Use next/navigation for app directory
import { fetchProductDetails } from '../../../api/catalog';
import { addItemToCart } from '../../../api/cart';

const ProductDetails: React.FC = () => {
  const params = useParams() as { id: string };
  const router = useRouter();
  const [product, setProduct] = useState<any>(null); // Keep type dynamic if needed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductDetails(params.id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id]);

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      await addItemToCart(product.id, 1); // Add product to cart with quantity 1
      alert(`${product.name} has been added to your cart!`);
      router.push('/list'); // Redirect to the List page after success
    } catch (err) {
      alert('Failed to add item to cart.');
      console.error(err);
    }
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-yellow-200 p-16">
      <div className="max-w-md mx-auto bg-yellow-300 border-2 border-black p-6 rounded-lg shadow-lg">
        <img
          src="/gadgets.png"
          alt={product.name || 'Product'}
          className="w-full h-64 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-black">{product.name}</h1>
        <p className="text-lg font-bold text-black">{product.price}</p>
        <p className="text-black mt-4">{product.description}</p>
        <button
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
