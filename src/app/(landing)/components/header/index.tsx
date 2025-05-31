import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='sticky top-0 left-0 z-50 w-full'>
      <nav
        className='w-full pt-8 pb-4 lg:pt-8 z-[99999999] bg-white px-0 lg:px-4 relative'
        role='navigation'
        aria-label='Main Navigation'
      >
        <div className='flex items-center justify-between w-full'>
          <Link href='/' className='relative z-10 w-full'>
            <Image src='/logo.svg' alt='Logo' width={50} height={20} priority />
          </Link>
          <div className='relative flex items-center justify-center w-full gap-6'>
            <div>
              <MenuButton title='Platform' />
            </div>
            <div className='text-black text-sm'>
              <Link href='/company'>Company</Link>
            </div>
            <div>
              <MenuButton title='Documentation' />
            </div>
          </div>
          <div className='flex justify-end w-full gap-2'>
            <ContactButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

const MenuButton = ({ title }: { title: string }) => {
  return (
    <button className='flex items-center gap-x-1 cursor-pointer group'>
      <span className='text-black text-sm'>{title}</span>
      <span className='w-[10px] h-[10px] transition-transform duration-300 transform group-hover:-rotate-180'>
        <Image
          src='/arrow_downward.svg'
          alt='arrow_downward'
          width={10}
          height={10}
          priority
        />
      </span>
    </button>
  );
};

const ContactButton = () => {
  return (
    <Link
      href='/contact'
      className='px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] block w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-primary hover:opacity-80 group'
    >
      <span className='text-xs tracking-[0.1em] uppercase'>Start Now</span>
      <span className='w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 '>
        <Image
          src='/arrow_outward.svg'
          alt='arrow_outward'
          width={10}
          height={10}
          priority
        />
      </span>
    </Link>
  );
};

export default Header;
