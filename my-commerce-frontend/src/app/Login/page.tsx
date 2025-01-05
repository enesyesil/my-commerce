'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../../api/auth';
import Header from '@/components/Header';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await loginUser(email, password);
      alert('Login successful!');
      router.push('/List'); // Redirect to profile page
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    }
  };

  return (
    <div> 
    <Header />
    <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
     
      <div className="max-w-lg bg-yellow-300 border-2 border-black p-16 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-black mb-12">Login</h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 px-6 rounded border border-black text-black text-lg"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-6 rounded border border-black text-black text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-yellow-300 py-3 px-5 rounded shadow-lg font-bold text-lg transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <p className="text-black mt-6 text-lg">
          Don&apos;t have an account?{' '}
          <button
            className="text-blue-500 font-bold underline text-lg"
            onClick={() => router.push('/Register')}
          >
            Register here
          </button>
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
