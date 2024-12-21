'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AvatarMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false; // Replace with your authentication logic

  const handleMenuOption = (path: string) => {
    if (!isLoggedIn && path !== '/Register' && path !== '/Login') {
      router.push('/Login');
    } else {
      router.push(path);
    }
    setMenuOpen(false); // Close the menu after navigating
  };

  return (
    <div className="relative">
      {/* Avatar */}
      <button
        className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="text-white font-bold text-xl">A</span>
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-yellow-300 border border-black rounded-lg shadow-lg">
          <ul className="py-2">
            <li
              className="px-4 py-2 text-black hover:bg-yellow-400 cursor-pointer"
              onClick={() => handleMenuOption('/Register')}
            >
              Register
            </li>
            <li
              className="px-4 py-2 text-black hover:bg-yellow-400 cursor-pointer"
              onClick={() => handleMenuOption('/Login')}
            >
              Login
            </li>
            <li
              className="px-4 py-2 text-black hover:bg-yellow-400 cursor-pointer"
              onClick={() => handleMenuOption('/Profile')}
            >
              My Profile
            </li>
            <li
              className="px-4 py-2 text-black hover:bg-yellow-400 cursor-pointer"
              onClick={() => handleMenuOption('/Address')}
            >
              My Address Update
            </li>
            <li
              className="px-4 py-2 text-black hover:bg-yellow-400 cursor-pointer"
              onClick={() => handleMenuOption('/Orders')}
            >
              My Orders
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
