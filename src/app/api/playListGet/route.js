import axios, { isCancel, AxiosError } from 'axios';
export default async function GET(req) {
  try {
    const response = await axios.get(
      'http://cors-anywhere.herokuapp.com/api.deezer.com/artist/27/playlists'
    );
    const playlists = response.data;

    if (playlists) {
      return {
        props: {
          playlists,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        playlists: [],
      },
    };
  }
}
