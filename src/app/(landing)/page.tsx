import Header from './components/header';
import Footer from './components/footer';
import AccordionSection from './components/accordion';
import ActionCard from './components/actionCard';

const LandingPage = () => {
  return (
    <div className='w-full bg-white font-body max-w-[1600px] m-auto px-4 md:px-8 lg:px-14'>
      <Header />
      <AccordionSection />
      <ActionCard />
      <Footer />
    </div>
  );
};

export default LandingPage;
