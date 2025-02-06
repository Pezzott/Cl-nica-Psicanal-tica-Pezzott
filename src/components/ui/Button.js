import React from 'react';

const Button = ({ children, variant = 'primary', href, className = '', ...props }) => {
  const baseStyles = 'py-3 px-8 rounded-lg transition-all duration-300 font-medium';
  
  const variants = {
    primary: 'bg-green-700 hover:bg-green-800 text-white shadow-lg',
    secondary: 'border-2 border-green-700 text-green-700 hover:bg-green-50'
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button; 