'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ICardProps {
  title: string;
  icon: string;
  color: string;
}

const Card = ({ title, icon, color }: ICardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='w-full h-full bg-white rounded-xl relative flex items-center justify-center outline outline-platinum transition-colors duration-300 aspect-[8/4]'
      style={{ backgroundColor: isHovered ? color : 'white' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={icon}
        alt={title}
        width={150}
        height={58}
        className={`w-36 object-contain transition-all duration-300 ${
          isHovered ? 'brightness-100' : 'brightness-0'
        }`}
      />
    </div>
  );
};
export default Card;
