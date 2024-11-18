'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartItem from '../../components/CartItem';

const cartItems = [
  { id: 1, name: 'Product 1', price: 10, quantity: 2 },
  { id: 2, name: 'Product 2', price: 15, quantity: 1 },
];

const CartPage: React.FC = () => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col justify-between">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Your Cart</h1>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-xl font-bold text-black">Total: ${totalPrice.toFixed(2)}</p>
          <button
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105"
            onClick={() => window.location.href = '/checkout'}
          >
            Proceed to Checkout
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
