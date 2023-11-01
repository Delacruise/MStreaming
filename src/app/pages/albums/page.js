import Image from 'next/image';

const albumData = [
  {
    id: '494309801',
    title: 'Random Access Memories (Drumless Edition)',
    link: 'https://www.deezer.com/album/494309801',
    cover: '',
    cover_small: null,
    cover_medium: null,
    cover_big: null,
    cover_xl: null,
    md5_image: 'bb8b5f188ae380ac3a7c876b70556357',
    genre_id: 106,
    fans: 626,
    release_date: '2023-11-17',
    record_type: 'album',
    tracklist: '',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '294609352',
    title: 'Homework (25th Anniversary Edition)',
    link: 'https://www.deezer.com/album/294609352',
    cover: 'https://api.deezer.com/album/294609352/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/1000x1000-000000-80-0-0.jpg',
    md5_image: '117dcf85bdf0851347403796521d1e9d',
    genre_id: 113,
    fans: 11072,
    release_date: '1997-01-20',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/294609352/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '6575789',
    title: 'Random Access Memories',
    link: 'https://www.deezer.com/album/6575789',
    cover: 'https://api.deezer.com/album/6575789/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
    md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
    genre_id: 113,
    fans: 825766,
    release_date: '2013-05-17',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/6575789/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '438167857',
    title: 'Random Access Memories (10th Anniversary Edition)',
    link: 'https://www.deezer.com/album/438167857',
    cover: 'https://api.deezer.com/album/438167857/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/1000x1000-000000-80-0-0.jpg',
    md5_image: 'ad250e6b44b43490a294d90d6104e124',
    genre_id: 106,
    fans: 17836,
    release_date: '2023-05-12',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/438167857/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '1471670',
    title: 'TRON: Legacy Reconfigured',
    link: 'https://www.deezer.com/album/1471670',
    cover: 'https://api.deezer.com/album/1471670/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/1000x1000-000000-80-0-0.jpg',
    md5_image: '2f34e0fe8086785fab7d6dfd8d48ba5a',
    genre_id: 106,
    fans: 7982,
    release_date: '2011-04-01',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/1471670/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '192529232',
    title:
      'TRON: Legacy - The Complete Edition (Original Motion Picture Soundtrack)',
    link: 'https://www.deezer.com/album/192529232',
    cover: 'https://api.deezer.com/album/192529232/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/1000x1000-000000-80-0-0.jpg',
    md5_image: '313e8a988614445ab1ad508da2805187',
    genre_id: 173,
    fans: 22602,
    release_date: '2020-12-18',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/192529232/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '321108967',
    title: 'TRON: Legacy',
    link: 'https://www.deezer.com/album/321108967',
    cover: 'https://api.deezer.com/album/321108967/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/1000x1000-000000-80-0-0.jpg',
    md5_image: '9c0250e6453c73a96d9e3a99d119ec2f',
    genre_id: 173,
    fans: 1404,
    release_date: '2010-01-01',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/321108967/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '304193',
    title: 'Alive 2007',
    link: 'https://www.deezer.com/album/304193',
    cover: 'https://api.deezer.com/album/304193/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/1000x1000-000000-80-0-0.jpg',
    md5_image: 'ad3dda2e1b770ad143d5dbfeb667fa39',
    genre_id: 113,
    fans: 142773,
    release_date: '2007-11-16',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/304193/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '8244118',
    title: 'Human After All (Remixes)',
    link: 'https://www.deezer.com/album/8244118',
    cover: 'https://api.deezer.com/album/8244118/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/1000x1000-000000-80-0-0.jpg',
    md5_image: 'f6a4dbf47cb8828c281ed4e63364f99e',
    genre_id: 113,
    fans: 31171,
    release_date: '2005-03-20',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/8244118/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
  {
    id: '1343199',
    title: 'Musique, Vol. 1',
    link: 'https://www.deezer.com/album/1343199',
    cover: 'https://api.deezer.com/album/1343199/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/1000x1000-000000-80-0-0.jpg',
    md5_image: '39e2281a0e9f564e73b4f49dfa06f4ab',
    genre_id: 106,
    fans: 61365,
    release_date: '2006-03-31',
    record_type: 'album',
    tracklist: 'https://api.deezer.com/album/1343199/tracks',
    explicit_lyrics: false,
    type: 'album',
  },
];

export default function Albums() {
  return (
    <div className='p-4'>
      <h1 className='font-semibold tracking-wide text-xl mb-4'>Albums</h1>
      <div className='flex flex-wrap gap-x-6 gap-y-20 justify-center rounded-xl '>
        {albumData.map((album) => (
          <div className='border-2 rounded-xl items-center no__img '>
            {album.cover_medium !== null ? (
              <Image
                src={album.cover_medium}
                alt={album.title}
                width={250}
                height={250}
                className='rounded-lg w-max'
              />
            ) : (
              <div className='no__img rounded-xl border-2 p-4'>'No image'</div>
            )}

            <div className='truncate pt-2'>{album.title}</div>
            <div className='truncate pt-2 text-xs font-thin'>
              {album.release_date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
