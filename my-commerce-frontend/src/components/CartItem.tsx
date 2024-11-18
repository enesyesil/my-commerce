'use client';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => (
  <div className="flex justify-between items-center border-2 border-black p-4 rounded-lg bg-yellow-300 mb-4">
    <div>
      <h2 className="text-xl font-bold text-black">{item.name}</h2>
      <p className="text-lg text-black">${item.price.toFixed(2)}</p>
    </div>
    <p className="text-lg text-black">Qty: {item.quantity}</p>
  </div>
);

export default CartItem;
