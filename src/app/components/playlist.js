import Image from 'next/image';
import { useState, useEffect } from 'react';
import playListGet from '../api/getPlaylist/route';


export default function PlaylistList() {
  const [playlistData, setPlaylistdata] = useState([]);


  const fetchPlaylistData = async () => {
    try {
      const playlistData = await playListGet();
      if (playlistData.length > 0) {
        setPlaylistdata(playlistData);
      }
    } catch (error) {
      console.error('Error PLAYLIST fetching data:', error);
      return false;
    }
  };


  useEffect(() => {
    if (playlistData.length == 0 || playlistData[0] == undefined) {
      fetchPlaylistData();
    }
  }, [playlistData]);

  if (playlistData.length != 0) {
    return (
      <>
        <h1 className='tracking-wider font-semibold text-2xl pb-8'>
          Playlists
        </h1>
        <div className='playlist__scroller flex gap-4 overflow-x-auto'>
          {playlistData.map((playlist) => (
            <a
              href={playlist.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 mb-4'
              key={playlist.id}
            >
              <div
                key={playlist.id}
                id={playlist.id}
                className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block'
              >
                <Image
                  src={playlist.picture_medium}
                  alt={playlist.title}
                  width={250}
                  height={250}
                  className='playlist__img rounded-md rounded-b-none w-max'
                />
                <div className='bg-purple-600 rounded-t-none rounded-md p-4'>
                  <h2 className='playlist__title text-white text-xl font-bold truncate'>
                    {playlist.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
          <a href='' target='_blank' className='text-blue-400 text-sm mb-4'>
            <div className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block default-width mr-4'>
              <div className='bg-purple-600 rounded-md p-4 h-full'>
                <h2 className='playlist__title text-white text-xl font-bold text-center h-full'>
                  View all
                </h2>
              </div>
            </div>
          </a>
        </div>
      </>
    );
  }
}
