import axios, { isCancel, AxiosError } from 'axios';
import { NextResponse } from 'next/server';
export default async function GET(id) {
  const albumUrl = 'https://api.deezer.com/album/' + id;
  const url = 'https://corsproxy.io/?' + encodeURIComponent(albumUrl);

  try {
    const response = await axios.get(url);
    const album = response.data;
    if (album) {
      console.log('ALBUM API CALL: ', album);
      return album;
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
