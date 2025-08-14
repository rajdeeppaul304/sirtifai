import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-[#374151] text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border border-orange-500 text-orange-500 hover:bg-orange-50 focus:ring-orange-500',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const iconClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={`${iconClasses[size]} ${children ? 'mr-2' : ''}`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`${iconClasses[size]} ${children ? 'ml-2' : ''}`} />
      )}
    </button>
  );
};
