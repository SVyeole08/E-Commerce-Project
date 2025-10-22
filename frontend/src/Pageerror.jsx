import React from "react";
import { Link } from "react-router-dom";

const Pageerror = ({ code = 404, title = "Page not found", message = "We couldn't find the page you're looking for." }) => {
  return (
    <div className="min-h-screen flex -mt-20 items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <div className="w-full max-w-4xl mx-6 bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800 p-8">
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                {code}
              </div>
              <div className="mt-4 text-sm uppercase tracking-wider text-gray-300">error</div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{title}</h1>
            <p className="mt-4 text-gray-300 max-w-xl">{message}</p>
            <div className="mt-8">
              <Link to="/" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition">
                Back to Home
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              If you believe this is an error, please contact support at <a href="mailto:sarvadnyayeole.contact@gmail.com" className="text-indigo-400 hover:underline">support@grabit.com</a>
            </div>
            <div className="mt-8 hidden md:block">
              <svg width="100%" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                <path d="M0 60 C150 10, 350 110, 500 50 C650 -10, 800 60, 800 60" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageerror;
