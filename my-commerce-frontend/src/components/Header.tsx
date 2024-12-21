'use client';

import React from 'react';
import AvatarMenu from './avatarMenu'; // Import the AvatarMenu component

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 text-center flex justify-between items-center px-6">
      <div>
        <h1
          className="text-4xl font-bold cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => (window.location.href = '/')}
        >
          Welcome to My Store
        </h1>
        <p className="text-lg mt-2">Your one-stop shop for everything you need!</p>
      </div>
      <div className="flex space-x-4 items-center">
        <button
          className="bg-yellow-500 text-black py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105"
          onClick={() => (window.location.href = '/Cart')}
        >
          Cart
        </button>
        {/* Avatar Menu */}
        <AvatarMenu />
      </div>
    </header>
  );
};

export default Header;
