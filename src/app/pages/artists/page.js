'use client';
import Image from 'next/image';
import artistsGet from '../../api/getArtists/route';
import { useState, useEffect } from 'react';

// const artists = [
//   {
//     id: '67238732',
//     readable: true,
//     title: 'Instant Crush (feat. Julian Casablancas)',
//     title_short: 'Instant Crush',
//     title_version: '(feat. Julian Casablancas)',
//     link: 'https://www.deezer.com/track/67238732',
//     duration: '337',
//     rank: '944205',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-7.dzcdn.net/stream/c-7d29f91f6875494c4104a0c436581293-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//       {
//         id: 295821,
//         name: 'Julian Casablancas',
//         link: 'https://www.deezer.com/artist/295821',
//         share:
//           'https://www.deezer.com/artist/295821?utm_source=deezer&utm_content=artist-295821&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/295821/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/a202473607fcd2baeec028b831d3c06c/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/295821/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6575789',
//       title: 'Random Access Memories',
//       cover: 'https://api.deezer.com/album/6575789/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
//       md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//       tracklist: 'https://api.deezer.com/album/6575789/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '66609426',
//     readable: true,
//     title: 'Get Lucky (Radio Edit - feat. Pharrell Williams and Nile Rodgers)',
//     title_short: 'Get Lucky',
//     title_version: '(Radio Edit - feat. Pharrell Williams and Nile Rodgers)',
//     link: 'https://www.deezer.com/track/66609426',
//     duration: '248',
//     rank: '949052',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//       {
//         id: 103,
//         name: 'Pharrell Williams',
//         link: 'https://www.deezer.com/artist/103',
//         share:
//           'https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/103/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/103/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//       {
//         id: 7207,
//         name: 'Nile Rodgers',
//         link: 'https://www.deezer.com/artist/7207',
//         share:
//           'https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/7207/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/7207/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: 'bc49adb87758e0c8c4e508a9c5cce85d',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6516139',
//       title:
//         'Get Lucky (Radio Edit - feat. Pharrell Williams and Nile Rodgers)',
//       cover: 'https://api.deezer.com/album/6516139/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/1000x1000-000000-80-0-0.jpg',
//       md5_image: 'bc49adb87758e0c8c4e508a9c5cce85d',
//       tracklist: 'https://api.deezer.com/album/6516139/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '67238733',
//     readable: true,
//     title: 'Lose Yourself to Dance (feat. Pharrell Williams)',
//     title_short: 'Lose Yourself to Dance',
//     title_version: '(feat. Pharrell Williams)',
//     link: 'https://www.deezer.com/track/67238733',
//     duration: '353',
//     rank: '781112',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-9.dzcdn.net/stream/c-9ecd0689abbd6a439e4693f15d6ae37d-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//       {
//         id: 103,
//         name: 'Pharrell Williams',
//         link: 'https://www.deezer.com/artist/103',
//         share:
//           'https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/103/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/103/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6575789',
//       title: 'Random Access Memories',
//       cover: 'https://api.deezer.com/album/6575789/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
//       md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//       tracklist: 'https://api.deezer.com/album/6575789/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '2271581007',
//     readable: true,
//     title: 'Get Lucky (feat. Pharrell Williams and Nile Rodgers)',
//     title_short: 'Get Lucky',
//     title_version: '(feat. Pharrell Williams and Nile Rodgers)',
//     link: 'https://www.deezer.com/track/2271581007',
//     duration: '369',
//     rank: '623545',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 2,
//     preview:
//       'https://cdns-preview-8.dzcdn.net/stream/c-8857edefdd2b01bf9b5a2ca99accaf5e-2.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//       {
//         id: 103,
//         name: 'Pharrell Williams',
//         link: 'https://www.deezer.com/artist/103',
//         share:
//           'https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/103/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/103/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//       {
//         id: 7207,
//         name: 'Nile Rodgers',
//         link: 'https://www.deezer.com/artist/7207',
//         share:
//           'https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/7207/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/7207/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: 'ad250e6b44b43490a294d90d6104e124',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '438167857',
//       title: 'Random Access Memories (10th Anniversary Edition)',
//       cover: 'https://api.deezer.com/album/438167857/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/1000x1000-000000-80-0-0.jpg',
//       md5_image: 'ad250e6b44b43490a294d90d6104e124',
//       tracklist: 'https://api.deezer.com/album/438167857/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '67238730',
//     readable: true,
//     title: 'Giorgio by Moroder',
//     title_short: 'Giorgio by Moroder',
//     title_version: '',
//     link: 'https://www.deezer.com/track/67238730',
//     duration: '544',
//     rank: '731853',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-6.dzcdn.net/stream/c-65b752b963e82a16307f5499358c6e3b-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6575789',
//       title: 'Random Access Memories',
//       cover: 'https://api.deezer.com/album/6575789/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
//       md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//       tracklist: 'https://api.deezer.com/album/6575789/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3135553',
//     readable: true,
//     title: 'One More Time',
//     title_short: 'One More Time',
//     title_version: '',
//     link: 'https://www.deezer.com/track/3135553',
//     duration: '320',
//     rank: '894964',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '2e018122cb56986277102d2041a592c8',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '302127',
//       title: 'Discovery',
//       cover: 'https://api.deezer.com/album/302127/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
//       md5_image: '2e018122cb56986277102d2041a592c8',
//       tracklist: 'https://api.deezer.com/album/302127/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '67238728',
//     readable: true,
//     title: 'Give Life Back to Music',
//     title_short: 'Give Life Back to Music',
//     title_version: '',
//     link: 'https://www.deezer.com/track/67238728',
//     duration: '275',
//     rank: '673030',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-f.dzcdn.net/stream/c-f91f04f9a14b6589f4493458cc951f2a-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6575789',
//       title: 'Random Access Memories',
//       cover: 'https://api.deezer.com/album/6575789/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
//       md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//       tracklist: 'https://api.deezer.com/album/6575789/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3129775',
//     readable: true,
//     title: 'Around the World',
//     title_short: 'Around the World',
//     title_version: '',
//     link: 'https://www.deezer.com/track/3129775',
//     duration: '429',
//     rank: '810498',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-a.dzcdn.net/stream/c-a2ce94cf0655f6cb526e94f5c046b7d5-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: 'b870579c8650cd59b1cce656dde2ef17',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '301775',
//       title: 'Homework',
//       cover: 'https://api.deezer.com/album/301775/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/1000x1000-000000-80-0-0.jpg',
//       md5_image: 'b870579c8650cd59b1cce656dde2ef17',
//       tracklist: 'https://api.deezer.com/album/301775/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3135556',
//     readable: true,
//     title: 'Harder, Better, Faster, Stronger',
//     title_short: 'Harder, Better, Faster, Stronger',
//     title_version: '',
//     link: 'https://www.deezer.com/track/3135556',
//     duration: '224',
//     rank: '799459',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '2e018122cb56986277102d2041a592c8',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '302127',
//       title: 'Discovery',
//       cover: 'https://api.deezer.com/album/302127/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
//       md5_image: '2e018122cb56986277102d2041a592c8',
//       tracklist: 'https://api.deezer.com/album/302127/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3135563',
//     readable: true,
//     title: 'Veridis Quo',
//     title_short: 'Veridis Quo',
//     title_version: '',
//     link: 'https://www.deezer.com/track/3135563',
//     duration: '345',
//     rank: '834060',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-f.dzcdn.net/stream/c-f6fde4f6f42bde740e3d07b019fde318-8.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '2e018122cb56986277102d2041a592c8',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '302127',
//       title: 'Discovery',
//       cover: 'https://api.deezer.com/album/302127/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
//       md5_image: '2e018122cb56986277102d2041a592c8',
//       tracklist: 'https://api.deezer.com/album/302127/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3157685',
//     readable: true,
//     title: 'One More Time (Short Radio Edit)',
//     title_short: 'One More Time',
//     title_version: '(Short Radio Edit)',
//     link: 'https://www.deezer.com/track/3157685',
//     duration: '235',
//     rank: '645300',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-d.dzcdn.net/stream/c-db311315ab129e7ba020ce9128ea0aae-7.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '07d17f7608a4cbcb60d701faa3c257c8',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '303598',
//       title: 'One More Time',
//       cover: 'https://api.deezer.com/album/303598/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/07d17f7608a4cbcb60d701faa3c257c8/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/07d17f7608a4cbcb60d701faa3c257c8/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/07d17f7608a4cbcb60d701faa3c257c8/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/07d17f7608a4cbcb60d701faa3c257c8/1000x1000-000000-80-0-0.jpg',
//       md5_image: '07d17f7608a4cbcb60d701faa3c257c8',
//       tracklist: 'https://api.deezer.com/album/303598/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '67238731',
//     readable: true,
//     title: 'Within',
//     title_short: 'Within',
//     title_version: '',
//     link: 'https://www.deezer.com/track/67238731',
//     duration: '228',
//     rank: '696591',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-e.dzcdn.net/stream/c-e99ecb378f49c5201daa93bfbc58d1c1-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6575789',
//       title: 'Random Access Memories',
//       cover: 'https://api.deezer.com/album/6575789/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
//       md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//       tracklist: 'https://api.deezer.com/album/6575789/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '1173629942',
//     readable: true,
//     title: 'End of Line',
//     title_short: 'End of Line',
//     title_version: '',
//     link: 'https://www.deezer.com/track/1173629942',
//     duration: '156',
//     rank: '583627',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-f.dzcdn.net/stream/c-f12710625f2909a00e2260833d1e979b-7.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '313e8a988614445ab1ad508da2805187',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '192529232',
//       title:
//         'TRON: Legacy - The Complete Edition (Original Motion Picture Soundtrack)',
//       cover: 'https://api.deezer.com/album/192529232/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/1000x1000-000000-80-0-0.jpg',
//       md5_image: '313e8a988614445ab1ad508da2805187',
//       tracklist: 'https://api.deezer.com/album/192529232/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '67238729',
//     readable: true,
//     title: 'The Game of Love',
//     title_short: 'The Game of Love',
//     title_version: '',
//     link: 'https://www.deezer.com/track/67238729',
//     duration: '322',
//     rank: '605583',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-b.dzcdn.net/stream/c-b03d498294b8a31fd3b0442ed69dafd1-6.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6575789',
//       title: 'Random Access Memories',
//       cover: 'https://api.deezer.com/album/6575789/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
//       md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//       tracklist: 'https://api.deezer.com/album/6575789/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3138819',
//     readable: true,
//     title: 'Around the World (Radio Edit)',
//     title_short: 'Around the World',
//     title_version: '(Radio Edit)',
//     link: 'https://www.deezer.com/track/3138819',
//     duration: '241',
//     rank: '423021',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-f.dzcdn.net/stream/c-ffef85e187201afcd83f8119af050b0f-7.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '8bf010db50a851518e3edf3407145387',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '302364',
//       title: 'Around the World',
//       cover: 'https://api.deezer.com/album/302364/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/1000x1000-000000-80-0-0.jpg',
//       md5_image: '8bf010db50a851518e3edf3407145387',
//       tracklist: 'https://api.deezer.com/album/302364/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '2467243095',
//     readable: true,
//     title: 'Within (Drumless Edition)',
//     title_short: 'Within (Drumless Edition)',
//     title_version: '',
//     link: 'https://www.deezer.com/track/2467243095',
//     duration: '228',
//     rank: '696673',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 2,
//     preview:
//       'https://cdns-preview-f.dzcdn.net/stream/c-ff213c6c78a4f27faa0ad1181128b4d5-1.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: 'bb8b5f188ae380ac3a7c876b70556357',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '491469765',
//       title: 'Within (Drumless Edition)',
//       cover: 'https://api.deezer.com/album/491469765/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/1000x1000-000000-80-0-0.jpg',
//       md5_image: 'bb8b5f188ae380ac3a7c876b70556357',
//       tracklist: 'https://api.deezer.com/album/491469765/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3135554',
//     readable: true,
//     title: 'Aerodynamic',
//     title_short: 'Aerodynamic',
//     title_version: '',
//     link: 'https://www.deezer.com/track/3135554',
//     duration: '212',
//     rank: '678714',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 6,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '2e018122cb56986277102d2041a592c8',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '302127',
//       title: 'Discovery',
//       cover: 'https://api.deezer.com/album/302127/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
//       md5_image: '2e018122cb56986277102d2041a592c8',
//       tracklist: 'https://api.deezer.com/album/302127/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3135561',
//     readable: true,
//     title: 'Something About Us',
//     title_short: 'Something About Us',
//     title_version: '',
//     link: 'https://www.deezer.com/track/3135561',
//     duration: '232',
//     rank: '688701',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 6,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-8.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '2e018122cb56986277102d2041a592c8',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '302127',
//       title: 'Discovery',
//       cover: 'https://api.deezer.com/album/302127/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
//       md5_image: '2e018122cb56986277102d2041a592c8',
//       tracklist: 'https://api.deezer.com/album/302127/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '3135555',
//     readable: true,
//     title: 'Digital Love',
//     title_short: 'Digital Love',
//     title_version: '',
//     link: 'https://www.deezer.com/track/3135555',
//     duration: '301',
//     rank: '680417',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-9.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '2e018122cb56986277102d2041a592c8',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '302127',
//       title: 'Discovery',
//       cover: 'https://api.deezer.com/album/302127/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
//       md5_image: '2e018122cb56986277102d2041a592c8',
//       tracklist: 'https://api.deezer.com/album/302127/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
//   {
//     id: '67238734',
//     readable: true,
//     title: 'Touch (feat. Paul Williams)',
//     title_short: 'Touch',
//     title_version: '(feat. Paul Williams)',
//     link: 'https://www.deezer.com/track/67238734',
//     duration: '498',
//     rank: '645776',
//     explicit_lyrics: false,
//     explicit_content_lyrics: 0,
//     explicit_content_cover: 0,
//     preview:
//       'https://cdns-preview-2.dzcdn.net/stream/c-2500784207f376183212c7f64c74cc4c-5.mp3',
//     contributors: [
//       {
//         id: 27,
//         name: 'Daft Punk',
//         link: 'https://www.deezer.com/artist/27',
//         share:
//           'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/27/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//       {
//         id: 2843,
//         name: 'Paul Williams',
//         link: 'https://www.deezer.com/artist/2843',
//         share:
//           'https://www.deezer.com/artist/2843?utm_source=deezer&utm_content=artist-2843&utm_term=0_1698754343&utm_medium=web',
//         picture: 'https://api.deezer.com/artist/2843/image',
//         picture_small:
//           'https://e-cdns-images.dzcdn.net/images/artist/c25a4b64f4cb907bc3c45a20d7ba0563/56x56-000000-80-0-0.jpg',
//         picture_medium:
//           'https://e-cdns-images.dzcdn.net/images/artist/c25a4b64f4cb907bc3c45a20d7ba0563/250x250-000000-80-0-0.jpg',
//         picture_big:
//           'https://e-cdns-images.dzcdn.net/images/artist/c25a4b64f4cb907bc3c45a20d7ba0563/500x500-000000-80-0-0.jpg',
//         picture_xl:
//           'https://e-cdns-images.dzcdn.net/images/artist/c25a4b64f4cb907bc3c45a20d7ba0563/1000x1000-000000-80-0-0.jpg',
//         radio: true,
//         tracklist: 'https://api.deezer.com/artist/2843/top?limit=50',
//         type: 'artist',
//         role: 'Main',
//       },
//     ],
//     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//     artist: {
//       id: '27',
//       name: 'Daft Punk',
//       tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
//       type: 'artist',
//     },
//     album: {
//       id: '6575789',
//       title: 'Random Access Memories',
//       cover: 'https://api.deezer.com/album/6575789/image',
//       cover_small:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
//       cover_medium:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
//       cover_big:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
//       cover_xl:
//         'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
//       md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
//       tracklist: 'https://api.deezer.com/album/6575789/tracks',
//       type: 'album',
//     },
//     type: 'track',
//   },
// ];

export default function Artists() {
  const [artistsData, setArtistsData] = useState([]);
  const fetchArtistsData = async () => {
    try {
      const artistsData = await artistsGet();
      if (artistsData.length > 0) {
        setArtistsData(artistsData);
      }
    } catch (error) {
      console.error('Error ARTISTS fetching data:', error);
      return false;
    }
  };

  useEffect(() => {
    if (artistsData.length == 0 || artistsData[0] == undefined) {
      fetchArtistsData();
    }
  }, [artistsData]);
  return (
    <>
      <div className='p-4'>
        <h1 className='tracking-wider font-semibold text-2xl pb-8'>
          Top Artists
        </h1>
        <div className='flex flex-wrap gap-4'>
          {artistsData.map((artist) => (
            <a
              href={`/pages/artist?id=${artist.id}`}
              rel='noopener noreferrer'
              className='text-blue-400 mb-4'
              key={artist.id}
            >
              <div
                key={artist.id}
                className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block'
              >
                <Image
                  src={artist.picture_medium}
                  alt={artist.name}
                  width={250}
                  height={250}
                  className='playlist__img rounded-md rounded-b-none w-max'
                />
                <div className='bg-yellow-600 rounded-t-none rounded-md p-4'>
                  <h2 className='playlist__title text-white text-xl font-bold truncate'>
                    {artist.name}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
