import Image from 'next/image';
import albumGet from '../api/getAlbums/route';
import { useState, useEffect } from 'react';

export default function Albums() {
  const [albumsData, setAlbumsData] = useState([]);
  const fetchAlbumsData = async () => {
    try {
      const fetchAlbumsData = await albumGet();
      if (fetchAlbumsData.length > 0) {
        setAlbumsData(fetchAlbumsData);
      }
    } catch (error) {
      console.error('Error ARTISTS fetching data:', error);
      return false;
    }
  };

  useEffect(() => {
    if (albumsData.length == 0 || albumsData[0] == undefined) {
      fetchAlbumsData();
    }
  }, [albumsData]);

  if (albumsData.length != 0) {
    return (
      <>
        <h1 className='tracking-wider font-semibold text-2xl pb-8'>
          Top Albums
        </h1>
        <div className='flex gap-4 playlist__scroller flex gap-4 overflow-x-auto'>
          {albumsData.map((album) => (
            <a
              href={album.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 mb-4'
              key={album.id}
            >
              <div
                key={album.id}
                className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block'
              >
                {album.cover_medium !== null ? (
                  <Image
                    src={album.cover_medium}
                    alt={album.title}
                    width={250}
                    height={250}
                    className='playlist__img rounded-md rounded-b-none w-max'
                  />
                ) : (
                  <div className='no__img rounded-md rounded-b-none w-max bg-indigo-400 w-full text-center p-28'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6 text-center text-white'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                )}

                <div className='bg-indigo-600 rounded-t-none rounded-md p-4'>
                  <h2 className='playlist__title text-white text-xl font-bold truncate'>
                    {album.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
          <a href='' target='_blank' className='text-blue-400 text-sm mb-4'>
            <div className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block default-width mr-4'>
              <div className='bg-indigo-600 rounded-md p-4 h-full'>
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
