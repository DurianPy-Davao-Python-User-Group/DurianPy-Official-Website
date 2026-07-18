import { Image } from "@unpic/react";
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { CarouselDots, type CarouselApi } from '@/components/ui/carousel';
import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const YellowStar = '/assets/images/testimonials/yellow-star.svg';
const WhiteStar = '/assets/images/testimonials/white-star.svg';
const ChatBubble = '/assets/images/testimonials/chat-bubble.svg';

type TestimonialProps = {
  text: string;
  rate: number;
  active: boolean;
};

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const testimonials = [
    {
      text: 'Highly informative! Best meetup I have ever attended. Speakers were so friendly and accommodating, and the venue was spacious and clean. Overall, it was a 10/10 event, and I look forward to attending more Python-related events in Davao.',
      name: 'Carl John',
      title: 'Python Enthusiast',
      avatar: 'Carl.png',
      rate: 5,
    },
    {
      text: 'Highly informative! Best meetup I have ever attended. Speakers were so friendly and accommodating, and the venue was spacious and clean. Overall, it was a 10/10 event, and I look forward to attending more Python-related events in Davao.',
      name: 'Carl John',
      title: 'Python Enthusiast',
      avatar: 'Carl.png',
      rate: 5,
    },
    {
      text: 'Highly informative! Best meetup I have ever attended. Speakers were so friendly and accommodating, and the venue was spacious and clean. Overall, it was a 10/10 event, and I look forward to attending more Python-related events in Davao.',
      name: 'Carl John',
      title: 'Python Enthusiast',
      avatar: 'Carl.png',
      rate: 5,
    },
  ];

  return (
    <section className="bg-dark-green text-white py-16 font-montserrat select-none">
      <Container className="space-y-6 xl:space-x-0 mx-auto lg:space-y-3">
        {/* Combined container: Ratings + Button */}
        <div className="flex flex-col space-y-5 xl:flex-row xl:justify-between px-[1%] 2xl:px-0 sm:pb-4 lg:flex-row lg:px-14">
          {/* Logo & Ratings */}
          <div className="flex flex-col items-center xl:items-start xl:text-left w-full lg:items-start">
            <div className="-space-y-4">
              <div className="flex items-center gap-x-2">
                <Image
                  src="/assets/images/logo.svg"
                  className="h-16 sm:h-24 w-auto"
                  alt="Durianpy Logo"
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
            <a href="https://www.meetup.com/durianpy/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="footer"
                className="py-1 px-4 text-xs sm:py-1.5 sm:px-6 text-black sm:text-lg sm:font-normal lg:mt-3"
              >
                Write a Review
              </Button>
            </a>
          </div>
        </div>

        {/* CAROUSEL */}
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="-ml-4 select-none">
            {testimonials.map((test, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:basis-1/3 flex flex-col justify-between items-center text-center px-12 md:px-0"
              >
                {/* Chat Bubble & Text */}
                <ChatBubbleWithText
                  text={test.text}
                  rate={test.rate}
                  active={index + 1 === current}
                />

                {/* Avatar */}
                <div className="flex flex-col justify-center items-center mt-5 select-none md:mt-10 lg:mt-14">
                  <Avatar className="h-[46px] w-[46px] sm:h-20 sm:w-20 md:h-[68px] md:w-[68px]">
                    <AvatarImage
                      src={'/assets/images/testimonials/' + test.avatar}
                      className="object-cover"
                    />
                    <AvatarFallback>{test.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="font-bold text-xs sm:text-xl lg:text-[18px] mt-2">
                    {test.name}
                  </p>
                  <p className="font-light text-[9px] sm:text-base lg:text-[14px]">
                    {test.title}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* CAROUSEL CONTROLLER */}
          <div className="flex sm:hidden relative mt-4 h-10 w-full justify-center">
            <CarouselDots className="relative text-2xl" />
          </div>

          <CarouselPrevious className="hidden sm:inline-flex border border-primary sm:w-12 sm:h-12 md:w-[70px] md:h-[70px] ml-16" />
          <CarouselNext className="hidden sm:inline-flex border border-primary sm:w-12 sm:h-12 md:w-[70px] md:h-[70px] mr-16" />
        </Carousel>
      </Container>
    </section>
  );
}

function ChatBubbleWithText({ text, rate, active }: TestimonialProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const element = textRef.current;
      if (element) {
        setIsTextOverflowing(element.scrollHeight > element.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const starRate = Array.from({ length: 5 }, (_, i) => {
    if (i < rate) {
      return (
        <Image src={YellowStar} alt="yellow star" key={i} className="lg:p-1" />
      );
    } else {
      return (
        <Image src={WhiteStar} alt="yellow star" key={i} className="lg:p-1" />
      );
    }
  });

  return (
    <>
      {/* Mobile View Display */}
      <div className="relative sm:hidden h-24 p-5 bg-medium-dark-green border border-[#36FF90] rounded-xl w-full text-clip overflow-hidden">
        <div className="text-xs sm:text-base">{text}</div>
        {isTextOverflowing && (
          <div className="absolute bottom-0 pb-2 pt-14 bg-gradient-to-t from-medium-dark-green from-20% inset-x-5">
            <a
              href="/404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-base text-yellow-400 underline"
            >
              Read more
            </a>
          </div>
        )}
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
        <div
          ref={textRef}
          className="absolute top-16 mt-1 h-44 px-9 text-lg text-clip overflow-hidden lg:text-base lg:px-7 lg:h-1/3 xl:h-1/2"
        >
          {text}
        </div>
        {isTextOverflowing && (
          <div className="absolute bottom-14 pb-2 pt-28 bg-gradient-to-t from-medium-dark-green from-25% inset-x-9 lg:inset-x-7 lg:bottom-10">
            <a
              href="/404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B3B3B3] underline lg:text-xs"
            >
              Read more
            </a>
          </div>
        )}
      </div>
    </>
  );
}
