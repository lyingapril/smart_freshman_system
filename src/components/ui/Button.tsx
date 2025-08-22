import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ 
  children, 
  className = '', 
  disabled = false,
  ...props 
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        py-2 px-4 rounded font-medium transition-colors
        ${disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}