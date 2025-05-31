import AccordionItem from './accordion-item';

const AccordionContents = [
	{
		title: 'Clear transparency',
		content:
			'Hifi is a payment platform that allows you to accept payments from your customers.',
	},
	{
		title: 'Privacy and security centered',
		content:
			"Our customer’s data and privacy will always be our top priority. We firmly believe in our customers' right to data privacy, and we fully commit to safeguarding it. Utilizing top preventive measures, we actively mitigate data security risks. We aim to serve as a symbol of trust and reliability for best security practices in the new financial world.",
	},
	{
		title: 'Humans first',
		content:
			'Everyone deserves a fair share. We listen to our customers and create our products with the intention that they will help the lives of people everyday. We know our products will be used by real humans, each with their own unique lives, thoughts and feelings. Our products are built with empathy to be accessible by everyone, everywhere.',
	},
	{
		title: 'Think big, do bigger',
		content:
			'We have big ambitious plans and believe no goal is ever out of reach. We reward big, bold bets and comprise ourselves of a stellar team of dreamers and doers. We take a ‘zero-to-one’ approach and believe the most disruptive tech in the world all starts with just an idea and the firm belief it can be built into something life changing.',
	},
];

const AccordionSection = () => {
	return (
		<div className='w-full grid grid-cols-1 md:grid-cols-3'>
			<TextSection />
			<div className='w-full max-w-3xl col-span-2 ml-auto'>
				<div className='flex flex-col'>
					{AccordionContents.map((item, index) => (
						<AccordionItem
							key={index}
							title={item.title}
							content={item.content}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AccordionSection;

const TextSection = () => {
	return (
		<div className='col-span-1 flex flex-col gap-8 px-8 py-10'>
			<span className='text-xs'>Our Values</span>
			<h2 className='text-4xl'>We Believe</h2>
			<p className='text-sm'>
				At HiFi, we respect the visionaries that came before us - however, we
				are taking a radically different approach than those that built the
				world of big tech and traditional finance. We understand that the path
				to building a redefined financial future for everyone starts with values
				we bake into our work every day.
			</p>
		</div>
	);
};
