'use client';

import React from 'react';
import { useUser } from '../../context/UserContext';
import Header from '@/components/Header';

const ProfilePage: React.FC = () => {
  const { user, loggedIn, loading } = useUser(); // Use UserContext

  if (loading) {
    return <p className="text-center text-black font-bold">Loading profile...</p>;
  }

  if (!loggedIn) {
    return <p className="text-center text-red-500 font-bold">Please log in to view your profile.</p>;
  }

  return (
    <div className="min-h-screen bg-yellow-200 p-6">
      <Header />
      <div className="max-w-md mx-auto bg-yellow-300 border-2 border-black p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-4">My Profile</h1>
        <p className="text-lg text-black mb-2">
          <strong>Email:</strong> {user?.email || 'N/A'}
        </p>
        <p className="text-lg text-black mb-2">
          <strong>Role:</strong> {user?.role || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
