import Header from './components/header';
import AccordionSection from './components/accordion';
import CardSection from './components/card';

const LandingPage = () => {
	return (
		<div className='w-full bg-white font-body max-w-[1600px] m-auto px-4 md:px-8 lg:px-14'>
			<Header />
			<AccordionSection />
			<CardSection />
		</div>
	);
};

export default LandingPage;
