"use client"
import Image from 'next/image';
import albumGet from '../../api/getAlbums/route';
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
          <div className='p-4'>
            <h1 className='title'>Top Albums</h1>
            <div className='flex gap-4 flex-wrap justify-evenly'>
              {albumsData.map((album) => (
                <a
                  href={`/pages/album?id=${album.id}`}
                  className='text-blue-400 mb-4'
                  key={album.id}
                >
                  <div key={album.id} className='card'>
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
                        alt='No image'
                        width={250}
                        height={250}
                        className='playlist__img rounded-md w-max'
                      />
                    )}

                    <div className='p-4'>
                      <h2 className='cardTitle'>{album.title}</h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
  }

}
