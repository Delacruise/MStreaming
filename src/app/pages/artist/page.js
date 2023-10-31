import Image from 'next/image';

const artistData = {
  id: '27',
  name: 'Daft Punk',
  link: 'https://www.deezer.com/artist/27',
  share:
    'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698745853&utm_medium=web',
  picture: 'https://api.deezer.com/artist/27/image',
  picture_small:
    'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
  picture_medium:
    'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
  picture_big:
    'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
  picture_xl:
    'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
  nb_album: 39,
  nb_fan: 4514335,
  radio: true,
  tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
  type: 'artist',
};

const tracksData = [
  {
    id: '67238732',
    readable: true,
    title: 'Instant Crush (feat. Julian Casablancas)',
    title_short: 'Instant Crush',
    title_version: '(feat. Julian Casablancas)',
    link: 'https://www.deezer.com/track/67238732',
    duration: '337',
    rank: '944205',
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      'https://cdns-preview-7.dzcdn.net/stream/c-7d29f91f6875494c4104a0c436581293-9.mp3',
    contributors: [
      {
        id: 27,
        name: 'Daft Punk',
        link: 'https://www.deezer.com/artist/27',
        share:
          'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/27/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
      {
        id: 295821,
        name: 'Julian Casablancas',
        link: 'https://www.deezer.com/artist/295821',
        share:
          'https://www.deezer.com/artist/295821?utm_source=deezer&utm_content=artist-295821&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/295821/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/295821/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
    ],
    md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
    artist: {
      id: '27',
      name: 'Daft Punk',
      tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
      type: 'artist',
    },
    album: {
      id: '6575789',
      title: 'Random Access Memories',
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
      tracklist: 'https://api.deezer.com/album/6575789/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: '66609426',
    readable: true,
    title: 'Get Lucky (Radio Edit - feat. Pharrell Williams and Nile Rodgers)',
    title_short: 'Get Lucky',
    title_version: '(Radio Edit - feat. Pharrell Williams and Nile Rodgers)',
    link: 'https://www.deezer.com/track/66609426',
    duration: '248',
    rank: '949052',
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      'https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3',
    contributors: [
      {
        id: 27,
        name: 'Daft Punk',
        link: 'https://www.deezer.com/artist/27',
        share:
          'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/27/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
      {
        id: 103,
        name: 'Pharrell Williams',
        link: 'https://www.deezer.com/artist/103',
        share:
          'https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/103/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/103/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
      {
        id: 7207,
        name: 'Nile Rodgers',
        link: 'https://www.deezer.com/artist/7207',
        share:
          'https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/7207/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/7207/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
    ],
    md5_image: 'bc49adb87758e0c8c4e508a9c5cce85d',
    artist: {
      id: '27',
      name: 'Daft Punk',
      tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
      type: 'artist',
    },
    album: {
      id: '6516139',
      title:
        'Get Lucky (Radio Edit - feat. Pharrell Williams and Nile Rodgers)',
      cover: 'https://api.deezer.com/album/6516139/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/1000x1000-000000-80-0-0.jpg',
      md5_image: 'bc49adb87758e0c8c4e508a9c5cce85d',
      tracklist: 'https://api.deezer.com/album/6516139/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: '67238733',
    readable: true,
    title: 'Lose Yourself to Dance (feat. Pharrell Williams)',
    title_short: 'Lose Yourself to Dance',
    title_version: '(feat. Pharrell Williams)',
    link: 'https://www.deezer.com/track/67238733',
    duration: '353',
    rank: '781112',
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      'https://cdns-preview-9.dzcdn.net/stream/c-9ecd0689abbd6a439e4693f15d6ae37d-9.mp3',
    contributors: [
      {
        id: 27,
        name: 'Daft Punk',
        link: 'https://www.deezer.com/artist/27',
        share:
          'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/27/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
      {
        id: 103,
        name: 'Pharrell Williams',
        link: 'https://www.deezer.com/artist/103',
        share:
          'https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/103/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/103/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
    ],
    md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
    artist: {
      id: '27',
      name: 'Daft Punk',
      tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
      type: 'artist',
    },
    album: {
      id: '6575789',
      title: 'Random Access Memories',
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
      tracklist: 'https://api.deezer.com/album/6575789/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: '2271581007',
    readable: true,
    title: 'Get Lucky (feat. Pharrell Williams and Nile Rodgers)',
    title_short: 'Get Lucky',
    title_version: '(feat. Pharrell Williams and Nile Rodgers)',
    link: 'https://www.deezer.com/track/2271581007',
    duration: '369',
    rank: '623545',
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 2,
    preview:
      'https://cdns-preview-8.dzcdn.net/stream/c-8857edefdd2b01bf9b5a2ca99accaf5e-2.mp3',
    contributors: [
      {
        id: 27,
        name: 'Daft Punk',
        link: 'https://www.deezer.com/artist/27',
        share:
          'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/27/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
      {
        id: 103,
        name: 'Pharrell Williams',
        link: 'https://www.deezer.com/artist/103',
        share:
          'https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/103/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/103/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
      {
        id: 7207,
        name: 'Nile Rodgers',
        link: 'https://www.deezer.com/artist/7207',
        share:
          'https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/7207/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/7207/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
    ],
    md5_image: 'ad250e6b44b43490a294d90d6104e124',
    artist: {
      id: '27',
      name: 'Daft Punk',
      tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
      type: 'artist',
    },
    album: {
      id: '438167857',
      title: 'Random Access Memories (10th Anniversary Edition)',
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
      tracklist: 'https://api.deezer.com/album/438167857/tracks',
      type: 'album',
    },
    type: 'track',
  },
  {
    id: '67238730',
    readable: true,
    title: 'Giorgio by Moroder',
    title_short: 'Giorgio by Moroder',
    title_version: '',
    link: 'https://www.deezer.com/track/67238730',
    duration: '544',
    rank: '731853',
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-65b752b963e82a16307f5499358c6e3b-9.mp3',
    contributors: [
      {
        id: 27,
        name: 'Daft Punk',
        link: 'https://www.deezer.com/artist/27',
        share:
          'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698748828&utm_medium=web',
        picture: 'https://api.deezer.com/artist/27/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
    ],
    md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
    artist: {
      id: '27',
      name: 'Daft Punk',
      tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
      type: 'artist',
    },
    album: {
      id: '6575789',
      title: 'Random Access Memories',
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
      tracklist: 'https://api.deezer.com/album/6575789/tracks',
      type: 'album',
    },
    type: 'track',
  },
];

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

export default function Artist() {
  return (
    <>
      <div className='top__section flex p-4 bg-purple-600'>
        <div className='left__section flex'>
          <Image
            src={artistData.picture_medium}
            alt={artistData.name}
            width={250}
            height={250}
            className='rounded-lg border-4 border-white'
          />
          <div className='ml-4'>
            <div className='font-semibold text-white tracking-wide text-xl'>
              {artistData.name}
            </div>
            <div>{artistData.nb_fan}</div>
          </div>
        </div>
        <div className='right__section'></div>
      </div>
      <div className='menu'></div>
      <div className='tracks__section bg-gray-600 p-4'>
        <h1 className='font-semibold tracking-wide text-xl'>Tracks</h1>
        <div className=''>
          {tracksData.map((track) => (
            <a
              href={track.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400'
            >
              <div
                key={track.id}
                id={track.id}
                className='p-2 rounded-md  h-full flex'
              >
                <Image
                  src={track.album.cover_small}
                  alt={track.title}
                  width={56}
                  height={56}
                  className='rounded-md w-max'
                />
                <div className='text-white font-semibold text-md truncate pl-4'>
                  {track.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className='album__section flex p-4 gap-4 bg-pink-300'>
        <div className='album__cover__image'>
          <Image
            src={artistData.picture_medium}
            alt={artistData.name}
            width={250}
            height={250}
            className='rounded-lg border-4 border-white'
          />
        </div>
        <div>
          <h1 className='font-semibold tracking-wide text-xl pb-4 '>
            Album Name
          </h1>
          <div className='w-full'>
            {tracksData.map((track, index) => (
              <a
                href={track.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400'
              >
                <div key={track.id} id={track.id} className='p-2 flex'>
                  <div className='text-white p-2'>{index + 1}. </div>
                  <Image
                    src={track.album.cover_small}
                    alt={track.title}
                    width={56}
                    height={56}
                    className='rounded-md w-max'
                  />
                  <div className='text-white font-semibold text-md truncate pl-4'>
                    {track.title}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='albums__section bg-indigo-600 p-4 h-fit pb-24'>
        <h1 className='font-semibold tracking-wide text-xl mb-4'>Albums</h1>
        <div className='flex flex-wrap gap-x-4 gap-y-20 justify-between'>
          {albumData.map((album) => (
            <div className='no__img'>
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
    </>
  );
}
