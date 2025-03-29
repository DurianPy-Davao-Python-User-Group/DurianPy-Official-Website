import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '@/components/ui/carousel';

export function Testimonials() {
  const ratings = ["test1", "test2", "test3", "test4", "test5", "test6"]

  return (
    <div>
      {/* DurianPy Ratings */}
      <div className="bg-white">
        DurianPy Ratings
      </div>
      <div>
        <CarouselContainer
          opts={{ loop: true }}
          autoplay={true}
          autoplayInterval={3000}
          className="mx-auto px-0"
        >
          <CarouselContent>
            {ratings.map((rating, index) => (
              <CarouselItem className="relative flex items-center justify-center basis-1/3" key={index} >
                {rating}
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* CAROUSEL INDICATORS */}
          <CarouselDots className="z-10 peer absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

          <CarouselPrevious className="z-10 peer ml-[32px] lg:ml-[48px] xl:ml-[64px] h-16 w-16 sm:w-20 sm:h-20" />
          <CarouselNext className="z-10 peer mr-[32px] lg:mr-[48px] xl:mr-[64px] h-16 w-16 sm:w-20 sm:h-20" />
        </CarouselContainer>
      </div>
    </div>
  )
}
