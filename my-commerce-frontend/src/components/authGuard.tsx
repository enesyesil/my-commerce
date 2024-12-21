'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setRedirectPath } from './redirect';

interface AuthGuardProps {
  children: React.ReactNode; // The component(s) to render if authenticated
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = Boolean(localStorage.getItem('token')); // Replace with your actual authentication check

  useEffect(() => {
    if (!isLoggedIn) {
      setRedirectPath(window.location.pathname); // Save the current path for post-login redirection
      router.push('/login'); // Redirect to login page
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null; // Prevent rendering children while redirecting
  }

  return <>{children}</>; // Render protected content if authenticated
};

export default AuthGuard;
