'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '../../api/auth'; // Import the registration API function
import Footer from '@/components/Footer';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await registerUser(name, email, password);
      alert('Registration successful!');
      router.push('/List'); // Redirect to /List upon success
    } catch (err) {
      setError('Failed to register. Please try again.');
      console.error('Registration error:', err);
    }
  };

  return (
    <div>
    <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
      <div className="max-w-lg bg-yellow-300 border-2 border-black p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-black mb-6">Register</h1>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-5 rounded border border-black text-black text-lg"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-5 rounded border border-black text-black text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-yellow-300 py-3 px-5 rounded shadow-lg font-bold text-lg transition-transform transform hover:scale-105"
          >
            Register
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <p className="text-black mt-6 text-lg">
          Already have an account?{' '}
          <button
            className="text-blue-500 font-bold underline text-lg"
            onClick={() => router.push('/Login')}
          >
            Login here
          </button>
        </p>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default RegisterPage;
