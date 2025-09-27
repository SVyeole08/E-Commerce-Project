import React from 'react';

const Logo = ({ size = 36 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#g1)" />
      <path d="M7 13c0-3 4-6 6-6s6 3 6 6-4 6-6 6-6-3-6-6z" fill="rgba(255,255,255,0.9)" />
      <path d="M10 11c0-1 2-2 3-2s3 1 3 2-2 2-3 2-3-1-3-2z" fill="#0b1220" opacity="0.15" />
    </svg>
  );
};

export default Logo;
