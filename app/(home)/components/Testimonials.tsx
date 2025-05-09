'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { type CarouselApi } from '@/components/ui/carousel';
import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import testimonialCard from '@/public/assets/testimonials/testimonial-card.svg';
import yellowStarIcon from '@/public/assets/testimonials/yellow-star.svg';
import whiteStarIcon from '@/public/assets/testimonials/white-star.svg';
import nextArrowIcon from '@/public/assets/testimonials/next-arrow.svg';
import prevArrowIcon from '@/public/assets/testimonials/previous-arrow.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

type testimonial = {
  name: string;
  date: string;
  comment: string;
  rate: number;
  profilePic: string;
  className: string;
};

export function Testimonials() {
  const dummyData = [
    {
      name: 'AlexByte_97',
      date: '2 days ago',
      comment:
        "I've been following similar content for a while, but this one really stands out. The attention to detail and the way everything is explained so clearly make it incredibly easy to understand. Honestly, I wish more people put this level of effort into their posts. Keep it up! Looking forward to more amazing content like this! ????",
      rate: 5,
      profilePic: 'https://github.com/shadcn.png',
    },
    {
      name: 'GamerXtreme',
      date: '3 weeks ago',
      comment: 'Not bad, but I expected a bit more tbh. ??',
      rate: 3,
      profilePic: 'https://github.com/shadcn.png',
    },
    {
      name: 'TechieTasha',
      date: '5 days ago',
      comment: 'Super useful, definitely sharing this! ??',
      rate: 4,
      profilePic: 'https://github.com/shadcn.png',
    },
    {
      name: 'MemeLord420',
      date: '1 month ago',
      comment: "Bro, this ain't it... ??",
      rate: 2,
      profilePic: 'https://github.com/shadcn.png',
    },
    {
      name: 'NeonC0der',
      date: '10 hours ago',
      comment:
        'I appreciate the effort that went into this, but I feel like some parts could have been elaborated on a bit more. Certain sections were great, but others felt a little rushed. That being said, I still learned a lot and really enjoyed the overall message. Keep refining your style because you definitely have potential! Excited to see how your content evolves over time. ??',
      rate: 4,
      profilePic: 'https://github.com/shadcn.png',
    },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative z-10 text-white py-12 sm:py-16">
      <Container className='space-y-6 xl:space-x-0 bg-green-300'>
        {/* Combined container: Ratings + Button */}
        <div className="flex flex-col space-y-5 xl:flex-row xl:items-center xl:justify-between px-[1%] 2xl:px-0">
          {/* Logo & Ratings */}
          <div className="flex flex-col items-center xl:items-start xl:text-left w-full">
            <div>
              <div className="flex items-center gap-x-4">
                <Image
                  src="/assets/logo.svg"
                  height={64}
                  width={64}
                  className="h-24 w-auto"
                  alt="Durianpy Logo"
                  priority
                />
                <h2 className="text-4xl font-normal">
                  Ratings
                </h2>
              </div>

              {/* Star Ratings */}
              <div className="flex sm:flex-row self items-center sm:space-x-4 -mt-5 ms-2">
                <span className="">4.8</span>
                <div className="flex -space-x-2 sm:-space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Image src={yellowStarIcon} alt="yellow star" key={i} className="p-2 sm:p-[6px]" />
                  ))}
                  <Image src={whiteStarIcon} alt="yellow star" className="p-2 sm:p-[6px]" />
                </div>
                <span className="font-light">5 reviews</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mx-auto">
            <Link href="https://www.meetup.com/durianpy/" target="_blank">
              <Button
                variant="footer"
                className="py-1 px-4 sm:py-2 sm:px-6 text-black sm:text-lg sm:font-normal"
              >
                Write a Review
              </Button>
            </Link>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          className=""
          onClick={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
        >
          <CarouselContainer
            setApi={setApi}
            opts={{ loop: true }}
            autoplay={!isInteracting}
            autoplayInterval={5000}
            className="relative mx-auto sm:min-w-[535px] sm:w-1/2 xl:w-full bg-red-300"
          >
            <CarouselContent className="mx-auto sm:-ms-[4%] xl:py-[4%]">
              {dummyData.map((data, index) => (
                <CarouselItem
                  className="sm:px-0 sm:relative xl:px-[4%] sm:flex sm:justify-center xl:basis-1/3"
                  key={index}
                >
                  <TestimonialCard
                    name={data.name}
                    date={data.date}
                    comment={data.comment}
                    rate={data.rate}
                    profilePic={data.profilePic}
                    className={current === index ? 'xl:scale-125' : ''}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="xl:hidden hidden sm:block sm:absolute z-20 w-28 h-28" />
            <CarouselNext className="xl:hidden hidden sm:block sm:absolute z-20 w-28 h-28" />
            <CarouselDots className="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />
          </CarouselContainer>
        </div>
        {/* <button */}
        {/*   className="" */}
        {/*   onClick={() => api?.scrollTo(current - 1)} */}
        {/* > */}
        {/*   <Image src={prevArrowIcon} alt="Prev" className="scale-150" /> */}
        {/* </button> */}
        {/* <button */}
        {/*   className="" */}
        {/*   onClick={() => api?.scrollTo(current + 1)} */}
        {/* > */}
        {/*   <Image src={nextArrowIcon} alt="Next" className="scale-150" /> */}
        {/* </button> */}
      </Container>
    </section>
  );
}

// Number of Stars depending on rating.
const Ratings = ({ rate, size, spacing, className }: { rate: number, size?: string, spacing?: string, className?: string }) => {
  const starRate = [];

  // Append stars
  for (let i = 0; i < 5; i++) {
    // If index is greater than the rating, append white star, else yellow star.
    if (i >= rate) {
      starRate.push(
        <Image src={whiteStarIcon} alt="yellow star" key={i} className={cn("p-1", size)} />
      );
    } else {
      starRate.push(
        <Image src={yellowStarIcon} alt="yellow star" key={i} className={cn("p-1", size)} />
      );
    }
  }

  return (
    <div className={cn("flex justify-center", spacing, className)}>
      {starRate}
    </div>
  );
};

const TestimonialCard = ({
  name,
  date,
  comment,
  rate,
  profilePic,
  className,
}: testimonial) => {
  return (
    <div
      className={cn(
        'transition-all duration-300 ease-in-out space-y-4',
        className
      )}
    >
      {/* SPEECH BUBBLE */}
      <div className="hidden sm:block relative">
        <Image src={testimonialCard} alt="testimonial card" priority={true} />
        <Ratings rate={rate} size={"px-0"} spacing={"space-x-2"} className={'absolute top-[5%] left-1/2 -translate-x-1/2'} />
        <div className="absolute h-1/2 inset-y-1/4 px-[10%] text-white text-xs sm:text-xl xl:text:base overflow-hidden text-ellipsis xl:leading-6">
          {comment}
        </div>
        <div className="absolute h-fit pt-[15%] px-[9%] inset-x-1 bottom-[24%] text-[#B3B3B3] underline underline-offset-2 decoration-1 text-xs sm:text-base bg-gradient-to-t from-medium-dark-green from-50% -mt-3">
          <a href="/404" target="_blank">
            Read More
          </a>
        </div>
      </div>

      <div className='sm:hidden bg-medium-dark-green rounded-2xl border-2 border-green-300 py-5 px-10 h-32'>
        <div>{comment}</div>
      </div>

      {/* USER AVATAR & NAME */}
      <div className="flex space-x-3 px-[17%] items-center">
        <Avatar className="h-full w-full max-h-20 max-w-20 sm:max-h-16 sm:max-w-16">
          <AvatarImage src={profilePic} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-white text-2xl sm:text-base lg:text-base xl:text-lg">
            {name}
          </div>
          <div className="text-[#B3B3B3] text-xl sm:text-xs xl:text-base">{date}</div>
        </div>
      </div>
    </div>
  );
};
