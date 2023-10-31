import Image from 'next/image';

export default function PlaylistList() {
  const playlists = [
    {
      id: 1283464975,
      title: 'Pop Chill',
      public: true,
      nb_tracks: 62,
      link: 'https://www.deezer.com/playlist/1283464975',
      picture: 'https://api.deezer.com/playlist/1283464975/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/a4d4f11fa8b750a3e2699645ff20e1a6/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/a4d4f11fa8b750a3e2699645ff20e1a6/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/a4d4f11fa8b750a3e2699645ff20e1a6/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/a4d4f11fa8b750a3e2699645ff20e1a6/1000x1000-000000-80-0-0.jpg',
      checksum: 'e6f3b3eda268994bf4618f5bacf1a3a2',
      tracklist: 'https://api.deezer.com/playlist/1283464975/tracks',
      creation_date: '2015-06-26 18:55:31',
      md5_image: 'a4d4f11fa8b750a3e2699645ff20e1a6',
      picture_type: 'playlist',
      user: {
        id: 753546365,
        name: 'Fábio - Deezer Pop Editor',
        tracklist: 'https://api.deezer.com/user/753546365/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 4485213484,
      title: 'Feel Good Soul & Funk',
      public: true,
      nb_tracks: 50,
      link: 'https://www.deezer.com/playlist/4485213484',
      picture: 'https://api.deezer.com/playlist/4485213484/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/ae3536299339439a79af6ab7fbee6b75/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/ae3536299339439a79af6ab7fbee6b75/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/ae3536299339439a79af6ab7fbee6b75/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/ae3536299339439a79af6ab7fbee6b75/1000x1000-000000-80-0-0.jpg',
      checksum: '6287e583bb32118e5cf53dc7e7fd519d',
      tracklist: 'https://api.deezer.com/playlist/4485213484/tracks',
      creation_date: '2018-05-18 20:03:25',
      md5_image: 'ae3536299339439a79af6ab7fbee6b75',
      picture_type: 'playlist',
      user: {
        id: 2862678264,
        name: 'Yannick - Soul & Funk Deezer Editor',
        tracklist: 'https://api.deezer.com/user/2862678264/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 756018311,
      title: '70s Pop',
      public: true,
      nb_tracks: 50,
      link: 'https://www.deezer.com/playlist/756018311',
      picture: 'https://api.deezer.com/playlist/756018311/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/704e3649fefaeed17780cdae78fd44ba/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/704e3649fefaeed17780cdae78fd44ba/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/704e3649fefaeed17780cdae78fd44ba/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/704e3649fefaeed17780cdae78fd44ba/1000x1000-000000-80-0-0.jpg',
      checksum: '15ea5ba1a54717e0e82603cf12e469fb',
      tracklist: 'https://api.deezer.com/playlist/756018311/tracks',
      creation_date: '2014-01-17 14:36:43',
      md5_image: '704e3649fefaeed17780cdae78fd44ba',
      picture_type: 'playlist',
      user: {
        id: 753546365,
        name: 'Fábio - Deezer Pop Editor',
        tracklist: 'https://api.deezer.com/user/753546365/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 3787262302,
      title: 'Tropical House 2023 🌴 | Beach Vibes, Chill Music',
      public: true,
      nb_tracks: 175,
      link: 'https://www.deezer.com/playlist/3787262302',
      picture: 'https://api.deezer.com/playlist/3787262302/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/085aca8d4aa281ff6ebd8be8edb4d35e/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/085aca8d4aa281ff6ebd8be8edb4d35e/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/085aca8d4aa281ff6ebd8be8edb4d35e/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/085aca8d4aa281ff6ebd8be8edb4d35e/1000x1000-000000-80-0-0.jpg',
      checksum: 'f16d10e4d66df0285fa3342dfb4937b8',
      tracklist: 'https://api.deezer.com/playlist/3787262302/tracks',
      creation_date: '2017-11-10 19:04:14',
      md5_image: '085aca8d4aa281ff6ebd8be8edb4d35e',
      picture_type: 'playlist',
      user: {
        id: 1756462062,
        name: 'ChillYourMind',
        tracklist: 'https://api.deezer.com/user/1756462062/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 8788949122,
      title: 'happy lofi',
      public: true,
      nb_tracks: 80,
      link: 'https://www.deezer.com/playlist/8788949122',
      picture: 'https://api.deezer.com/playlist/8788949122/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/01d0c615683367f1c1ac8e3d5b92c5f7/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/01d0c615683367f1c1ac8e3d5b92c5f7/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/01d0c615683367f1c1ac8e3d5b92c5f7/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/01d0c615683367f1c1ac8e3d5b92c5f7/1000x1000-000000-80-0-0.jpg',
      checksum: 'e5a0e239d240a765806a421bc8153d2c',
      tracklist: 'https://api.deezer.com/playlist/8788949122/tracks',
      creation_date: '2021-03-01 18:53:09',
      md5_image: '01d0c615683367f1c1ac8e3d5b92c5f7',
      picture_type: 'playlist',
      user: {
        id: 846571671,
        name: 'Alice - Deezer Moods Editor',
        tracklist: 'https://api.deezer.com/user/846571671/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 1440614715,
      title: 'Afro Hits',
      public: true,
      nb_tracks: 50,
      link: 'https://www.deezer.com/playlist/1440614715',
      picture: 'https://api.deezer.com/playlist/1440614715/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/bc1ec852770be1337bde985b72f15999/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/bc1ec852770be1337bde985b72f15999/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/bc1ec852770be1337bde985b72f15999/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/bc1ec852770be1337bde985b72f15999/1000x1000-000000-80-0-0.jpg',
      checksum: 'f5d6dc1599ac1def215c4b368683c429',
      tracklist: 'https://api.deezer.com/playlist/1440614715/tracks',
      creation_date: '2015-11-04 13:21:29',
      md5_image: 'bc1ec852770be1337bde985b72f15999',
      picture_type: 'playlist',
      user: {
        id: 3115990644,
        name: 'Ayoub - Deezer Afro Editor',
        tracklist: 'https://api.deezer.com/user/3115990644/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 7549902762,
      title: 'Rain Sounds (20+ Hours) Rain Noise, Rain Drop',
      public: true,
      nb_tracks: 516,
      link: 'https://www.deezer.com/playlist/7549902762',
      picture: 'https://api.deezer.com/playlist/7549902762/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/d691be93a31e7d5853c5356c814dff81/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/d691be93a31e7d5853c5356c814dff81/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/d691be93a31e7d5853c5356c814dff81/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/d691be93a31e7d5853c5356c814dff81/1000x1000-000000-80-0-0.jpg',
      checksum: 'f9ca86df3ba5280e4e6c36bac2e637b7',
      tracklist: 'https://api.deezer.com/playlist/7549902762/tracks',
      creation_date: '2020-04-21 09:51:39',
      md5_image: 'd691be93a31e7d5853c5356c814dff81',
      picture_type: 'playlist',
      user: {
        id: 1721738026,
        name: 'edmsauce',
        tracklist: 'https://api.deezer.com/user/1721738026/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 5923153024,
      title: 'Sunny Bossa Nova',
      public: true,
      nb_tracks: 49,
      link: 'https://www.deezer.com/playlist/5923153024',
      picture: 'https://api.deezer.com/playlist/5923153024/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/b8ce6f8bcefdf7ce798124ce778379f2/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/b8ce6f8bcefdf7ce798124ce778379f2/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/b8ce6f8bcefdf7ce798124ce778379f2/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/b8ce6f8bcefdf7ce798124ce778379f2/1000x1000-000000-80-0-0.jpg',
      checksum: 'fe3469033a67d0bcad547fb8085ec168',
      tracklist: 'https://api.deezer.com/playlist/5923153024/tracks',
      creation_date: '2019-05-14 21:01:54',
      md5_image: 'b8ce6f8bcefdf7ce798124ce778379f2',
      picture_type: 'playlist',
      user: {
        id: 902801015,
        name: 'Yannick - Deezer Jazz & Blues Editor',
        tracklist: 'https://api.deezer.com/user/902801015/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 1479458365,
      title: 'Happy Hits',
      public: true,
      nb_tracks: 80,
      link: 'https://www.deezer.com/playlist/1479458365',
      picture: 'https://api.deezer.com/playlist/1479458365/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/192ec242f3d9a3017edf7e967cf44f2c/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/192ec242f3d9a3017edf7e967cf44f2c/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/192ec242f3d9a3017edf7e967cf44f2c/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/192ec242f3d9a3017edf7e967cf44f2c/1000x1000-000000-80-0-0.jpg',
      checksum: '31229ffe357aa7e52d8e92dd0e8a3e94',
      tracklist: 'https://api.deezer.com/playlist/1479458365/tracks',
      creation_date: '2015-12-02 14:41:53',
      md5_image: '192ec242f3d9a3017edf7e967cf44f2c',
      picture_type: 'playlist',
      user: {
        id: 846571671,
        name: 'Alice - Deezer Moods Editor',
        tracklist: 'https://api.deezer.com/user/846571671/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 4590807924,
      title: 'Calm Piano',
      public: true,
      nb_tracks: 200,
      link: 'https://www.deezer.com/playlist/4590807924',
      picture: 'https://api.deezer.com/playlist/4590807924/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/e40b0fb27916af1e7b5adfd6794dd6df/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/e40b0fb27916af1e7b5adfd6794dd6df/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/e40b0fb27916af1e7b5adfd6794dd6df/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/e40b0fb27916af1e7b5adfd6794dd6df/1000x1000-000000-80-0-0.jpg',
      checksum: '2bce034b559bb5f2f5960092c4bfe215',
      tracklist: 'https://api.deezer.com/playlist/4590807924/tracks',
      creation_date: '2018-06-21 13:28:30',
      md5_image: 'e40b0fb27916af1e7b5adfd6794dd6df',
      picture_type: 'playlist',
      user: {
        id: 353978015,
        name: 'Yannick - Deezer Classical Editor',
        tracklist: 'https://api.deezer.com/user/353978015/flow',
        type: 'user',
      },
      type: 'playlist',
    },
  ];

  return (
    <>
      <h1 className='tracking-wider font-semibold text-2xl pb-8'>Playlists</h1>
      <div className='playlist__scroller flex gap-4 overflow-x-auto'>
        {playlists.map((playlist) => (
          <a
            href={playlist.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 mb-4'
          >
            <div
              key={playlist.id}
              id={playlist.id}
              className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block'
            >
              <Image
                src={playlist.picture_medium}
                alt={playlist.title}
                width={250}
                height={250}
                className='playlist__img rounded-md rounded-b-none w-max'
              />
              <div className='bg-purple-600 rounded-t-none rounded-md p-4'>
                <h2 className='playlist__title text-white text-xl font-bold truncate'>
                  {playlist.title}
                </h2>
              </div>
            </div>
          </a>
        ))}
        <a href='' target='_blank' className='text-blue-400 text-sm mb-4'>
          <div className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block default-width mr-4'>
            <div className='bg-purple-600 rounded-md p-4 h-full'>
              <h2 className='playlist__title text-white text-xl font-bold text-center h-full'>
                View all
              </h2>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
