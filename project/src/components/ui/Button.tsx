import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-forest-600 text-white hover:bg-forest-700 focus:ring-forest-500',
    secondary: 'bg-earth-200 text-earth-900 hover:bg-earth-300 focus:ring-earth-400',
    outline: 'border border-forest-300 text-forest-700 hover:bg-forest-50 focus:ring-forest-400',
    text: 'text-forest-600 hover:text-forest-700 hover:underline focus:ring-forest-400',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allStyles} {...props}>
        {children}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={allStyles} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={allStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;