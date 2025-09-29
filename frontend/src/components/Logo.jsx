import React from 'react';

const Logo = ({ size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GrabIt logo"
      className="inline-block"
    >
      <title>GrabIt</title>
      <defs>
        <linearGradient id="lg" x1="0" x2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="64" height="64" rx="12" fill="url(#lg)" />

      {/* shopping bag */}
      <path d="M20 22h24v18a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V22z" fill="#fff" opacity="0.95" />
      <path d="M24 18a8 8 0 0 1 16 0" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* G monogram inside bag */}
      <path d="M30 34h6a3 3 0 1 1 0 6h-6v-4" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    </svg>
  );
};

export default Logo;
