import axios, { isCancel, AxiosError } from 'axios';
import { NextResponse } from 'next/server';
export default async function GET() {
  const url =
    'https://corsproxy.io/?' +
    encodeURIComponent('https://api.deezer.com/chart/0/artists');

  try {
    const response = await axios.get(url);
    const artists = response.data.data;
    if (artists) {
      console.log('ARTIST DATA API CALL: ', artists);
      return artists;
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
