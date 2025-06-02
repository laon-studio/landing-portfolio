import Card from './card';

const cardList = [
  {
    id: 0,
    title: 'citi',
    icon: 'https://www.hifibridge.com/OurPeople/Citi.svg',
    color: '#0e1632',
  },
  {
    id: 1,
    title: 'polygon',
    icon: 'https://www.hifibridge.com/OurPeople/Polygon.svg',
    color: '#6154f3',
  },
  {
    id: 2,
    title: 'apple',
    icon: 'https://www.hifibridge.com/OurPeople/Apple.svg',
    color: '#191314',
  },
  {
    id: 3,
    title: 'coinbase',
    icon: 'https://www.hifibridge.com/OurPeople/Coinbase.svg',
    color: '#0052fe',
  },
  {
    id: 4,
    title: 'uber',
    icon: 'https://www.hifibridge.com/OurPeople/Uber.svg',
    color: '#191314',
  },
  {
    id: 5,
    title: 'meta',
    icon: 'https://www.hifibridge.com/OurPeople/Meta.svg',
    color: '#0163e0',
  },
];

const CardSection = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 md:pb-[120px] pb-[60px]'>
      <TextSection />
      <div className='w-full max-w-3xl col-span-2 ml-auto grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3'>
        {cardList.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;

const TextSection = () => {
  return (
    <div className='col-span-1 flex flex-col gap-5 px-2 py-8 md:gap-8 md:px-8 md:py-10'>
      <span className='text-xs'>Our People</span>
      <h2 className='md:text-4xl text-2xl'>A world class founding team</h2>
      <p className='text-sm'>
        The HiFi team comes together and brings decades of leadership experience
        in building world class products that connect the lives of billions of
        people from companies like Facebook, Uber, Apple, Citi Group, Coinbase,
        and Polygon. Our teams are comprised of people from diverse backgrounds
        and industries ranging from world class tech and finance organizations,
        startup founders, venture capitalists, and researchers. Our purpose
        comes from the love of building amazing products that ignite a new world
        of possibilities to improve the lives of people everyday.
      </p>
    </div>
  );
};
