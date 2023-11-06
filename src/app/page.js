'use client';
import { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import Image from 'next/image';
import PlaylistList from './components/playlist';
import Artists from './components/artists';
import Albums from './components/albums';
import playListGet from './api/getPlaylist/route';
import { setCookieObj, getCookieObj } from '../app/helpers/helpers';

export default function Home() {

  useEffect(() => {

  }, []);

  return (
    <main className='h-fit'>
      <div className='h-40 bg-blue-600 p-4'>Hero Banner</div>
      <div className='h-fit bg-purple-600 p-4 pr-8 '>
        <PlaylistList />
      </div>
      <div className='h-fit bg-yellow-600 p-4 pr-8'>
        <Artists />
      </div>
      <div className='h-fit bg-indigo-600 p-4 pr-8'>
        <Albums />
      </div>
    </main>
  );
}
