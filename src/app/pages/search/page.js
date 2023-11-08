'use client';
import searchResultsGet from '../../api/getSearResults/route';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Search() {
  const [searchResults, setSearchResults] = useState();
  const [trackData, setTrackData] = useState();
  const [albumData, setAlbumData] = useState();
  const [artistData, setArtistData] = useState();
  const [onPageSearchTerm, setOnPageSearchTerm] = useState('');

  const router = useRouter();

  var searchQ = '';

  function getSearchTerm() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var paramID = urlParams.toString();
    var parts = paramID.split('=');
    searchQ = parts[1];
    setOnPageSearchTerm(parts[1]);
  }

  function groupObjectsByType(data) {
    const grouped = {};

    for (const item of data) {
      const { type } = item;
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(item);
    }

    return grouped;
  }

  //TODO - HIDE SECTION ON MENU CLICK
  //TODO - ADD PLAYER

  const fetchSearchResults = async () => {
    try {
      const searchResultsData = await searchResultsGet(searchQ);
      if (searchResultsData) {
        setSearchResults(searchResultsData);
        // var sortedData = groupObjectsByType(searchResultsData);
        setTrackData(searchResultsData.tracks);
        setAlbumData(searchResultsData.albums);
        setArtistData(searchResultsData.artists);
      }
    } catch (error) {
      console.error('Error SEARCH fetching data:', error);
      return false;
    }
  };

  useEffect(() => {
    if (searchResults == undefined && searchQ == '') {
      getSearchTerm();
      fetchSearchResults();
    }
  }, [trackData, albumData, artistData]);

  if (
    trackData != undefined &&
    albumData != undefined &&
    artistData != undefined
  ) {
    return (
      <>
        <div className='p-4 bg-white text-gray-800 h-full'>
          <div className='menu flex gap-4 border-b border-gray-200'>
            <div className='menuItem m-4 ml-0 mb-0 active border-red-600 border-b-2'>
              All
            </div>
            {trackData ? <div className='menuItem m-4 '>Track</div> : ''}
            {artistData ? <div className='menuItem m-4'>Artist</div> : ''}
            {albumData ? <div className='menuItem m-4'>Album</div> : ''}
          </div>
          {/* TRACK RESULTS */}
          {trackData ? (
            <div>
              <div className='title text-3xl font-bold m-4 ml-0 mb-0'>
                TRACKS
              </div>
              <div id='track' className='results p-4'>
                <div className='header border-b border-gray-200 flex w-full'>
                  <div className='menuItem p-4 w-full'>Track</div>
                  <div className='menuItem p-4 w-2/5'>Artist</div>
                  <div className='menuItem p-4 w-2/5'>Album</div>
                  <div className='menuItem p-4 w-1/8'>Time</div>
                </div>
                {trackData.map((track) => (
                  <div
                    className='resultsRow flex gap-4 items-center'
                    key={track.id}
                  >
                    <div className='menuItem m-4 w-full flex gap-4 items-center'>
                      <div className='image rounded-md'>
                        <Image
                          src={track.album.cover_small}
                          alt={track.title}
                          width={56}
                          height={56}
                          className='playlist__img rounded-md w-max'
                        />
                      </div>
                      <div className='name'>{track.title}</div>
                    </div>
                    <div className='menuItem m-4 w-2/5'>
                      {track.artist.name}
                    </div>
                    <div className='menuItem m-4 w-2/5'>
                      {track.album.title}
                    </div>
                    <div className='menuItem m-4 w-1/8'>
                      {Math.floor(track.duration / 60)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ''
          )}
          {/* ALBUM RESULTS */}
          {albumData ? (
            <div>
              <div className='title text-3xl font-bold m-4 ml-0 mb-0'>
                ALBUMS
              </div>
              <div className='results p-4'>
                <div
                  id='album'
                  className='border-b border-gray-200 flex w-full flex-wrap'
                >
                  {albumData.map((album) => (
                    <a href={`/pages/album?id=${album.id}`}>
                      <div className='m-4 p-4 ' key={album.id}>
                        <Image
                          src={album.cover_medium}
                          alt={album.title}
                          width={250}
                          height={250}
                          className='rounded-md w-max'
                        />
                        <div>
                          {album.title} - {album.artist.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          {/* ARTIST RESULTS */}
          {artistData ? (
            <div>
              <div className='title text-3xl font-bold m-4 ml-0 mb-0'>
                ARTISTS
              </div>
              <div className='results p-4'>
                <div
                  id='artist'
                  className='border-b border-gray-200 flex w-full flex-wrap'
                >
                  {artistData.map((artist) => (
                    <a href={`/pages/artist?id=${artist.id}`}>
                      <div className='m-4 p-4' key={artist.id}>
                        <Image
                          src={artist.picture_medium}
                          alt={artist.name}
                          width={250}
                          height={250}
                          className='rounded-md w-max'
                        />
                        <div>{artist.name}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    );
  } else {
    return (
      <div className='p-4 pt-10 bg-white h-full text-gray-800 text-center w-full text-4xl uppercase'>
        No search results found
      </div>
    );
  }
}
