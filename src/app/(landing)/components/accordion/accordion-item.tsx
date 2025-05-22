interface IAccordionItem {
	title: string;
	content: string;
}

const AccordionItem = ({ title, content }: IAccordionItem) => {
	return (
		<div className='w-full border border-platinum rounded-3xl p-5'>
			<span>{title}</span>
			<p>{content}</p>
		</div>
	);
};

export default AccordionItem;
