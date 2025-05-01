'use client';

import { Star } from 'lucide-react';
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
      <Container>
        {/* Combined container: Ratings + Button */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Logo & Ratings */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo.svg"
                height={64}
                width={64}
                className="h-20 md:h-24 w-auto"
                alt="Durianpy Logo"
                priority
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">
                Ratings
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
              <span className="text-xl sm:text-2xl font-bold">4.8</span>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-500 fill-yellow-500 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                  />
                ))}
                <Star className="text-white fill-current w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-lg sm:text-xl font-light">5 reviews</span>
            </div>
          </div>

          {/* Button */}
          <div className="w-full sm:w-auto flex justify-center lg:justify-end">
            <Link href="https://www.meetup.com/durianpy/" target="_blank">
              <Button
                variant="footer"
                className="w-full sm:w-[180px] md:w-[220px] h-12 sm:h-14 text-black sm:text-lg md:text-2xl"
              >
                Write a Review
              </Button>
            </Link>
          </div>

        </div>

        <div
          className="relative"
          onClick={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
        >
          <button
            className="z-20 absolute left-0 md:left-8 bottom-1/2 bg-opacity-0"
            onClick={() => api?.scrollTo(current - 1)}
          >
            <Image src={prevArrowIcon} alt="Prev" className="w-2/3" />
          </button>
          <CarouselContainer
            setApi={setApi}
            opts={{ loop: true }}
            autoplay={!isInteracting}
            autoplayInterval={5000}
            className="mx-auto px-[10%]"
          >
            <CarouselContent className="mx-auto py-20">
              {dummyData.map((data, index) => (
                <CarouselItem
                  className="relative px-[3%] flex justify-center lg:basis-1/3"
                  key={index}
                >
                  <TestimonialCard
                    name={data.name}
                    date={data.date}
                    comment={data.comment}
                    rate={data.rate}
                    profilePic={data.profilePic}
                    className={current === index ? 'sm:scale-110 sm:-mt-8' : ''}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 text-2xl py-4 text" />
          </CarouselContainer>
          <button
            className="z-20 absolute -right-3 md:right-8 bottom-1/2 bg-opacity-0"
            onClick={() => api?.scrollTo(current + 1)}
          >
            <Image src={nextArrowIcon} alt="Next" className="w-2/3" />
          </button>
        </div>
      </Container>
    </section>
  );
}

// Number of Stars depending on rating.
const Ratings = ({ rate }: { rate: number }) => {
  const starRate = [];

  // Append stars
  for (let i = 0; i < 5; i++) {
    // If index is greater than the rating, append white star, else yellow star.
    if (i >= rate) {
      starRate.push(
        <Image src={whiteStarIcon} alt="yellow star" key={i} className="p-1" />
      );
    } else {
      starRate.push(
        <Image src={yellowStarIcon} alt="yellow star" key={i} className="p-1" />
      );
    }
  }

  return (
    <div className="flex justify-center absolute top-[5%] left-1/2 -translate-x-1/2">
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
      <div className="relative">
        <Image src={testimonialCard} alt="testimonial card" priority={true} />
        <Ratings rate={rate} />
        <div className="absolute h-1/2 inset-y-1/4 px-[5%] text-white text-xs sm:text-base lg:text-base xl:text-lg overflow-hidden text-ellipsis xl:leading-6">
          {comment}
        </div>
        <a
          href="/404"
          target="_blank"
          className="absolute h-fit pt-[15%] px-[4%] inset-x-1 bottom-[24%] text-[#B3B3B3] underline underline-offset-2 decoration-1 text-xs sm:text-base bg-gradient-to-t from-medium-dark-green from-50% -mt-3"
        >
          {' '}
          Read More
        </a>
      </div>

      {/* USER AVATAR & NAME */}
      <div className="flex space-x-3 px-[17%] items-center">
        <Avatar className="h-full w-full max-h-14 max-w-14 sm:max-h-16 sm:max-w-16">
          <AvatarImage src={profilePic} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-white text-xs sm:text-base lg:text-base xl:text-lg">
            {name}
          </div>
          <div className="text-[#B3B3B3] text-xs xl:text-base">{date}</div>
        </div>
      </div>
    </div>
  );
};
