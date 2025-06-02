import Header from './components/header';
import Hero from './components/hero';
import AccordionSection from './components/accordion';
import Footer from './components/footer';

const LandingPage = () => {
  return (
    <div className='w-full bg-white font-body max-w-[1600px] m-auto px-4 md:px-8 lg:px-14'>
      <Header />
      <Hero />
      <AccordionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
