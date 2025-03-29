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

export function Testimonials() {
  const ratings = ["test1", "test2", "test3", "test4", "test5"]

  return (
    <div className=''>
      {/* DurianPy Ratings */}
      <div className='bg-white'>
        DurianPy Ratings
      </div>
      <div>
        <CarouselContainer
          opts={{ loop: true }}
          autoplay={true}
          autoplayInterval={3000}
          className="mx-auto px-0 bg-white"
        >
          <CarouselContent className=''>
            {ratings.map((rating, index) => (
              <CarouselItem className="relative flex items-center justify-center basis-1/3" key={index} >
                {rating}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className='relative w-fit '>
            <Image src={testimonialCard} alt='testimonial card' priority={true} />
            <div className="absolute z-10 top-0 py-5 px-10 space-y-5 max-h-72">
              <Ratings rate={1} />
              <div className='relative text-white text-lg overflow-hidden text-ellipsis max-h-[150px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <div className='absolute bottom-0 z-20 bg-gradient-to-t from-medium-dark-green h-20 w-full'> </div>
              </div>
              <a className='text-[#B3B3B3] underline underline-offset-2 decoration-1' href='#'>Read more</a>
            </div>
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

// Number of Stars depending on rating.
const Ratings = ({ rate }: { rate: number }) => {
  const starRate = []

  // Append stars
  for (let i = 0; i < 5; i++) {
    // If index is greater than the rating, append white star, else yellow star.
    if (i >= rate) {
      starRate.push(<Image src={whiteStarIcon} alt='yellow star' />)
    } else {
      starRate.push(<Image src={yellowStarIcon} alt='yellow star' />)
    }
  }

  return (
    <div className='flex space-x-3 justify-center'>{starRate}</div>
  )
}
