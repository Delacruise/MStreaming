import axios, { isCancel, AxiosError } from 'axios';
import { NextResponse } from 'next/server';
export default async function GET(id) {

  const artistUrl = 'https://api.deezer.com/artist/'+ id + '/top';
  const url = 'https://corsproxy.io/?' + encodeURIComponent(artistUrl);

  try {
    const response = await axios.get(url);
    const artist = response.data;
    if (artist) {
      console.log('ARTIST TRACK LIST DATA API CALL: ', artist);
      return artist;
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
