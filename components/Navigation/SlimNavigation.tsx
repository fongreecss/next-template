'use client'

import Link from 'next/link';
import NormalButton from '../Utils/NormalButton';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Message Board', href: '/message-board' },
  { name: 'Login Page', href: '/login'},
  { name: 'Register Page', href: '/register'},
  { name: 'Cards', href: '/cards'},
]

const SlimNavigation = () => {

  const handleClick = () => {
    event.preventDefault();
    console.log('krneki');
  }

  return (
    <div className="relative items-center justify-center hidden px-6 py-2 overflow-hidden text-sm font-medium bg-gray-500 bg-opacity-70 backdrop-blur-sm lg:flex drop-shadow-menu">
      <ol className="flex space-x-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className=" rounded-md inline-flex items-center px-4 py-1.5 duration-100 hover:text-gray-100 hover:bg-gray-700"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li><NormalButton onClick={() => handleClick()} href="/about">Button to About</NormalButton></li>
      </ol>
    </div>
  );
}

export default SlimNavigation;
