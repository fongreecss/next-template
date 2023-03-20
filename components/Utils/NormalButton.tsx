import Link from 'next/link';
import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  color?: string;
  bgColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  children?: ReactNode;
};

const NormalButton: React.FC<ButtonProps> = ({
  onClick,
  href = '#',
  color = 'white',
  bgColor = 'blue-500',
  size = 'md',
  children,
}) => {

  const sizes = {
    sm: 'py-1.5 px-4 text-xs',
    md: 'py-2 px-6 text-sm',
    lg: 'py-3 px-8 text-base',
    xl: 'py-4 px-10 text-lg'
  };

  return (
    <Link href={href} target={`_blank`}>
      <button
        className={`bg-${bgColor} text-${color} ${sizes[size]} rounded-md shadow`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default NormalButton;
