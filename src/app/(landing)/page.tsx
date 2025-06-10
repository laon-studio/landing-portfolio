import Hero from './components/hero';
import Intro from './components/intro';
import AccordionSection from './components/accordion';
import CardSection from './components/card';
import CounterSection from './components/counter';
import ActionCard from './components/actionCard';

const LandingPage = () => {
  return (
    <div className='w-full bg-white font-body px-4 md:px-8 lg:px-14'>
      <Hero />
      <Intro />
      <AccordionSection />
      <CardSection />
      <CounterSection />
      <ActionCard />
    </div>
  );
};

export default LandingPage;
