import type { Metadata } from 'next';
import './globals.css';
import Header from './(landing)/components/header';
import Footer from './(landing)/components/footer';

export const metadata: Metadata = {
  title: 'HIFI CLONE',
  description: 'DEVELOPED BY @LAON STUDIO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='antialiased max-w-[1600px] mx-auto'>
        <div className='w-full px-4 py-2 text-center text-xs text-black bg-primary'>
          This is a non-commercial clone of{' '}
          <a href='https://www.hifibridge.com/' target='_blank'>
            HIFI
          </a>{' '}
          created for learning purposes.
        </div>
        <div className='w-full bg-white font-body max-w-[1600px] m-auto px-4 md:px-8 lg:px-14'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
