'use client'

import React from 'react';
import Image from 'next/image';



interface ApplicationLogoProps {
    size?: string;
    alt?: string;
    width?: number;
    height?: number;
  }

const ApplicationLogo: React.FC<ApplicationLogoProps> = ({ size='md', alt="Your Logo Text", width = 283, height = 64 }) => {
  const sz = size === 'sm' ? 'w-8 h-auto' : size === 'md' ? 'w-16 h-auto' : 'w-32 h-auto';

  return (
    <Image
      className={sz}
      src="/vercel.svg"
      alt={alt}
      width={width}
      height={height}
      priority
    />
  );
};

export default ApplicationLogo;
