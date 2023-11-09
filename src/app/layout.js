import { Inter } from 'next/font/google'
import './globals.css'
import Search from './components/search'
import Footer from '../app/components/footer';
import Menu from '../app/components/menu';
import React from 'react';



export const metadata = {
  title: 'Music Streaming App',
  description: 'Music Streaming App based on Deezer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gray-800 relative'>
        <div className='red__bar__left'></div>
        <div className=' drop-shadow-2xl m-16'>
          <div className='flex h-fit bg-gray-900'>
            <div className='p-7 pt-4 bg-gray-800 text-gray-200'>
              <Menu></Menu>
            </div>
            <div className='w-screen overflow-hidden'>
              <Search></Search>
              {children}
            </div>
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}

