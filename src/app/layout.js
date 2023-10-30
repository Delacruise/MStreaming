import { Inter } from 'next/font/google'
import './globals.css'
import Search from './components/search'
import Footer from '../app/components/footer';
import Menu from '../app/components/menu';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Streaming App',
  description: 'Music Streaming App based on Deezer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex'>
          <Menu></Menu>
          <div className='w-full'>
            <Search></Search>
            {children}
          </div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}

