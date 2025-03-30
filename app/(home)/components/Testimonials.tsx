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

type testimonial = {
  name: string
  date: string
  comment: string
  rate: number
  profilePic: string
}

export function Testimonials() {
  const dummyData = [
    { "name": "Lorem2", "date": "2 days ago", "comment": "Test 2 lorem", "rate": 5, "profilePic": "https://github.com/shadcn.png" },
    { "name": "Lorem3", "date": "3 weeks ago", "comment": "Test 3 lorem", "rate": 3, "profilePic": "https://github.com/shadcn.png" },
    { "name": "Lorem4", "date": "5 days ago", "comment": "Test 4 lorem", "rate": 4, "profilePic": "https://github.com/shadcn.png" },
    { "name": "Lorem5", "date": "1 month ago", "comment": "Test 5 lorem", "rate": 2, "profilePic": "https://github.com/shadcn.png" },
    { "name": "Lorem5", "date": "1 month ago", "comment": "Test 5 lorem", "rate": 2, "profilePic": "https://github.com/shadcn.png" },
    { "name": "Lorem6", "date": "10 hours ago", "comment": "Test 6 lorem", "rate": 5, "profilePic": "https://github.com/shadcn.png" }
  ]

  return (
    <section className='pt-10 pb-40 max-w-[1500px] mx-auto'>
      {/* DurianPy Ratings */}
      <div className=''>
        DurianPy Ratings
      </div>
      <div>
        <CarouselContainer
          opts={{ loop: true }}
          autoplay={false}
          autoplayInterval={3000}
          className=""
        >
          <CarouselContent className=''>
            {dummyData.map((data, index) => (
              <CarouselItem className="relative flex justify-center basis-1/3" key={index}>
                <TestimonialCard name={data.name} date={data.date} comment={data.comment} rate={data.rate} profilePic={data.profilePic} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* CAROUSEL INDICATORS */}
          <CarouselDots className="z-10 peer absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

          <CarouselPrevious className="z-10 peer ml-[32px] lg:ml-[48px] xl:ml-[64px] h-16 w-16 sm:w-20 sm:h-20" />
          <CarouselNext className="z-10 peer mr-[32px] lg:mr-[48px] xl:mr-[64px] h-16 w-16 sm:w-20 sm:h-20" />
        </CarouselContainer>
      </div>
    </section>
  )
}

// Number of Stars depending on rating.
const Ratings = ({ rate }: { rate: number }) => {
  const starRate = []

  // Append stars
  for (let i = 0; i < 5; i++) {
    // If index is greater than the rating, append white star, else yellow star.
    if (i >= rate) {
      starRate.push(<Image src={whiteStarIcon} alt='yellow star' key={i} />)
    } else {
      starRate.push(<Image src={yellowStarIcon} alt='yellow star' key={i} />)
    }
  }

  return (
    <div className='flex space-x-3 justify-center'>{starRate}</div>
  )
}

const TestimonialCard = ({ name, date, comment, rate, profilePic }: testimonial) => {
  return (
    <div className='relative w-fit'>
      {/* SPEECH BUBBLE */}
      <Image src={testimonialCard} alt='testimonial card' priority={true} />
      <div className="absolute z-10 top-0 py-5 px-10 space-y-5 h-72 w-full ">
        <Ratings rate={rate} />
        <div className='relative text-white text-lg overflow-hidden text-ellipsis h-[150px]'>
          {comment}
          <div className='absolute bottom-0 z-20 bg-gradient-to-t from-medium-dark-green h-20 w-full'> </div>
        </div>
        <a className='text-[#B3B3B3] absolute bottom-10 underline underline-offset-2 decoration-1' href='#'>Read more</a>
      </div>

      {/* USER AVATAR & NAME */}
      <div className='mt-4 ms-[70px] flex space-x-4 items-center'>
        <Avatar className='h-16 w-16'>
          <AvatarImage src={profilePic} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-white text-lg">{name}</div>
          <div className='text-[#B3B3B3]'>{date}</div>
        </div>
      </div>
    </div>
  )
}
