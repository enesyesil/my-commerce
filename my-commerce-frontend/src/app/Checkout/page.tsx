'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CheckoutPage: React.FC = () => (
  <div className="min-h-screen bg-yellow-200 flex flex-col justify-between">
    <Header />
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Checkout</h1>
      <form className="max-w-md mx-auto bg-yellow-300 border-2 border-black p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-black font-bold mb-2">Shipping Address</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-bold mb-2">Payment Details</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
            required
          />
        </div>
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105">
          Place Order
        </button>
      </form>
    </main>
    <Footer />
  </div>
);

export default CheckoutPage;
