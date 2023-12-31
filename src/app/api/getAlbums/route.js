import axios, { isCancel, AxiosError } from 'axios';
import { NextResponse } from 'next/server';
export default async function GET() {
  const albumUrl = 'https://api.deezer.com/chart/0/albums';
  const url = 'https://corsproxy.io/?' + encodeURIComponent(albumUrl);

  try {
    const response = await axios.get(url);
    const albums = response.data.data;
    if (albums) {
      console.log('ALBUMS DATA API CALL: ', albums);
      return albums;
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
