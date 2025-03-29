import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '@/components/ui/carousel';
import Image from 'next/image';
import testimonialCard from '@/public/assets/testimonials/testimonial-card.svg'
import yellowStarIcon from '@/public/assets/testimonials/yellow-star.svg'
import whiteStarIcon from '@/public/assets/testimonials/white-star.svg'

// Number of Stars depending on rating.
const Ratings = ({ rating }: { rating: number }) => {
  const starRate = []

  // Append stars
  for (let i = 0; i < 5; i++) {
    // If index is greater than the rating, append white star, else yellow star.
    if (i >= rating) {
      starRate.push(<Image src={whiteStarIcon} alt='yellow star' />)
    } else {
      starRate.push(<Image src={yellowStarIcon} alt='yellow star' />)
    }
  }

  return (
    <div className="flex space-x-3"> {starRate} </div>
  )
}

export function Testimonials() {
  const ratings = ["test1", "test2", "test3", "test4", "test5", "test6"]

  return (
    <div className='bg-white'>
      {/* DurianPy Ratings */}
      <div>
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

          <div className='relative bg-blue-300 w-fit '>
            <Image src={testimonialCard} alt='testimonial card' priority={true} />
            <div className="absolute bg-red-300 z-10 top-1/4 left-1/2 -translate-x-1/2">random text</div>
            <Ratings rating={1} />
          </div>

          {/* CAROUSEL INDICATORS */}
          <CarouselDots className="z-10 peer absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

          <CarouselPrevious className="z-10 peer ml-[32px] lg:ml-[48px] xl:ml-[64px] h-16 w-16 sm:w-20 sm:h-20" />
          <CarouselNext className="z-10 peer mr-[32px] lg:mr-[48px] xl:mr-[64px] h-16 w-16 sm:w-20 sm:h-20" />
        </CarouselContainer>
      </div>
    </div>
  )
}
