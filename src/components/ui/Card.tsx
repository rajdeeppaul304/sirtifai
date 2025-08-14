import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hover?: boolean;
}

export const Card = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  hover = false,
}: CardProps) => {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };
  
  const hoverClasses = hover ? 'hover:shadow-2xl transition-shadow duration-300' : '';
  
  const classes = `bg-white rounded-xl border border-gray-100 ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
