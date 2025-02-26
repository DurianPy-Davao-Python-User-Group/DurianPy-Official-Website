import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '../ui/carousel';

export function Carousel() {
  const photos = [
    { name: 'pyconf 2024', image: '1.png' },
    { name: 'meetup #1', image: '2.png' },
    { name: 'meetup #2', image: '3.png' },
    { name: 'meetup #3', image: '4.png' },
  ];

  return (
    <section className="group relative max-w-7xl mx-auto px-0">
      {/* CAROUSEL */}
      <CarouselContainer
        opts={{ loop: true }}
        autoplay={true}
        autoplayInterval={3000}
      >
        <CarouselContent>
          {photos.map((photo, idx) => (
            <CarouselItem
              key={idx}
              className="relative flex items-center justify-center"
            >
              <img
                src={'assets/carousel/' + photo.image}
                alt={photo.name}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#1A3E2A]/60 to-transparent duration-500 group-hover:opacity-20" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#1A3E2A]/60 to-transparent transform scale-x-[-1] duration-500 group-hover:opacity-20" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-50 duration-500 group-hover:opacity-20" />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselDots className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

        <CarouselPrevious className="ml-[10%]" />
        <CarouselNext className="mr-[10%]" />
      </CarouselContainer>
      <div className="absolute top-[-90px] left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-white/100 via-[30%] to-transparent" />

      {/* TEXT OVERLAY */}
      <div className="w-full absolute top-1/2 left-0 -translate-y-1/2 text-center text-white pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
        <h2 className="text-8xl font-bold">
          Davao <span className="text-primary">Python</span> Community
        </h2>
        <p>
          where Pythonistas and enthusiasts gather to discuss trends and share
          knowledge
        </p>
      </div>
    </section>
  );
}
