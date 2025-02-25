import { Container } from '../ui/container';

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
    <section className="bg-green-800 py-16">
      <Container>
        <div className="relative overflow-hidden z-10">
          {/* CAROUSEL */}
          <CarouselContainer className="w-full bg-blue-500">
            <CarouselContent>
              {photos.map((photo, idx) => (
                <CarouselItem
                  key={idx}
                  className="bg-green-700 p-6 rounded-lg flex items-center justify-center w-full"
                >
                  <img
                    src={'assets/carousel/' + photo.image}
                    alt={photo.name}
                    className="object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

            <CarouselPrevious className="ml-[10%]" />
            <CarouselNext className="mr-[10%]" />
          </CarouselContainer>

          {/* TEXT OVERLAY */}
          <div className="w-full absolute top-0 left-0 text-center text-white mt-10">
            <h2 className="text-3xl font-bold">
              Davao <span className="text-primary">Python</span> Community
            </h2>
            <p>
              where Pythonistas and enthusiasts gather to discuss trends and
              share knowledge
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
