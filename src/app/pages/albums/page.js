"use client"
import Image from 'next/image';
import albumGet from '../../api/getAlbums/route';
import { useState, useEffect } from 'react';

export default function Albums() {
  // const albumsData = [
  //   {
  //     id: '494309801',
  //     title: 'Random Access Memories (Drumless Edition)',
  //     link: 'https://www.deezer.com/album/494309801',
  //     cover: '',
  //     cover_small: null,
  //     cover_medium: null,
  //     cover_big: null,
  //     cover_xl: null,
  //     md5_image: 'bb8b5f188ae380ac3a7c876b70556357',
  //     genre_id: 106,
  //     fans: 624,
  //     release_date: '2023-11-17',
  //     record_type: 'album',
  //     tracklist: '',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '294609352',
  //     title: 'Homework (25th Anniversary Edition)',
  //     link: 'https://www.deezer.com/album/294609352',
  //     cover: 'https://api.deezer.com/album/294609352/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '117dcf85bdf0851347403796521d1e9d',
  //     genre_id: 113,
  //     fans: 11072,
  //     release_date: '1997-01-20',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/294609352/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '6575789',
  //     title: 'Random Access Memories',
  //     link: 'https://www.deezer.com/album/6575789',
  //     cover: 'https://api.deezer.com/album/6575789/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/311bba0fc112d15f72c8b5a65f0456c1/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '311bba0fc112d15f72c8b5a65f0456c1',
  //     genre_id: 113,
  //     fans: 825762,
  //     release_date: '2013-05-17',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/6575789/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '438167857',
  //     title: 'Random Access Memories (10th Anniversary Edition)',
  //     link: 'https://www.deezer.com/album/438167857',
  //     cover: 'https://api.deezer.com/album/438167857/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'ad250e6b44b43490a294d90d6104e124',
  //     genre_id: 106,
  //     fans: 17834,
  //     release_date: '2023-05-12',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/438167857/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '1471670',
  //     title: 'TRON: Legacy Reconfigured',
  //     link: 'https://www.deezer.com/album/1471670',
  //     cover: 'https://api.deezer.com/album/1471670/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '2f34e0fe8086785fab7d6dfd8d48ba5a',
  //     genre_id: 106,
  //     fans: 7982,
  //     release_date: '2011-04-01',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/1471670/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '192529232',
  //     title:
  //       'TRON: Legacy - The Complete Edition (Original Motion Picture Soundtrack)',
  //     link: 'https://www.deezer.com/album/192529232',
  //     cover: 'https://api.deezer.com/album/192529232/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '313e8a988614445ab1ad508da2805187',
  //     genre_id: 173,
  //     fans: 22598,
  //     release_date: '2020-12-18',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/192529232/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '321108967',
  //     title: 'TRON: Legacy',
  //     link: 'https://www.deezer.com/album/321108967',
  //     cover: 'https://api.deezer.com/album/321108967/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/9c0250e6453c73a96d9e3a99d119ec2f/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '9c0250e6453c73a96d9e3a99d119ec2f',
  //     genre_id: 173,
  //     fans: 1402,
  //     release_date: '2010-01-01',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/321108967/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '304193',
  //     title: 'Alive 2007',
  //     link: 'https://www.deezer.com/album/304193',
  //     cover: 'https://api.deezer.com/album/304193/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'ad3dda2e1b770ad143d5dbfeb667fa39',
  //     genre_id: 113,
  //     fans: 142771,
  //     release_date: '2007-11-16',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/304193/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '8244118',
  //     title: 'Human After All (Remixes)',
  //     link: 'https://www.deezer.com/album/8244118',
  //     cover: 'https://api.deezer.com/album/8244118/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'f6a4dbf47cb8828c281ed4e63364f99e',
  //     genre_id: 113,
  //     fans: 31172,
  //     release_date: '2005-03-20',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/8244118/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '1343199',
  //     title: 'Musique, Vol. 1',
  //     link: 'https://www.deezer.com/album/1343199',
  //     cover: 'https://api.deezer.com/album/1343199/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '39e2281a0e9f564e73b4f49dfa06f4ab',
  //     genre_id: 106,
  //     fans: 61366,
  //     release_date: '2006-03-31',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/1343199/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '303459',
  //     title: 'Human After All',
  //     link: 'https://www.deezer.com/album/303459',
  //     cover: 'https://api.deezer.com/album/303459/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '48701ef0699add067f257045a72d06af',
  //     genre_id: 113,
  //     fans: 94227,
  //     release_date: '2005-03-15',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/303459/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '299205',
  //     title: 'Daft Club',
  //     link: 'https://www.deezer.com/album/299205',
  //     cover: 'https://api.deezer.com/album/299205/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '0416976ab8f3f32e0b447dd1b9b1e0cf',
  //     genre_id: 113,
  //     fans: 44349,
  //     release_date: '2003-12-01',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/299205/tracks',
  //     explicit_lyrics: true,
  //     type: 'album',
  //   },
  //   {
  //     id: '299137',
  //     title: 'Alive 1997',
  //     link: 'https://www.deezer.com/album/299137',
  //     cover: 'https://api.deezer.com/album/299137/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'dad3f5830a650c17f7125dca7c50f1d6',
  //     genre_id: 113,
  //     fans: 7756,
  //     release_date: '2005-01-21',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/299137/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '302127',
  //     title: 'Discovery',
  //     link: 'https://www.deezer.com/album/302127',
  //     cover: 'https://api.deezer.com/album/302127/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '2e018122cb56986277102d2041a592c8',
  //     genre_id: 113,
  //     fans: 278087,
  //     release_date: '2001-03-07',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/302127/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '301775',
  //     title: 'Homework',
  //     link: 'https://www.deezer.com/album/301775',
  //     cover: 'https://api.deezer.com/album/301775/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'b870579c8650cd59b1cce656dde2ef17',
  //     genre_id: 113,
  //     fans: 148046,
  //     release_date: '1997-01-16',
  //     record_type: 'album',
  //     tracklist: 'https://api.deezer.com/album/301775/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '6703346',
  //     title: 'Get Lucky (feat. Pharrell Williams & Nile Rodgers)',
  //     link: 'https://www.deezer.com/album/6703346',
  //     cover: 'https://api.deezer.com/album/6703346/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'b1b2ac88710b0c721a680b9f9df947d7',
  //     genre_id: 113,
  //     fans: 9755,
  //     release_date: '2013-07-03',
  //     record_type: 'ep',
  //     tracklist: 'https://api.deezer.com/album/6703346/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '6703310',
  //     title: 'Get Lucky (feat. Pharrell Williams & Nile Rodgers)',
  //     link: 'https://www.deezer.com/album/6703310',
  //     cover: 'https://api.deezer.com/album/6703310/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'b1b2ac88710b0c721a680b9f9df947d7',
  //     genre_id: 132,
  //     fans: 28506,
  //     release_date: '2013-06-26',
  //     record_type: 'ep',
  //     tracklist: 'https://api.deezer.com/album/6703310/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '302378',
  //     title: 'Harder, Better, Faster, Stronger',
  //     link: 'https://www.deezer.com/album/302378',
  //     cover: 'https://api.deezer.com/album/302378/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '0ac2d2c8e627fcb6b708efa4237f57c8',
  //     genre_id: 113,
  //     fans: 20597,
  //     release_date: '2001-10-19',
  //     record_type: 'ep',
  //     tracklist: 'https://api.deezer.com/album/302378/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '325477',
  //     title: 'Revolution 909',
  //     link: 'https://www.deezer.com/album/325477',
  //     cover: 'https://api.deezer.com/album/325477/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '3d0891473275db1310a4feea8e6bb405',
  //     genre_id: 113,
  //     fans: 6171,
  //     release_date: '2005-01-21',
  //     record_type: 'ep',
  //     tracklist: 'https://api.deezer.com/album/325477/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '302364',
  //     title: 'Around the World',
  //     link: 'https://www.deezer.com/album/302364',
  //     cover: 'https://api.deezer.com/album/302364/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/1000x1000-000000-80-0-0.jpg',
  //     md5_image: '8bf010db50a851518e3edf3407145387',
  //     genre_id: 113,
  //     fans: 20929,
  //     release_date: '1997-04-11',
  //     record_type: 'ep',
  //     tracklist: 'https://api.deezer.com/album/302364/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '325476',
  //     title: "Burnin'",
  //     link: 'https://www.deezer.com/album/325476',
  //     cover: 'https://api.deezer.com/album/325476/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'cea7bffeacb0f7093cff63469e7e5944',
  //     genre_id: 113,
  //     fans: 5757,
  //     release_date: '2006-04-21',
  //     record_type: 'ep',
  //     tracklist: 'https://api.deezer.com/album/325476/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '491469765',
  //     title: 'Within (Drumless Edition)',
  //     link: 'https://www.deezer.com/album/491469765',
  //     cover: 'https://api.deezer.com/album/491469765/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/bb8b5f188ae380ac3a7c876b70556357/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'bb8b5f188ae380ac3a7c876b70556357',
  //     genre_id: 106,
  //     fans: 835,
  //     release_date: '2023-09-28',
  //     record_type: 'single',
  //     tracklist: 'https://api.deezer.com/album/491469765/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '431082537',
  //     title: 'GLBTM (Studio Outtakes)',
  //     link: 'https://www.deezer.com/album/431082537',
  //     cover: 'https://api.deezer.com/album/431082537/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'ad250e6b44b43490a294d90d6104e124',
  //     genre_id: 106,
  //     fans: 4481,
  //     release_date: '2023-04-20',
  //     record_type: 'single',
  //     tracklist: 'https://api.deezer.com/album/431082537/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '418374497',
  //     title: 'The Writing of Fragments of Time (feat. Todd Edwards)',
  //     link: 'https://www.deezer.com/album/418374497',
  //     cover: 'https://api.deezer.com/album/418374497/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/ad250e6b44b43490a294d90d6104e124/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'ad250e6b44b43490a294d90d6104e124',
  //     genre_id: 106,
  //     fans: 2485,
  //     release_date: '2023-03-22',
  //     record_type: 'single',
  //     tracklist: 'https://api.deezer.com/album/418374497/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  //   {
  //     id: '7561419',
  //     title:
  //       'Derezzed (From “TRON: Legacy” Avicii "So Amazing Mix" Feat. Negin)',
  //     link: 'https://www.deezer.com/album/7561419',
  //     cover: 'https://api.deezer.com/album/7561419/image',
  //     cover_small:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/56x56-000000-80-0-0.jpg',
  //     cover_medium:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/250x250-000000-80-0-0.jpg',
  //     cover_big:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/500x500-000000-80-0-0.jpg',
  //     cover_xl:
  //       'https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/1000x1000-000000-80-0-0.jpg',
  //     md5_image: 'f3e62688b1f759f9c986a073df77ee63',
  //     genre_id: 113,
  //     fans: 6104,
  //     release_date: '2014-04-01',
  //     record_type: 'single',
  //     tracklist: 'https://api.deezer.com/album/7561419/tracks',
  //     explicit_lyrics: false,
  //     type: 'album',
  //   },
  // ];

  const [albumsData, setAlbumsData] = useState([]);
  const fetchAlbumsData = async () => {
    try {
      const fetchAlbumsData = await albumGet();
      if (fetchAlbumsData.length > 0) {
        setAlbumsData(fetchAlbumsData);
      }
    } catch (error) {
      console.error('Error ARTISTS fetching data:', error);
      return false;
    }
  };

  useEffect(() => {
    if (albumsData.length == 0 || albumsData[0] == undefined) {
      fetchAlbumsData();
    }
  }, [albumsData]);

  if (albumsData.length != 0) {
        return (
          <div className='p-4'>
            <h1 className='tracking-wider font-semibold text-2xl pb-8'>
              Top Albums
            </h1>
            <div className='flex gap-4 flex-wrap justify-start'>
              {albumsData.map((album) => (
                <a
                  href={`/pages/album?id=${album.id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 mb-4'
                  key={album.id}
                >
                  <div
                    key={album.id}
                    className='p-4 rounded-md p-2 bg-white h-full drop-shadow-md inline-block'
                  >
                    {album.cover_medium !== null ? (
                      <Image
                        src={album.cover_medium}
                        alt={album.title}
                        width={250}
                        height={250}
                        className='playlist__img rounded-md rounded-b-none w-max'
                      />
                    ) : (
                      <div className='no__img rounded-md rounded-b-none w-max bg-indigo-400 w-full text-center p-28'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-6 h-6 text-center text-white'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </div>
                    )}

                    <div className='bg-indigo-600 rounded-t-none rounded-md p-4'>
                      <h2 className='playlist__title text-white text-xl font-bold truncate'>
                        {album.title}
                      </h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
  }

}
