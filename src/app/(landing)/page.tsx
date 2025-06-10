import Hero from './components/hero';
import Intro from './components/intro';
import AccordionSection from './components/accordion';
import CardSection from './components/card';
import CounterSection from './components/counter';
import ActionCard from './components/actionCard';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Intro />
      <AccordionSection />
      <CardSection />
      <CounterSection />
      <ActionCard />
    </>
  );
};

export default LandingPage;
