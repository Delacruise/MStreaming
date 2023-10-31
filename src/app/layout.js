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
      <body className=''>
        <div className='flex '>
          <div className='max-w-xs p-4 h-screen bg-gray-500 text-gray-800'>
            <Menu></Menu>
          </div>
          <div className='w-screen overflow-hidden'>
            <Search></Search>
            {children}
          </div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}

