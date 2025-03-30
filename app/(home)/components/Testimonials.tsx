"use client"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function Testimonials() {
  const dummyData = [
    { name: "Lorem1", date: "1 week ago", comment: "Test 1 lorem", rate: 4, profilePic: "https://github.com/shadcn.png" }
  ]

  return (
    <div className='pt-10 pb-40'>
      {/* DurianPy Ratings */}
      <div className=''>
        DurianPy Ratings
      </div>
      <div>
        <CarouselContainer
          opts={{ loop: true }}
          autoplay={true}
          autoplayInterval={3000}
          className="flex justify-center"
        >
          <CarouselContent className=''>
            <CarouselItem className="relative flex items-center justify-center basis-1/3">

            </CarouselItem>
          </CarouselContent>

          <div className='relative w-fit'>
            {/* SPEECH BUBBLE */}
            <Image src={testimonialCard} alt='testimonial card' priority={true} />
            <div className="absolute z-10 top-0 py-5 px-10 space-y-5 h-72 w-full ">
              <Ratings rate={1} />
              <div className='relative text-white text-lg overflow-hidden text-ellipsis h-[150px]'>

                <div className='absolute bottom-0 z-20 bg-gradient-to-t from-medium-dark-green h-20 w-full'> </div>
              </div>
              <a className='text-[#B3B3B3] absolute bottom-10 underline underline-offset-2 decoration-1' href='#'>Read more</a>
            </div>

            {/* USER AVATAR & NAME */}
            <div className='mt-4 ms-[70px] flex space-x-4 items-center'>
              <Avatar className='h-16 w-16'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-white text-lg">Test name</div>
                <div className='text-[#B3B3B3]'>Test date</div>
              </div>
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
