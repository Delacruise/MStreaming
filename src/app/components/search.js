'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [searchStarted, setSearchStarted] = useState(false);
  const [searchTerm,setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.length >= 2) {
      setSearchStarted(true);
      router.push(`/pages/search?searchTerm=${searchTerm}`);
      setSearchStarted(false);
    }
  };

  //TODO - ADD ON ENTER FUNCTIONALITY

  return (
    <div className='w-full flex bg-green-500 text-gray-800 p-4'>
      <form className='w-full'>
        <input
          placeholder='Search bar'
          className='border-gray-200 border rounded-md p-3 bg-white rounded-r-none w-full'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button
        className='p-3 bg-indigo-600 rounded-md text-gray-50 rounded-l-none cursor-pointer'
        onClick={handleSearch}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5'
        >
          <path
            fillRule='evenodd'
            d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}
