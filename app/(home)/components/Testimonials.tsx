"use client"

import { type CarouselApi } from '@/components/ui/carousel';

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '@/components/ui/carousel';
import Image from 'next/image';
import testimonialCard from '@/public/assets/testimonials/testimonial-card.svg'
import yellowStarIcon from '@/public/assets/testimonials/yellow-star.svg'
import whiteStarIcon from '@/public/assets/testimonials/white-star.svg'
import nextArrowIcon from '@/public/assets/testimonials/next-arrow.svg'
import prevArrowIcon from '@/public/assets/testimonials/previous-arrow.svg'
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

  return (
    <section className='pt-10 pb-40 relative'>
      {/* DurianPy Ratings */}
      <div className=''>
        DurianPy Ratings
      </div>
      <div className='relative'>
        <button className='z-20 absolute left-8 bottom-1/2 bg-opacity-0' onClick={() => api?.scrollTo(current - 1)}>
          <Image src={prevArrowIcon} alt='Prev' className='w-10' />
        </button>
        <CarouselContainer setApi={setApi}
          opts={{ loop: true }}
          autoplay={false}
          autoplayInterval={3000}
          className="mx-auto px-24"
        >
          {/* mx-auto max-w-[1280px] */}
          <CarouselContent className='mx-auto py-20'>
            {dummyData.map((data, index) => (
              <CarouselItem className="relative px-5 flex justify-center lg:basis-1/3" key={index}>
                <TestimonialCard name={data.name} date={data.date} comment={data.comment} rate={data.rate} profilePic={data.profilePic} className={current === index ? "scale-110 -mt-8" : ""} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />
        </CarouselContainer>
        <button className='z-20 absolute right-8 bottom-1/2 bg-opacity-0' onClick={() => api?.scrollTo(current + 1)}>
          <Image src={nextArrowIcon} alt='Next' className="w-10" />
        </button>
      </div>
    </section>
  )
}

// Number of Stars depending on rating.
const Ratings = ({ rate, className }: { rate: number, className: string }) => {
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
    <div className={cn('flex space-x-3 justify-center', className)}>{starRate}</div>
  )
}

const TestimonialCard = ({ name, date, comment, rate, profilePic, className }: testimonial) => {
  return (
    <div className={cn('transition-all duration-300 ease-in-out', className)}>
      {/* SPEECH BUBBLE */}
      <div className='relative min-w-[300px]'>
        <Image src={testimonialCard} alt='testimonial card' priority={true} />
        <Ratings rate={rate} className='absolute top-4 left-1/2 -translate-x-1/2' />
        <div className='absolute h-1/2 top-16 px-8 text-white md:text-sm lg:text-base xl:text-lg overflow-hidden text-ellipsis xl:leading-6'>
          {comment}
        </div>
        <a className="absolute bottom-16 left-0 right-2 text-[#B3B3B3] underline underline-offset-2 decoration-1 bg-gradient-to-t from-medium-dark-green from-35% pt-24 ms-8 pb-2 -mb-2"> Read More</a>
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
