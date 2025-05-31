'use client';

import { useEffect, useReducer, useRef, useState } from 'react';
import IconArrow from './arrow';

interface IAccordionItem {
	title: string;
	content: string;
}

const AccordionItem = ({ title, content }: IAccordionItem) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useReducer((state) => !state, false);
	const [height, setHeight] = useState('0px');

	useEffect(() => {
		const updateHeight = () => {
			if (contentRef.current) {
				// 창 크기에 따라 scrollHeight를 동적으로 다시 계산
				const scrollHeight = contentRef.current.scrollHeight;
				setHeight(isOpen ? `${scrollHeight}px` : '0px');
			}
		};

		// 컴포넌트 마운트 시, 그리고 isOpen 값 변경 시 높이 초기 업데이트
		updateHeight();

		// 창 리사이즈 이벤트 등록
		window.addEventListener('resize', updateHeight);

		// cleanup: 컴포넌트 언마운트 또는 의존성이 변경될 때 이벤트 제거
		return () => window.removeEventListener('resize', updateHeight);
	}, [isOpen]);

	return (
		<div className='w-full border border-platinum rounded-3xl px-8 py-10'>
			<div
				className='flex justify-between items-center cursor-pointer group overflow-hidden'
				onClick={setIsOpen}>
				<span className='text-2xl'>{title}</span>
				<button
					className={`p-3 ${
						isOpen ? 'bg-primary' : 'bg-platinum'
					} group-hover:bg-primary rounded-lg transition-color duration-300`}>
					<IconArrow isOpen={isOpen} />
				</button>
			</div>
			<div
				className='transition-all duration-500 ease-in-out overflow-hidden'
				style={{ height }}>
				<div
					ref={contentRef}
					className={`py-3 transition-all duration-500 text-sm ${
						isOpen ? 'opacity-100' : 'opacity-0'
					}`}>
					{content}
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
