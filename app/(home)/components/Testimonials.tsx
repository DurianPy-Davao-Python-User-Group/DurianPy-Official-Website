'use client';

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import Link from 'next/link';


export function Testimonials() {
  return (
    <section className="relative z-10 text-white py-12 sm:py-16">
      <Container>
        {/* Combined container: Ratings + Button */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Logo & Ratings */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl">
            <div className="flex items-center gap-4">
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
      </Container>
    </section>
  );
}
