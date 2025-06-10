import Image from 'next/image';
import OptInForm from './components/opt-in-form';

const ContactPage = () => {
  return (
    <div className='flex px-8 pb-[60px] md:pb-[120px]'>
      <div className='w-full bg-primary rounded-[30px] px-4 py-8 md:p-8 flex flex-col gap-4 justify-center'>
        <div className='flex gap-2 items-center'>
          <div className='block w-7 p-2 bg-black rounded-lg'>
            <Image
              src='https://www.hifibridge.com/Contact-Hifi.svg'
              alt='HIFI Bridge'
              width={16}
              height={16}
            />
          </div>
          <span className='text-sm'>GET STARTED</span>
        </div>
        <h2 className='text-5xl'>Ready to modernize your payments?</h2>
        <p className='text-sm pb-12 md:pb-0'>
          Let&apos;s get there together. Book a time to meet with our team for a
          HIFI Demo.
        </p>
        <div className='w-full p-8 bg-[#c0b395] rounded-[30px] block md:hidden'>
          <OptInForm />
        </div>
      </div>
      <div className='w-full p-8 bg-[#c0b395] rounded-[30px] hidden md:block'>
        <OptInForm />
      </div>
    </div>
  );
};

export default ContactPage;
