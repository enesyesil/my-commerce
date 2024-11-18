'use client';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => (
  <div className="bg-yellow-300 border-2 border-black p-4 rounded-lg">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
    <h2 className="text-xl font-bold text-black">{product.name}</h2>
    <p className="text-lg font-bold text-black">{product.price}</p>
    <button
      className="mt-4 bg-black text-white py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105"
      onClick={() => window.location.href = `/product/${product.id}`}
    >
      View Details
    </button>
  </div>
);

export default ProductCard;
