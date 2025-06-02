import Header from './components/header';
import Footer from './components/footer';
import AccordionSection from './components/accordion';
import Section02 from './components/section02';

const LandingPage = () => {
  return (
    <div className='w-full bg-white font-body max-w-[1600px] m-auto px-4 md:px-8 lg:px-14'>
      <Header />
      <AccordionSection />
      <Section02 />
      <Footer />
    </div>
  );
};

export default LandingPage;
