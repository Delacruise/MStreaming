import Link from 'next/link';

export default function menu() {
  return (
    <>
      <div className='pb-8'>Logo</div>
      <nav className=''>
        <ul>
          <li className='menu__item'>
            <Link href='/'>Home</Link>
          </li>
          <li className='menu__item '>
            <Link href='/pages/artists'>Artists</Link>
          </li>
          <li className='menu__item '>
            <Link href='/pages/albums'>Albums</Link>
          </li>
          <li className='menu__item '>
            <Link href='/pages/playlists'>Playlists</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
