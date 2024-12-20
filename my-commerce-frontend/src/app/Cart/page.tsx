'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const initialCartItems = [
  { id: 1, name: 'Product 1', price: 10, quantity: 2 },
  { id: 2, name: 'Product 2', price: 15, quantity: 1 },
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle increment quantity
  const handleIncrement = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Handle decrement quantity
  const handleDecrement = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Handle removing an item
  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col justify-between">
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Your Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-yellow-300 p-6 rounded-lg border-4 border-black shadow-xl"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-black">{item.name}</h2>
                    <p className="text-xl text-black">Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="bg-red-500 text-white py-2 px-4 text-lg rounded font-bold hover:bg-red-600"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-black">{item.quantity}</span>
                    <button
                      className="bg-green-500 text-white py-2 px-4 text-lg rounded font-bold hover:bg-green-600"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-black text-white py-3 px-10 text-lg rounded shadow-sm font-bold hover:bg-gray-700"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-black">Total: ${totalPrice.toFixed(2)}</p>
              <button
                className="mt-6 bg-blue-500 text-white py-4 px-8 text-lg rounded shadow-sm font-bold transition-transform transform hover:scale-105"
                onClick={() => (window.location.href = '/Checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-black text-xl font-bold">Your cart is empty!</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
