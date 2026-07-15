import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '@/components/ui/carousel';

export function Carousel() {
  const photos = [
    { name: 'pyconf 2024', image: '1.png' },
    { name: 'meetup #1', image: '2.png' },
    { name: 'meetup #2', image: '3.png' },
    { name: 'meetup #3', image: '4.png' },
  ];

  return (
    <section className="relative w-full overflow-clip">
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
              <img
                src={'/assets/carousel/' + photo.image}
                alt={photo.name}
                className="object-cover w-full h-full"
                width={1960}
                height={1280}
              />

              <div className="absolute inset-y-0 right-0 bg-gradient-ltr-lightgreen-transparent w-[20%] opacity-15 scale-x-[-1]" />

              <div className="absolute inset-0 bg-gradient-ltr-lightgreen-transparent w-[20%] opacity-15" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* CAROUSEL INDICATORS */}
        <CarouselDots className="z-10 peer absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

        <CarouselPrevious className="z-10 peer ml-[32px] lg:ml-[48px] xl:ml-[64px] h-16 w-16 sm:w-20 sm:h-20" />
        <CarouselNext className="z-10 peer mr-[32px] lg:mr-[48px] xl:mr-[64px] h-16 w-16 sm:w-20 sm:h-20" />

        {/* TEXT OVERLAY */}
        <div className="peer z-[5] w-full select-none flex flex-col items-center absolute top-1/2 left-0 -translate-y-1/2 text-center text-white transition-opacity duration-500 peer-hover:opacity-0 hover:opacity-0">
          <h2 className="w-[90%] text-3xl sm:text-5xl md:text-6xl xl:text-[5rem] font-bold">
            Davao <span className="text-primary">Python</span> Community
          </h2>
        </div>
      </CarouselContainer>
    </section>
  );
}
