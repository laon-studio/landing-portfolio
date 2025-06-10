'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  return (
    <div className='sticky top-0 left-0 z-50 w-full'>
      <PCHeader />
      <MobileHeader />
    </div>
  );
};

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='w-full pt-3 pb-3 z-[99999] bg-white px-0 relative block lg:hidden'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex justify-start w-full'>
          <Link href='/contact'>
            <button className='px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] inline-block w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-platinum group cursor-pointer'>
              <p className=' text-xs tracking-[0.1em] uppercase '>Start</p>
            </button>
          </Link>
        </div>
        <Link className='relative z-10 flex justify-center w-full' href='/'>
          <Image src='/logo.svg' alt='Logo' width={50} height={20} priority />
        </Link>
        <div className='flex justify-end w-full'>
          <button
            className='z-10 flex items-center justify-center w-12 h-12 transition-transform cursor-pointer'
            aria-expanded={menuOpen}
            aria-label='Toggle navigation menu'
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className='relative flex flex-col w-8 gap-[4px]'>
              {/* Top bar */}
              <span
                className='w-full absolute h-[1px] z-10 bg-black transition-all duration-300'
                style={
                  menuOpen
                    ? {
                        left: '50%',
                        top: '0px',
                        transform: 'translate(-50%,-50%) rotate(30deg)',
                      }
                    : {
                        left: '50%',
                        top: '-4px',
                        transform: 'translate(-50%, -50%)',
                      }
                }
              ></span>
              {/* Upper-middle bar */}
              <span
                className='w-full absolute h-[1px] z-10 bg-black transition-all duration-300'
                style={
                  menuOpen
                    ? {
                        left: '50%',
                        top: '0px',
                        opacity: 0,
                        transform: 'translate(-50%,-50%)',
                      }
                    : {
                        left: '50%',
                        top: '0px',
                        transform: 'translate(-50%, -50%)',
                      }
                }
              ></span>
              {/* Lower-middle bar */}
              <span
                className='w-full absolute h-[1px] z-10 bg-black transition-all duration-300'
                style={
                  menuOpen
                    ? {
                        left: '50%',
                        bottom: '0px',
                        opacity: 0,
                        transform: 'translate(-50%, 50%)',
                      }
                    : {
                        left: '50%',
                        bottom: '-4px',
                        opacity: 1,
                        transform: 'translate(-50%, 50%)',
                      }
                }
              ></span>
              {/* Bottom bar */}
              <span
                className='w-full absolute h-[1px] z-10 bg-black transition-all duration-300'
                style={
                  menuOpen
                    ? {
                        left: '50%',
                        bottom: '0px',
                        transform: 'translate(-50%, 50%) rotate(-30deg)',
                      }
                    : {
                        left: '50%',
                        bottom: '-8px',
                        transform: 'translate(-50%, 50%)',
                      }
                }
              ></span>
            </div>
          </button>
        </div>
      </div>
      {menuOpen && <ToggleMenu />}
    </nav>
  );
};

const ToggleMenu = () => {
  return (
    <div className='z-10 flex flex-col justify-between w-full h-screen py-10 transform bg-white'>
      <div className='flex flex-col w-full'>
        <div className='bg-[#fff] border-t-[1px] border-platinum last:border-b-[1px] py-4'>
          <button className='flex items-center w-full gap-3 text-left text-gray-800 transition-colors duration-200 cursor-pointer'>
            <h4 className='text-black text-xl md:text-2xl'>Platform</h4>
            <div className='w-[10px] h-[10px] transition-transform duration-300 transform -rotate-0'>
              <Image
                src='/arrow_downward.svg'
                alt='arrow_downward'
                width={10}
                height={10}
                priority
              />
            </div>
          </button>
        </div>
        <div className='bg-[#fff] border-t-[1px] border-platinum last:border-b-[1px] py-4'>
          <Link
            className='flex items-center w-full gap-3 text-left text-gray-800'
            href='/'
          >
            <h4 className='text-black text-xl md:text-2xl'>Company</h4>
          </Link>
        </div>
        <div className='bg-[#fff] border-t-[1px] border-platinum last:border-b-[1px] py-4'>
          <button className='flex items-center w-full gap-3 text-left text-gray-800 transition-colors duration-200 cursor-pointer'>
            <h4 className='text-black text-xl md:text-2xl'>Documentation</h4>
            <div className='w-[10px] h-[10px] transition-transform duration-300 transform -rotate-0'>
              <Image
                src='/arrow_downward.svg'
                alt='arrow_downward'
                width={10}
                height={10}
                priority
              />
            </div>
          </button>
        </div>
      </div>
      <a href='/contact'>
        <button className='px-3 pb-5 pt-5 rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-black bg-primary hover:opacity-80 w-full mb-24 group cursor-pointer'>
          <p className=' text-xs tracking-[0.1em] uppercase '>Start Now</p>
          <div className='w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 '>
            <Image
              src='/arrow_outward.svg'
              alt='arrow_outward'
              width={10}
              height={10}
              priority
            />
          </div>
        </button>
      </a>
    </div>
  );
};

const PCHeader = () => {
  return (
    <nav
      className='w-full pt-8 pb-4 lg:pt-8 z-[99999999] bg-white px-0 lg:px-4 relative hidden lg:block'
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
            <Link href='/'>Company</Link>
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
