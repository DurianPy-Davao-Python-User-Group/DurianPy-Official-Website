import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
}

export default function Card({ image, title }: CardProps) {
  return (
    <div
      className="rounded-lg bg-gradient-to-b from-[rgba(62,179,114,0.2)] to-[rgba(25,113,64,0.2)] 
                    w-[188px] md:w-[328px] h-[195px] md:h-[340px] 
                    flex flex-col items-center justify-center border-t-2 border-midori-green"
    >
      <div className="relative w-16 h-16 md:w-40 md:h-40 mb-2">
        {typeof image === 'string' ? (
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
        ) : (
          image
        )}
      </div>

      <h3 className="text-yellow-400 font-bold text-lg md:text-[40px] md:leading-none text-center mb-2 md:mb-8">
        {title}
      </h3>

      <button className="bg-yellow-400 text-xs text-black py-1 px-3 rounded-full font-bold">
        READ MORE
      </button>
    </div>
  );
}
