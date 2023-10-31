'use client';
import { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import Image from 'next/image';
import PlaylistList from './components/playlist';
import playListGet from '../app/api/playListGet/route';
import { fromJSON } from 'postcss';


export default function Home() {




  useEffect(() => {

  }, []);

  return (
    <main className='h-fit'>
      <div className='h-40 bg-blue-600 p-4'>Hero Banner</div>
      <div className='h-fit bg-purple-600 p-4 pr-8 '>
        <PlaylistList />
      </div>
      <div className='h-40 bg-yellow-600 p-4'>Artists</div>
      <div className='h-40 bg-orange-600 p-4'>Albums</div>
    </main>
  );
}
