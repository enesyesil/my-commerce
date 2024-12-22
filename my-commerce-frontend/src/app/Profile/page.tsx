'use client';

import React, { useEffect, useState } from 'react';
import { verifyUser } from '../../api/auth'; // API to verify user session
import AuthGuard from '@/components/authGuard';
import Header from '@/components/Header';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingAddress, setEditingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await verifyUser(); // This should rely on HTTP-only cookies
        if (!response.loggedIn) {
          setError('Not logged in. Please log in to continue.');
          return;
        }
        setUser(response.user);
        setNewAddress(response.user.address || '');
      } catch (err: any) {
        setError('Failed to fetch user profile.');
        console.error('Error fetching user profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateAddress = async () => {
    try {
      const response = await fetch('/api/user/address', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include HTTP-only cookies
        body: JSON.stringify({ address: newAddress }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update address');
      }

      if (user) {
        setUser({ ...user, address: newAddress });
      }
      setEditingAddress(false);
      alert('Address updated successfully!');
    } catch (err: any) {
      alert('Failed to update address. Please try again.');
      console.error('Error updating address:', err);
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
                <strong>Name:</strong> {user.name || 'N/A'}
              </p>
              <p className="text-lg text-black mb-2">
                <strong>Email:</strong> {user.email || 'N/A'}
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
                    <span className="text-black">{user.address || 'No Address'}</span>
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
