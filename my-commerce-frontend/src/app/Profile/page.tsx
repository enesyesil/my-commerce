'use client';

import React, { useEffect, useState } from 'react';
import { fetchUserProfile, UserProfile, updateUserAddress } from '../../api/user';
import AuthGuard from '@/components/authGuard';
import Header from '@/components/Header';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingAddress, setEditingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (!token) throw new Error('No token found');

        const data = await fetchUserProfile();
        setUser(data);
        setNewAddress(data.address);
      } catch (err) {
        setError('Failed to load user profile.');
        console.error('Error fetching user profile:', err);
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, []);

  const handleUpdateAddress = async () => {
    try {
      await updateUserAddress(newAddress);
      if (user) {
        setUser({ ...user, address: newAddress });
      }
      setEditingAddress(false);
      alert('Address updated successfully!');
    } catch (err) {
      console.error('Failed to update address:', err);
      alert('Failed to update address. Please try again.');
    }
  };

  return (
    <AuthGuard>
      <Header />
      <div className="min-h-screen bg-yellow-200 p-6">
        <div className="max-w-md mx-auto bg-yellow-300 border-2 border-black p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-black mb-4">My Profile</h1>

          {loading ? (
            <p className="text-center text-black font-bold">Loading profile...</p>
          ) : error ? (
            <p className="text-center text-red-500 font-bold">{error}</p>
          ) : user ? (
            <>
              <p className="text-lg text-black mb-2">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="text-lg text-black mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <div className="mb-4">
                <strong className="text-lg text-black">Address:</strong>
                {editingAddress ? (
                  <div className="mt-2">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-black rounded"
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                    />
                    <div className="mt-2 flex justify-end space-x-2">
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded shadow"
                        onClick={handleUpdateAddress}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white py-2 px-4 rounded shadow"
                        onClick={() => setEditingAddress(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-black">{user.address}</span>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded shadow"
                      onClick={() => setEditingAddress(true)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <p className="text-center text-black font-bold">No profile data available.</p>
          )}
        </div>
      </div>
    </AuthGuard>
  );
};

export default ProfilePage;
