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
        <h1 className='title'>Top Artists</h1>
        <div className='playlist__scroller flex gap-4 overflow-x-auto'>
          {artistsData.map((artist) => (
            <a href={`/pages/artist?id=${artist.id}`} key={artist.id}>
              <div key={artist.id} className='card'>
                <Image
                  src={artist.picture_medium}
                  alt={artist.name}
                  width={250}
                  height={250}
                  className='playlist__img rounded-md w-max'
                />
                <div className='p-4'>
                  <h2 className='cardTitle '>{artist.name}</h2>
                </div>
              </div>
            </a>
          ))}
          <a href='/pages/artists'>
            <div className='card mr-4'>
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
                <h2 className='cardTitle'>View all</h2>
              </div>
            </div>
          </a>
        </div>
      </>
    );
  }
}
