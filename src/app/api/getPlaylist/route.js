import axios, { isCancel, AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import { setCookieObj, getCookieObj } from '../../helpers/helpers';
export default async function GET() {
  const url =
    'https://corsproxy.io/?' +
    encodeURIComponent('https://api.deezer.com/artist/27/playlists');

  try {
    const response = await axios.get(url);
    const playlists = response.data.data;
    if (playlists) {
      console.log('PLAYLIST DATA API CALL: ', playlists);
console.log('3');
      return playlists;
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
