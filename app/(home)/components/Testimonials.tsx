"use client"

import { type CarouselApi } from '@/components/ui/carousel';

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
import { useState } from 'react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

type testimonial = {
  name: string
  date: string
  comment: string
  rate: number
  profilePic: string
  className: string
}

export function Testimonials() {
  const dummyData = [
    {
      "name": "AlexByte_97", "date": "2 days ago", "comment": "I've been following similar content for a while, but this one really stands out. The attention to detail and the way everything is explained so clearly make it incredibly easy to understand. Honestly, I wish more people put this level of effort into their posts. Keep it up! Looking forward to more amazing content like this! ????",
      "rate": 5, "profilePic": "https://github.com/shadcn.png"
    },
    { "name": "GamerXtreme", "date": "3 weeks ago", "comment": "Not bad, but I expected a bit more tbh. ??", "rate": 3, "profilePic": "https://github.com/shadcn.png" },
    { "name": "TechieTasha", "date": "5 days ago", "comment": "Super useful, definitely sharing this! ??", "rate": 4, "profilePic": "https://github.com/shadcn.png" },
    { "name": "MemeLord420", "date": "1 month ago", "comment": "Bro, this ain't it... ??", "rate": 2, "profilePic": "https://github.com/shadcn.png" },
    {
      "name": "NeonC0der", "date": "10 hours ago", "comment": "I appreciate the effort that went into this, but I feel like some parts could have been elaborated on a bit more. Certain sections were great, but others felt a little rushed. That being said, I still learned a lot and really enjoyed the overall message. Keep refining your style because you definitely have potential! Excited to see how your content evolves over time. ??",
      "rate": 4, "profilePic": "https://github.com/shadcn.png"
    }
  ]

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  // const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  console.log(current)

  return (
    <section className='pt-10 pb-40 relative'>
      {/* DurianPy Ratings */}
      <div className=''>
        DurianPy Ratings
      </div>
      <CarouselContainer setApi={setApi}
        opts={{ loop: true }}
        autoplay={false}
        autoplayInterval={3000}
        className="mx-auto max-w-[1280px]"
      >
        <CarouselContent className='py-20'>
          {dummyData.map((data, index) => (
            <CarouselItem className="relative flex justify-center basis-1/3" key={index}>
              <TestimonialCard name={data.name} date={data.date} comment={data.comment} rate={data.rate} profilePic={data.profilePic} className={current === index ? "scale-110 -mt-8" : ""} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* CAROUSEL INDICATORS */}
        <CarouselDots className="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />

        <CarouselPrevious className="z-10 -ml-10 h-16 w-16 sm:w-20 sm:h-20" />
        <CarouselNext className="z-10 -mr-10 h-16 w-16 sm:w-20 sm:h-20" />
      </CarouselContainer>
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
      starRate.push(<Image src={whiteStarIcon} alt='yellow star' key={i} className='p-[1px]' />)
    } else {
      starRate.push(<Image src={yellowStarIcon} alt='yellow star' key={i} className='p-[1px]' />)
    }
  }

  return (
    <div className='flex space-x-3 justify-center'>{starRate}</div>
  )
}

const TestimonialCard = ({ name, date, comment, rate, profilePic, className }: testimonial) => {
  return (
    <div className='relative w-fit'>
      {/* SPEECH BUBBLE */}
      <Image src={testimonialCard} alt='testimonial card' priority={true} className={cn('transition-all duration-300 ease-in-out', className)} />
      <div className={cn("absolute z-10 top-0 py-5 px-10 space-y-5 h-72 w-full transition-all duration-300 ease-in-out", className)}>
        <Ratings rate={rate} />
        <div className='relative text-white text-lg overflow-hidden text-ellipsis h-[125px] leading-6'>
          {comment}
          <div className='absolute bottom-0 z-20 bg-gradient-to-t from-medium-dark-green h-20 w-full'> </div>
        </div>
        <a className='text-[#B3B3B3] absolute bottom-14 underline underline-offset-2 decoration-1' href='#'>Read more</a>
      </div>

      {/* USER AVATAR & NAME */}
      <div className='mt-4 ms-[70px] flex space-x-4 items-center'>
        <Avatar className='h-16 w-16'>
          <AvatarImage src={profilePic} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-white text-lg">{name}</div>
          <div className='text-[#B3B3B3]'>{date}</div>
        </div>
      </div>
    </div>
  )
}
