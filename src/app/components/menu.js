import Link from 'next/link';

export default function menu() {
  return (
    <div className='w-80 p-4 h-screen bg-gray-500 text-gray-800'>
      <div className='pb-8'>Logo</div>
      <nav className=''>
        <ul>
          <li className='menu__item pt-2 pb-2 rounded-md bg-gray-300 p-2 cursor-pointer hover:bg-gray-400'>
            <Link href='/'>Home</Link>
          </li>
          <li className='menu__item '>
            <Link href='/pages/artists'>Artists</Link>
          </li>
          <li className='menu__item '>
            <Link href='/pages/albums'>Albums</Link>
          </li>
          <li className='menu__item '>
            <Link href='/pages/charts'>Charts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
