import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wider transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-transparent",
    secondary: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/50 hover:bg-accent-cyan/20 hover:border-accent-cyan",
    outline: "bg-transparent text-white border border-ui-border hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-neutral-400 hover:text-white"
  };

  const sizes = {
    sm: "text-xs px-4 py-2 h-8",
    md: "text-sm px-6 py-3 h-10",
    lg: "text-base px-8 py-4 h-12"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};