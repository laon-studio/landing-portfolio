import Header from './components/header';
import Hero from './components/hero';
import Intro from './components/intro';
import AccordionSection from './components/accordion';
import CardSection from './components/card';
import CounterSection from './components/counter';
import ActionCard from './components/actionCard';
import Footer from './components/footer';

const LandingPage = () => {
  return (
    <div className='w-full bg-white font-body max-w-[1600px] m-auto px-4 md:px-8 lg:px-14'>
      <Header />
      <Hero />
      <Intro />
      <AccordionSection />
      <CardSection />
      <CounterSection />
      <ActionCard />
      <Footer />
    </div>
  );
};

export default LandingPage;
