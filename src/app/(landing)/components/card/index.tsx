const CardSection = () => {
	return (
		<div className='flex justify-between'>
			<TextSection />
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
