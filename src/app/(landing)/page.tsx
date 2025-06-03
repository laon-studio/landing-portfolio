import Hero from './components/hero';
import AccordionSection from './components/accordion';
import CardSection from './components/card';
import CounterSection from './components/counter';
import ActionCard from './components/actionCard';

const LandingPage = () => {
  return (
    <div className='w-full bg-white font-body max-w-[1600px] m-auto px-4 md:px-8 lg:px-14'>
      <Hero />
      <AccordionSection />
      <CardSection />
      <ActionCard />
      <CounterSection />
    </div>
  );
};

export default LandingPage;
