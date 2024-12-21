'use client';

import Image from 'next/image';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image?: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => (
  <div className="bg-yellow-300 border-2 border-black p-4 rounded-lg">
    <Image
      src={product.image || '/fallback.jpg'}
      alt={product.name}
      width={400}
      height={250}
      className="w-full h-48 object-cover mb-4"
    />
    <h2 className="text-xl font-bold text-black">{product.name}</h2>
    <p className="text-lg font-bold text-black">{product.price}</p>
    <button
      className="mt-4 bg-black text-white py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105"
      onClick={() => (window.location.href = `/product/${product.id}`)}
    >
      View Details
    </button>
  </div>
);

export default ProductCard;
