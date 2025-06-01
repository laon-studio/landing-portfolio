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
        const scrollHeight = contentRef.current.scrollHeight;
        setHeight(isOpen ? `${scrollHeight}px` : '0px');
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, [isOpen]);

  return (
    <div className='w-full border border-platinum rounded-3xl p-5 md:px-8 md:py-10'>
      <div
        className='flex justify-between items-center cursor-pointer group overflow-hidden'
        onClick={setIsOpen}
      >
        <span className='text-xl md:text-2xl'>{title}</span>
        <button
          className={`p-1 md:p-3 ${
            isOpen ? 'bg-primary' : 'bg-platinum'
          } group-hover:bg-primary rounded-lg transition-color duration-300`}
        >
          <IconArrow isOpen={isOpen} />
        </button>
      </div>
      <div
        className='transition-all duration-500 ease-in-out overflow-hidden'
        style={{ height }}
      >
        <div
          ref={contentRef}
          className={`py-3 transition-all duration-500 text-sm ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
