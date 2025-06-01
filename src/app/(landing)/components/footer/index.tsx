import Image from 'next/image';
import Link from 'next/link';

const FooterLinks = [
  {
    title: 'Platform',
    links: [
      { name: 'Platform Overview', href: '/' },
      { name: 'Virtual Accounts', href: '/' },
      { name: 'Multi-Currency Accounts', href: '/' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', href: '/' },
      { name: 'Support', href: '/' },
      { name: 'Sign In', href: '/' },
    ],
  },
  {
    title: 'Company',
    links: [{ name: 'About', href: '/' }],
  },
  {
    title: 'Contact',
    links: [
      { name: 'General Inquiries', href: '/' },
      { name: 'Sales', href: '/' },
      { name: 'Press', href: '/' },
      { name: 'Support', href: '/' },
      { name: 'Compliance', href: '/' },
    ],
  },
];

const Footer = () => {
  return (
    <div className='flex flex-col w-full px-2 py-10 lg:py-12 lg:px-4 '>
      <div className='grid grid-cols-1 gap-8 mb-12 md:grid-cols-5'>
        <div className='flex flex-col'>
          <Image
            src='/hifi_icon_yellow.svg'
            alt='Hifi Icon Yellow'
            width={50}
            height={50}
          />
        </div>
        {FooterLinks.map((item, index) => (
          <div
            key={index}
            className='flex flex-col border-b-[1px] border-platinum pb-8 md:border-b-[0px] md:pb-0'
          >
            <h3 className='text-black text-lg mb-4'>{item.title}</h3>
            <div className='flex flex-col gap-4'>
              {item.links.map((item, index) => (
                <Link
                  key={index}
                  className='flex flex-row gap-2'
                  href={item.href}
                >
                  <p className='text-black text-sm'>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className='text-black text-[10px] leading-normal lg:max-w-[50%] pb-4'>
          HIFI Bridge Inc, is a financial technology company and not a bank. The
          material published on this website is for informational purposes only
          and is not intended to, and should not be taken to, constitute
          investment, tax, legal or other advice by HIFI Bridge, Inc or its
          affiliates.
        </p>
        <div className='flex flex-col justify-between gap-2 pt-2 border-t border-platinum lg:items-center lg:flex-row'>
          <p className='text-black text-[10px] tracking-[0.1em] uppercase mt-2'>
            © 2025 HIFI BRIDGE. ALL RIGHTS RESERVED.
          </p>
          <div className='flex gap-4'>
            <Link href='/'>
              <p className='text-black text-[10px] tracking-[0.1em] uppercase '>
                Terms of Service
              </p>
            </Link>
            <Link href='/'>
              <p className='text-black text-[10px] tracking-[0.1em] uppercase '>
                Privacy Policy
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
