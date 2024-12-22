'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import { verifyUser, User } from '../api/auth'; // Import from API folder

interface UserContextValue {
  user: User | null;
  loggedIn: boolean;
  loading: boolean;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const { loggedIn, user } = await verifyUser();
        setLoggedIn(loggedIn);
        setUser(user || null);
      } catch (err) {
        console.error('Error verifying user:', err);
        setLoggedIn(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <UserContext.Provider value={{ user, loggedIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
