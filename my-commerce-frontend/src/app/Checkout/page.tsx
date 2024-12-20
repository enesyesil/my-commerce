'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CheckoutPage: React.FC = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    postalCode: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [orderSummary, setOrderSummary] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'shipping' | 'payment') => {
    const { name, value } = e.target;
    type === 'shipping'
      ? setShippingInfo({ ...shippingInfo, [name]: value })
      : setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const validateInputs = () => {
    // Validate shipping info
    if (!shippingInfo.fullName || !shippingInfo.streetAddress || !shippingInfo.city || !shippingInfo.postalCode) {
      return 'Please fill out all shipping fields.';
    }

    // Validate payment info
    if (!paymentInfo.cardholderName || !paymentInfo.cardNumber || !paymentInfo.expirationDate || !paymentInfo.cvv) {
      return 'Please fill out all payment fields.';
    }

    // Validate card number (16 digits), expiration date (MM/YY), and CVV (3 digits)
    if (!/^\d{16}$/.test(paymentInfo.cardNumber)) return 'Invalid card number.';
    if (!/^\d{2}\/\d{2}$/.test(paymentInfo.expirationDate)) return 'Invalid expiration date. Use MM/YY format.';
    if (!/^\d{3}$/.test(paymentInfo.cvv)) return 'Invalid CVV.';
    
    return null;
  };

  const handlePlaceOrder = () => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    // Dummy Payment Authorization Algorithm
    const isPaymentAccepted = Math.random() > 0.33; // 67% chance to accept payment

    if (isPaymentAccepted) {
      // Mimic successful payment
      setPaymentStatus('success');
      setOrderSummary(`Order placed successfully! Shipping to: ${shippingInfo.streetAddress}`);
    } else {
      // Mimic failed payment
      setPaymentStatus('failed');
      setError('Credit Card Authorization Failed. Please retry or exit.');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col justify-between">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Checkout</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipping Address Card */}
          <div className="bg-yellow-300 border-2 border-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Shipping Address</h2>
            <form>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={shippingInfo.fullName}
                  onChange={(e) => handleInputChange(e, 'shipping')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={shippingInfo.streetAddress}
                  onChange={(e) => handleInputChange(e, 'shipping')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="Enter your street address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={(e) => handleInputChange(e, 'shipping')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={(e) => handleInputChange(e, 'shipping')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="Enter your postal code"
                  required
                />
              </div>
            </form>
          </div>

          {/* Payment Details Card */}
          <div className="bg-yellow-300 border-2 border-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Payment Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={paymentInfo.cardholderName}
                  onChange={(e) => handleInputChange(e, 'payment')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="Enter cardholder's name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={(e) => handleInputChange(e, 'payment')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="Enter your 16-digit card number"
                  maxLength={16}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">Expiration Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={paymentInfo.expirationDate}
                  onChange={(e) => handleInputChange(e, 'payment')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-bold mb-2">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={(e) => handleInputChange(e, 'payment')}
                  className="w-full px-3 py-2 border-2 border-black border-b-4 bg-white text-black rounded focus:outline-none"
                  placeholder="Enter 3-digit CVV"
                  maxLength={3}
                  required
                />
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-6 text-center">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {paymentStatus === 'success' && (
            <p className="text-green-500 font-bold mb-4">{orderSummary}</p>
          )}
          <button
            className="bg-yellow-300 text-black border-2 border-black py-3 px-6 rounded shadow-lg font-bold transition-transform transform hover:scale-105"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
