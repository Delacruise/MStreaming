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
        <h1 className='title'>Top Albums</h1>
        <div className='flex gap-4 playlist__scroller flex gap-4 overflow-x-auto'>
          {albumsData.map((album) => (
            <a href={`/pages/album?id=${album.id}`} key={album.id}>
              <div
                key={album.id}
                className='rounded-md h-full drop-shadow-md'
              >
                {album.cover_medium !== null ? (
                  <Image
                    src={album.cover_medium}
                    alt={album.title}
                    width={250}
                    height={250}
                    className='playlist__img rounded-md w-max'
                  />
                ) : (
                  <Image
                    src='/no_image.jpg'
                    alt='No IMage'
                    width={250}
                    height={250}
                    className='playlist__img rounded-md w-max'
                  />
                )}

                <div className='p-4'>
                  <h2 className='playlist__title text-white text-center text-lg truncate'>
                    {album.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
          <a href='/pages/albums'>
            <div className='rounded-md h-full drop-shadow-md inline-block default-width mr-4'>
              <div>
                <Image
                  src='/Default.jpg'
                  alt='View All'
                  width={250}
                  height={250}
                  className='playlist__img rounded-md w-max'
                />
              </div>
              <div className='p-4'>
                <h2 className='playlist__title text-white text-center'>
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
