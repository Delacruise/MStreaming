import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-fit'>
      <div className='h-40 bg-blue-600 p-4'>Hero Banner</div>
      <div className='h-40 bg-purple-600 p-4'>Charts</div>
      <div className='h-40 bg-yellow-600 p-4'>Artists</div>
      <div className='h-40 bg-orange-600 p-4'>Albums</div>
    </main>
  );
}
