'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1', image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$15', description: 'Description of Product 2', image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: '$20', description: 'Description of Product 3', image: '/product3.jpg' },
];

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
        <p className="text-xl font-bold text-black">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-200 p-6">
      <div className="max-w-md mx-auto bg-yellow-300 border-2 border-black p-6 rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={300}
          className="w-full h-64 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-black">{product.name}</h1>
        <p className="text-lg font-bold text-black">{product.price}</p>
        <p className="text-black mt-4">{product.description}</p>
        <button className="mt-4 w-full bg-black text-white py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
