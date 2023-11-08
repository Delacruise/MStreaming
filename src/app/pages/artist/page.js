'use client';
import Image from 'next/image';
import artistGet from '../../api/getArtist/route';
import artistTrackListGet from '../../api/getArtistTrackList/route';
import artistAlbumGet from '../../api/getArtistAlbum/route';
import { useState, useEffect } from 'react';

export default function Artist() {
  const [artistData, setArtistData] = useState();
  const [trackListData, setTrackListData] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var paramID = urlParams.toString();
  var parts = paramID.split('=');
  const artistID = parts[1];

  const fetchArtistData = async () => {
    try {
      const artistData = await artistGet(artistID);
      if (artistData) {
        setArtistData(artistData);
      }
    } catch (error) {
      console.error('Error ARTIST fetching data:', error);
      return false;
    }
  };

  const fetchArtistsTrackListData = async () => {
    try {
      const trackListData = await artistTrackListGet(artistID);
      if (trackListData.data.length > 0) {
        setTrackListData(trackListData.data);
      }
    } catch (error) {
      console.error('Error ARTIST TRACK LIST fetching data:', error);
      return false;
    }
  };

  const fetchArtistsAlbumsData = async () => {
    try {
      const albumsData = await artistAlbumGet(artistID);
      if (albumsData.data.length > 0) {
        setAlbumData(albumsData.data);
      }
    } catch (error) {
      console.error('Error ARTIST ALBUM fetching data:', error);
      return false;
    }
  };

  useEffect(() => {
    if (artistData == undefined) {
      fetchArtistData();
    }

    if (trackListData.length == 0) {
      fetchArtistsTrackListData();
    }

    if (albumData.length == 0) {
      fetchArtistsAlbumsData();
    }
  }, [artistData, trackListData, albumData]);

  if (
    artistData != undefined &&
    trackListData.length >= 0 &&
    albumData.length >= 0
  ) {
    return (
      <>
        <div className='top__section flex p-4 bg-purple-600'>
          <div className='left__section flex'>
            <Image
              src={artistData.picture_medium}
              alt={artistData.name}
              width={250}
              height={250}
              className='rounded-lg border-4 border-white'
            />
            <div className='ml-4'>
              <div className='font-semibold text-white tracking-wide text-xl'>
                {artistData.name}
              </div>
              <div>{artistData.nb_fan}</div>
            </div>
          </div>
          <div className='right__section'></div>
        </div>
        <div className='menu'></div>
        <div className='tracks__section bg-gray-600 p-4'>
          <h1 className='font-semibold tracking-wide text-xl'>Top Tracks</h1>
          <div className=''>
            {trackListData.map((track) => (
              <a
                href={track.link}

              >
                <div
                  key={track.id}
                  id={track.id}
                  className='p-2 rounded-md  h-full flex'
                >
                  <Image
                    src={track.album.cover_small}
                    alt={track.title}
                    width={56}
                    height={56}
                    className='rounded-md w-max'
                  />
                  <div className='text-white font-semibold text-md truncate pl-4'>
                    {track.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='albums__section bg-indigo-600 p-4 h-fit pb-24'>
          <h1 className='font-semibold tracking-wide text-xl mb-4'>Albums</h1>
          <div className='flex flex-wrap gap-x-4 gap-y-20 justify-between'>
            {albumData.map((album) => (
              <div className='no__img'>
                {album.cover_medium !== null ? (
                  <Image
                    src={album.cover_medium}
                    alt={album.title}
                    width={250}
                    height={250}
                    className='rounded-lg w-max'
                  />
                ) : (
                  <div className='no__img rounded-xl border-2 p-4'>
                    'No image'
                  </div>
                )}

                <div className='truncate pt-2'>{album.title}</div>
                <div className='truncate pt-2 text-xs font-thin'>
                  {album.release_date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
