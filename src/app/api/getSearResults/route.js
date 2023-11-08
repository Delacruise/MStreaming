import axios, { isCancel, AxiosError } from 'axios';
import { NextResponse } from 'next/server';
export default async function GET(term) {
  const artistTermUrl = 'https://api.deezer.com/search/artist?q=' + term;
  const albumTermUrl = 'https://api.deezer.com/search/album?q=' + term;
  const trackTermUrl = 'https://api.deezer.com/search/track?q=' + term;
  const artistUrl =
    'https://corsproxy.io/?' + encodeURIComponent(artistTermUrl);
  const albumUrl = 'https://corsproxy.io/?' + encodeURIComponent(albumTermUrl);
  const trackUrl = 'https://corsproxy.io/?' + encodeURIComponent(trackTermUrl);

  const results = { tracks: [], albums: [], artists: [] };
  var resultCount = 0;

  try {
    const artRes = await axios.get(artistUrl);
    const artResults = artRes.data.data;
    if (artResults) {
      console.log('SEARCH ARTIST DATA API CALL: ', artResults);
      results.artists = artResults;
      resultCount++;
    }

    const albRes = await axios.get(albumUrl);
    const albResults = albRes.data.data;
    if (albResults) {
      console.log('SEARCH ALBUM DATA API CALL: ', albResults);
      results.albums = albResults;
      resultCount++;
    }

    const traRes = await axios.get(trackUrl);
    const traResults = traRes.data.data;
    if (traResults) {
      console.log('SEARCH TRACK DATA API CALL: ', traResults);
      results.tracks = traResults;
      resultCount++;
    }

    if (resultCount == 3) {
      
      return results;
    }
  } catch (error) {
    console.log('WE HAVE AN ERROR : ', error);
    return NextResponse.json(
      {
        message: 'Error occurred while getting info!',
      },
      { status: 500 }
    );
  }
}
