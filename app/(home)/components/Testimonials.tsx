'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { CarouselDots, type CarouselApi } from '@/components/ui/carousel';
import { useState } from 'react';
import { useEffect } from 'react';
import YellowStar from '@/public/assets/testimonials/yellow-star.svg';
import WhiteStar from '@/public/assets/testimonials/white-star.svg';
import ChatBubble from '@/public/assets/testimonials/chat-bubble.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type TestimonialProps = {
  text: string;
  rate: number;
  active: boolean;
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
    <section className="relative z-10 text-white py-12 sm:py-16 -ms-4 lg:-ms-0 ">
      <Container className="space-y-6 xl:space-x-0 mx-auto lg:space-y-3">
        {/* Combined container: Ratings + Button */}
        <div className="flex flex-col space-y-5 xl:flex-row xl:justify-between px-[1%] 2xl:px-0 sm:pb-4 lg:flex-row lg:px-14">
          {/* Logo & Ratings */}
          <div className="flex flex-col items-center xl:items-start xl:text-left w-full lg:items-start">
            <div className="-space-y-4">
              <div className="flex items-center gap-x-2">
                <Image
                  src="/assets/logo.svg"
                  height={64}
                  width={64}
                  className="h-16 sm:h-24 w-auto"
                  alt="Durianpy Logo"
                  priority
                />
                <h2 className="text-2xl mt-2 sm:text-3xl sm:mt-3 font-normal">
                  Ratings
                </h2>
              </div>

              {/* Star Ratings */}
              <div className="flex text-xs sm:text-base sm:flex-row self items-center space-x-1 sm:space-x-4 -mt-5 ms-2">
                <span className="font-semibold mt-1">4.8</span>
                <div className="flex -space-x-3 sm:-space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Image
                      src={YellowStar}
                      alt="yellow star"
                      key={i}
                      className="p-2 sm:p-[6px]"
                    />
                  ))}
                  <Image
                    src={WhiteStar}
                    alt="yellow star"
                    className="p-2 sm:p-[6px]"
                  />
                </div>
                <span className="font-light mt-1">5 reviews</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mx-auto">
            <Link href="https://www.meetup.com/durianpy/" target="_blank">
              <Button
                variant="footer"
                className="py-1 px-4 text-xs sm:py-1.5 sm:px-6 text-black sm:text-lg sm:font-normal lg:mt-3"
              >
                Write a Review
              </Button>
            </Link>
          </div>
        </div>

        {/* CAROUSEL */}
        <div>
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            autoplay={!isInteracting}
            autoplayInterval={5000}
            onClick={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            className="max-w-96 sm:w-96 lg:max-w-full lg:w-full lg:px-5 mx-auto"
          >
            <CarouselContent className="flex mx-auto sm:-ms-4 lg:-ms-0 lg:py-8">
              {dummyData.map((data, index) => (
                <CarouselItem
                  className="flex-col justify-center lg:basis-1/3 lg:px-11"
                  key={index}
                >
                  <TestimonialCard
                    text={data.comment}
                    rate={data.rate}
                    active={current === index ? true : false}
                  />
                  <div
                    className={
                      current === index
                        ? 'flex justify-center items-center space-x-3 mt-4 sm:mt-2 sm:-ms-16 lg:-ms-5 lg:scale-125 lg:mt-12 transition-all duration-300 ease-in-out'
                        : 'flex justify-center items-center space-x-3 mt-4 sm:mt-2 sm:-ms-16 lg:-ms-0 lg:mb-12 transition-all duration-300 ease-in-out'
                    }
                  >
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={data.profilePic} />
                      <AvatarFallback className="text-2xl text-[#B3B3B3]">
                        {data.name
                          .split(' ')
                          .map((word) => word[0])
                          .join('')
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-col">
                      <div>{data.name}</div>
                      <div className="text-sm text-[#B3B3B3]">{data.date}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="hidden sm:block absolute -left-24 h-20 w-20 -mt-[5%] lg:-left-6 lg:h-20 lg:w-20"
              onClick={() => api?.scrollTo(current - 1)}
            />
            <CarouselNext
              className="hidden sm:block absolute -right-24 h-20 w-20 -mt-[5%] lg:-right-6 lg:h-20 lg:w-20"
              onClick={() => api?.scrollTo(current + 1)}
            />
            <CarouselDots className="pt-5" />
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

export function TestimonialCard({ text, rate, active }: TestimonialProps) {
  const starRate = [];

  // Append stars
  for (let i = 0; i < 5; i++) {
    // If index is greater than the rating, append white star, else yellow star.
    if (i >= rate) {
      starRate.push(
        <Image src={WhiteStar} alt="yellow star" key={i} className="lg:p-1" />
      );
    } else {
      starRate.push(
        <Image src={YellowStar} alt="yellow star" key={i} className="lg:p-1" />
      );
    }
  }

  return (
    <>
      {/* Mobile View Display */}
      <div className="relative sm:hidden h-24 p-5 bg-medium-dark-green border border-[#36FF90] rounded-xl w-full text-clip overflow-hidden">
        <div className="text-xs sm:text-base">{text}</div>
        <div className="absolute bottom-0 pb-2 pt-14 bg-gradient-to-t from-medium-dark-green from-20% inset-x-5">
          <Link
            href="/404"
            target="_blank"
            className="text-xs sm:text-base text-yellow-400 underline"
          >
            Read more
          </Link>
        </div>
      </div>

      {/* Tablet & Laptop View Display */}
      <div
        className={
          active === true
            ? 'hidden sm:block relative transition-all duration-300 ease-in-out lg:scale-125'
            : 'hidden sm:block relative transition-all duration-300 ease-in-out'
        }
      >
        <Image src={ChatBubble} alt="chat-bubble" />
        <div className="flex absolute top-5 inset-x-0 justify-center space-x-2.5 lg:space-x-0.5">
          {starRate}
        </div>
        <div className="absolute top-16 mt-1 h-44 px-9 text-lg text-clip overflow-hidden lg:text-base lg:px-7 lg:h-1/3 xl:h-1/2">
          {text}
        </div>
        <div className="absolute bottom-14 pb-2 pt-28 bg-gradient-to-t from-medium-dark-green from-25% inset-x-9 lg:inset-x-7 lg:bottom-10">
          <Link
            href="/404"
            target="_blank"
            className="text-[#B3B3B3] underline lg:text-xs"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
}
