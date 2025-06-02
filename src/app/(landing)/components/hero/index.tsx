import Image from 'next/image';

const Hero = () => {
  return (
    <div className='grid items-center w-full h-full gap-0 md:min-h-[calc(100vh-164px)] max-h-full md:max-h-[960px] grid-cols-1 md:grid-cols-7'>
      <div className='flex flex-col h-full justify-center w-full rounded-[30px] bg-[#d8e6e0] py-8 px-5 lg:py-32 lg:px-28 gap-4 md:gap-8 col-span-4 order-2 md:order-1'>
        <div className='flex items-center gap-2'>
          <div className='relative flex items-center justify-center flex-none transition-all duration-300 bg-white rounded-md w-7 h-7 group-hover:bg-primary'>
            <div className='relative w-4 h-4'>
              <Image
                src='/about-us.svg'
                alt='ABOUT US'
                width={16}
                height={16}
                priority
              />
            </div>
          </div>
          <p className='text-xs tracking-[0.1em] uppercase'>ABOUT US</p>
        </div>
        <h2 className='text-black text-4xl leading-4xl md:text-5xl md:leading-5xl'>Building the next generation of financial connectivity</h2>
        <p className='text-black text-sm'>We are developing the system to reshape how money and value move for the next chapter of the internet.</p>
      </div>
      <div className='relative bg-taupe aspect-square order-1 md:order-2 md:h-full md:aspect-auto w-full flex items-center justify-center col-span-3 rounded-[30px] overflow-hidden'>
        <video
          src="/fountain.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 z-10 object-cover w-full h-full"
        ></video>
      </div>
    </div>
  );
};

export default Hero;