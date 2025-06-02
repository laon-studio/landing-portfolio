import Image from 'next/image';
import Link from 'next/link';

const PaymentButton = () => {
  return (
    <Link
      href='/contact'
      className='px-3 pb-[9px] pt-[9px] rounded-lg font-normal text-xs lg:text-sm tracking-[0.1em] block w-fit h-fit uppercase justify-center flex gap-2 items-center transition-all duration-300 text-[#fff] bg-black hover:opacity-90 group'
    >
      <span className='text-xs tracking-[0.1em] uppercase'>
        start a payment
      </span>
      <span className='w-[10px] h-[10px] transition-transform duration-300 transform rotate-45 group-hover:-rotate-0 '>
        <Image
          src='/arrow_outward-white.svg'
          alt='arrow_outward-white'
          width={10}
          height={10}
          priority
        />
      </span>
    </Link>
  );
};

const Section02 = () => {
  return (
    <div className='flex flex-col md:flex-row '>
      <div className='relative hidden md:flex items-center justify-center p-8 aspect-[6/4] md:max-w-[460px] md:max-h-[460px] md:aspect-square w-full rounded-[30px] overflow-hidden'>
        <Image
          alt='CTA Background'
          className='object-cover'
          fill
          sizes='100vw'
          src='/CTA-BG2.jpg'
        />
      </div>
      <div className='flex flex-col justify-center w-full rounded-[30px] bg-primary py-8 px-6  lg:px-28 gap-4 md:gap-8'>
        <p className='text-xs tracking-[0.1em] uppercase'>
          Get started in minutes
        </p>
        <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl pb-[120px] md:pb-0'>
          Built to take your business further, faster.
        </h2>
        <PaymentButton />
      </div>
    </div>
  );
};
export default Section02;
