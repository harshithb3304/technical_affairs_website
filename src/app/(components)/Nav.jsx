'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  useEffect(() => {
    return () => {
      
    };
  }, []);

  return (
    <nav className="flex justify-between bg-[#bc005a] p-4">
      <div className='flex items-center space-x-6'> 
        <Link href='/' className='no-underline'>
          <div className='flex items-center space-x-2'>
            <Image 
              src="/favicon.ico"
              alt="Favicon"
              width={50}
              height={50} 
            />
            <h1 className='text-white text-2xl font-bold'>TECHNICAL AFFAIRS</h1>
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
<<<<<<< HEAD
        <Link href='/'>
          <h1 className='text-black hover:text-white text-2xl font-bold '>Home</h1>
        </Link>
        <Link href='/clubs'>
          <h1 className='text-black hover:text-white text-2xl font-bold'>Clubs</h1>
        </Link>
        <Link href='/'>
          <h1 className='text-black hover:text-white text-2xl font-bold'>About</h1>
        </Link>
        <Link href='/'>
          <h1 className='text-black hover:text-white text-2xl font-bold'>Vashisht</h1>
=======
        <Link href='/' className='no-underline'>
          <h1 className='text-black hover:text-white text-2xl font-bold'>Home</h1>
        </Link>
        <Link href='/' className='no-underline'>
          <h1 className='text-black hover:text-white text-2xl font-bold'>Clubs</h1>
        </Link>
        <Link href='/' className='no-underline'>
            <h1 className='text-black hover:text-white text-2xl font-bold'>About</h1>
        </Link>
        <Link href='/' className='no-underline'>
            <h1 className='text-black hover:text-white text-2xl font-bold'>Vashisht</h1>
>>>>>>> origin/webpage2+3
        </Link>
        <Link href='/' className='no-underline'>
          <h1 className='text-black hover:text-white text-2xl font-bold'>Joy of Giving</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
