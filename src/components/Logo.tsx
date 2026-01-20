import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg width="60" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#007BFF', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#FF7F00', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF0000', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g>
          <polygon points="30,10 60,30 60,70 30,90 0,70 0,30" fill="url(#grad1)" />
          <text x="80" y="40" fontFamily="Arial" fontSize="24" fill="#003366" fontWeight="bold">Redefined</text>
          <text x="80" y="70" fontFamily="Arial" fontSize="16" fill="#FF7F00" fontWeight="bold">IT SOLUTIONS</text>
        </g>
      </svg>
      <span className="font-bold text-lg text-blue-700">Redefined IT</span>
    </div>
  );
}
