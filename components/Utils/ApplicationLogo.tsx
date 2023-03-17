'use client'

import React from 'react';
import Image from 'next/image';



interface ApplicationLogoProps {
    size?: string;
    alt?: string;
    width?: number;
    height?: number;
  }

const ApplicationLogo: React.FC<ApplicationLogoProps> = ({ size='100px', alt="Your Logo Text", width = 283, height = 64 }) => {

  return (
    <Image
      className={`w-[${size}] h-auto`}
      src="/vercel.svg"
      alt={alt}
      width={width}
      height={height}
      priority
    />
  );
};

export default ApplicationLogo;
