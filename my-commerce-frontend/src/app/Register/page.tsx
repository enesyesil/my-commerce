'use client';

import React from 'react';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
      <div className="max-w-lg bg-yellow-300 border-2 border-black p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-black mb-6">Register</h1>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full py-3 px-5 rounded border border-black text-black text-lg"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-5 rounded border border-black text-black text-lg"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
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
        <p className="text-black mt-6 text-lg">
          Already have an account?{' '}
          <button
            className="text-blue-500 font-bold underline text-lg"
            onClick={() => (window.location.href = '/Login')}
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
