import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
}

export default function Card({ image, title }: CardProps) {
  return (
    <div className="rounded-lg bg-gradient-to-b from-[rgba(62,179,114,0.2)] to-[rgba(25,113,64,0.2)] p-4 w-44 h-44 flex flex-col items-center justify-center border-t-2 border-midori-green">
      {/* Image Rendering */}
      <div className="text-yellow-400 mb-2">
        {typeof image === 'string' ? (
          <Image src={image} alt={title} width={50} height={50} />
        ) : (
          image
        )}
      </div>

      {/* Title */}
      <h3 className="text-yellow-400 font-bold text-lg text-center mb-2">
        {title}
      </h3>

      {/* Button */}
      <button className="bg-yellow-400 text-xs text-black py-1 px-3 rounded-full font-medium hover:bg-yellow-300 transition-colors">
        READ MORE
      </button>
    </div>
  );
}
