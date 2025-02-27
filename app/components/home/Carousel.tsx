import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '../ui/carousel';

import Image from 'next/image';

export function Carousel() {
  const photos = [
    { name: 'pyconf 2024', image: '1.png' },
    { name: 'meetup #1', image: '2.png' },
    { name: 'meetup #2', image: '3.png' },
    { name: 'meetup #3', image: '4.png' },
  ];

  return (
    <section className="group relative w-screen overflow-clip">
      {/* CAROUSEL */}
      <CarouselContainer
        opts={{ loop: true }}
        autoplay={true}
        autoplayInterval={3000}
        className="mx-auto px-0"
      >
        <CarouselContent>
          {photos.map((photo, idx) => (
            <CarouselItem
              key={idx}
              className="relative flex items-center justify-center"
            >
              <Image
                src={'/assets/carousel/' + photo.image}
                alt={photo.name}
                className="object-cover w-screen max-h-[80vh]"
                width={1960}
                height={1280}
              />

              <div className="absolute left-[-20px] inset-y-0 bg-gradient-to-r from-[#1A3E2A]/20 to-transparent duration-500" />
              <div className="absolute right-[-20px] inset-y-0 bg-gradient-to-r from-[#1A3E2A]/20 to-transparent -scale-x-100 duration-500" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* DARK GREEN */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102019] via-[#102019]/40 sm:via-[#102019]/90 md:via-[#102019]/20 to-transparent duration-500" />

        <CarouselDots className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />
        <CarouselPrevious className="ml-[5%] h-16 w-16 sm:w-20 sm:h-20" />
        <CarouselNext className="mr-[5%] h-16 w-16 sm:w-20 sm:h-20" />
      </CarouselContainer>

      {/* WHITE GRADIENT */}
      <div className="absolute top-[-90px] left-0 w-full h-[200px] bg-gradient-to-b from-[#f7f8f7] via-[#f7f8f7]/100 via-[50%] to-transparent" />

      {/* TEXT OVERLAY */}
      <div className="w-full flex flex-col items-center absolute top-1/2 left-0 -translate-y-1/2 text-center text-white pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
        <h2 className="w-[90%] text-3xl sm:text-5xl md:text-6xl xl:text-[5rem] font-bold">
          Davao <span className="text-primary">Python</span> Community
        </h2>
        <p className="w-[80%] text-sm sm:text-base lg:text-2xl">
          where Pythonistas and enthusiasts gather to discuss trends and share
          knowledge
        </p>
      </div>
    </section>
  );
}
