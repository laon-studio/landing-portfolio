'use client';
import CountUp from 'react-countup';

const Counter = [
  {
    title: 'Merchant Acceptance',
    value: 85,
    unit: '%',
    description:
      'U.S Merchants are planning to accept digital assets by the year 2026.',
  },
  {
    title: 'Merchant Impact',
    value: 93,
    unit: '%',
    description:
      'Merchants that experience a positive impact on customer metrics when accepting crypto.',
  },
  {
    title: 'Customer Sentiment',
    value: 3,
    unit: ' in 4',
    description:
      'U.S Merchants are planning to accept digital assets by the year 2026.',
  },
];

const CounterSection = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-secondary h-full rounded-3xl gap-10 md:gap-20 p-6 py-6 md:px-8 md:py-10'>
        <div className='flex flex-col items-center justify-center max-w-xl gap-5 text-center md:gap-8'>
          <p className='text-xs tracking-[0.1em] uppercase pt-8 text-white md:pt-0'>
            Where are we going
          </p>
          <h3 className='text-2xl md:text-4xl text-white'>
            The future of money movement is powered by HIFI
          </h3>
        </div>
        <div className='grid h-auto grid-cols-1 md:px-24 md:grid-cols-3'>
          {Counter.map((item, index) => (
            <div
              key={index}
              className='col-span-1 first:mt-0 mt-[-1px] md:mt-0 first:ml-0 ml-[-1px]'
            >
              <div className='relative flex flex-col w-full h-full px-5 pt-7 pb-10 md:px-8 md:pt-10 md:pb-16 transition-all duration-300 border-[1px] rounded-3xl border-[#7c4a65] group gap-4'>
                <p className='text-xs tracking-[0.1em] uppercase text-white'>
                  {item.title}
                </p>
                <h2 className='text-4xl leading-4xl md:text-5xl md:leading-5xl text-primary'>
                  <div>
                    <span>
                      <CountUp
                        duration={3}
                        start={0}
                        end={item.value}
                        enableScrollSpy={true}
                      />
                    </span>
                    {item.unit}
                  </div>
                </h2>
                <p className='text-sm text-white'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-auto pb-[60px] md:pb-[120px]'></div>
    </>
  );
};

export default CounterSection;
