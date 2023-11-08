import Image from 'next/image';
import artistsGet from '../api/getArtists/route';
import { useState, useEffect } from 'react';

export default function Artists() {
  const [artistsData, setArtistsData] = useState([]);
  const fetchArtistsData = async () => {
    try {
      const artistsData = await artistsGet();
      if (artistsData.length > 0) {
        setArtistsData(artistsData);
      }
    } catch (error) {
      console.error('Error ARTISTS fetching data:', error);
      return false;
    }
  };

  useEffect(() => {
    if (artistsData.length == 0 || artistsData[0] == undefined) {
      fetchArtistsData();
    }
  }, [artistsData]);
  if (artistsData.length != 0) {
    return (
      <>
        <h1 className='tracking-wider font-semibold text-2xl pb-8'>
          Top Artists
        </h1>
        <div className='playlist__scroller flex gap-4 overflow-x-auto'>
          {artistsData.map((artist) => (
            <a href={`/pages/artist?id=${artist.id}`} key={artist.id}>
              <div
                key={artist.id}
                className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block'
              >
                <Image
                  src={artist.picture_medium}
                  alt={artist.name}
                  width={250}
                  height={250}
                  className='playlist__img rounded-md rounded-b-none w-max'
                />
                <div className='bg-yellow-600 rounded-t-none rounded-md p-4'>
                  <h2 className='playlist__title text-white text-xl font-bold truncate'>
                    {artist.name}
                  </h2>
                </div>
              </div>
            </a>
          ))}
          <a href='/pages/artists'>
            <div className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block default-width mr-4'>
              <div className='bg-yellow-600 rounded-md p-4 h-full'>
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
