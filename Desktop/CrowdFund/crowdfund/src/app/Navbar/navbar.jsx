'use client'
import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import { navLinks } from "../utils/page";
const navigation = () =>{

}

const Navbar = () => {
    return (
      <div className='w-full bg-[#141414]'>
        <nav className='flex justify-center space-x-12  p-4 lg:px-8 text-white '>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}
              className='hover:bg-gray-200 hover:text-gray-600 transition duration-300 ease-in-out'>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })} 
        <button className='bg-blue-500 hover:bg-blue-800 transition duration-300 ease-in-out text-2xl border-2 border-blue-500 rounded-lg 
        px-2 '>Connect your wallet</button>
        </nav>
      </div>
    );
  };
  
  export default Navbar;