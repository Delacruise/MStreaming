'use client';
import albumGet from '../../api/getAlbum/route';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Album() {
  const [albumData, setAlbumData] = useState();

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var paramID = urlParams.toString();
  var parts = paramID.split('=');
  const albumID = parts[1];

  const fetchAlbumData = async () => {
    try {
      const albumInfo = await albumGet(albumID);
      if (albumInfo) {
        setAlbumData(albumInfo);
      }
    } catch (error) {
      console.error('Error ALBUM fetching data:', error);
      return false;
    }
  };

  useEffect(() => {
    if (albumData == undefined) {
      fetchAlbumData();
    }
  }, [albumData]);

  if (albumData != undefined) {
    return (
      <>
        <div className='header flex p-4 bg-white text-gray-800'>
          <div className='image'>
            <Image
              src={albumData.cover_medium}
              alt={albumData.name}
              width={250}
              height={250}
              className='rounded-lg border-4 border-white'
            />
          </div>
          <div className='album__details p-4 pt-0 '>
            <div className='albumName text-4xl font-bold'>
              {albumData.title}
            </div>
            <div className='flex pt-4'>
              <div className='image pr-4'>
                <Image
                  src={albumData.artist.picture_small}
                  alt={albumData.artist.name}
                  width={56}
                  height={56}
                  className='rounded-lg border-2 border-white'
                />
              </div>
              <div className='artistName text-2xl'>{albumData.artist.name}</div>
            </div>

            <div className='album__info flex pt-2'>
              <div className='tracksNO mr-2'>
                {albumData.nb_tracks} tracks
                <span className='m-2 mt-0 mb-0'>|</span>
              </div>
              <div className='totalTime'>
                {Math.floor(albumData.duration / 60)} min
                <span className='m-2 mt-0 mb-0'>|</span>
              </div>
              <div className='releaseDate'>
                {albumData.release_date}
                <span className='m-2 mt-0 mb-0'>|</span>
              </div>
              <div className='fansNo'>{albumData.fans} fans</div>
            </div>
          </div>
        </div>
        <div className='trackHeader flex w-full border-b border-gray-200 bg-white text-gray-800'>
          <div className='trackNomHeader p-7 pt-0 pb-0'></div>
          <div className='trackNameHeader w-full '>Track</div>
          <div className='trackTimeHeader text-center p-4 pb-0'>Time</div>
        </div>
        {albumData.tracks.data.map((track, index) => (
          <div
            className='tracksContent flex w-full items-center bg-white text-gray-800 border-b border-gray-100'
            key={track.id}
          >
            <div className='trackNom p-4 pb-2 pt-3 text-center'>{index}</div>
            <div className='trackImage p-4 pb-2 pt-3'>
              <Image
                src={track.album.cover_small}
                alt={albumData.name}
                width={56}
                height={56}
                className='rounded-lg border-2 border-white'
              />
            </div>
            <div className='trackName p-4 pb-2 pt-3 w-full'>{track.title}</div>
            <div className='trackTime p-4  pb-2 pt-3 text-center'>
              {Math.floor(track.duration / 60)}
            </div>
          </div>
        ))}
      </>
    );
  }
}
