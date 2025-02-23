'use client';

import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from '@/app/components/ui/sheet';

import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from '@/app/components/ui/accordion';

interface redirectProps {
  href: string;
}

function redirectTo({ href }: redirectProps) {
  window.open(href, '_blank', 'noopener,noreferrer');
}

export default function MobileView() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-end items-center">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-primary" size={36} />
        </SheetTrigger>
        <SheetContent
          side={'right'}
          className="bg-gradient-utd-nav-transparent border-l-0 rounded-l-[50px] backdrop-blur-sm flex flex-col justify-center items-center !max-w-[256px] px-0 overflow-hidden py-[64px]"
        >
          <div className="flex flex-col justify-start items-center w-full max-h-[calc(100vh - 64px)] overflow-y-auto">
            <Button variant={'navLinkMobile'} onClick={() => router.push('/')}>
              Home
            </Button>
            <Button
              variant={'navLinkMobile'}
              onClick={() =>
                redirectTo({ href: 'https://www.meetup.com/durianpy/' })
              }
            >
              About
            </Button>
            <Button
              variant={'navLinkMobile'}
              onClick={() =>
                redirectTo({ href: 'https://www.meetup.com/durianpy/events/' })
              }
            >
              Events
            </Button>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="w-full [&[data-state=open]]:bg-saturated-light-green-opacity-50 [&[data-state=open]]:shadow-md p-0"
              >
                <AccordionTrigger className="w-full !text-dark-green font-semibold py-[min(36px,3vh)] rounded-[0px] hover:bg-saturated-light-green-opacity-50 [&[data-state=open]]:hover:shadow-none hover:shadow-md text-tabs-navbar">
                  Support Us
                </AccordionTrigger>
                <AccordionContent className="flex flex-col justify-center items-center !p-0">
                  <Button
                    variant={'accordion-dropdown'}
                    onClick={() => router.push('/404')}
                  >
                    Sponsors
                  </Button>
                  <Button
                    variant={'accordion-dropdown'}
                    onClick={() => router.push('/404')}
                  >
                    Host Us
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button
              variant={'navLinkMobile'}
              onClick={() => router.push('/404')}
            >
              SIGs
            </Button>
            <Button
              variant={'navLinkMobile'}
              onClick={() =>
                redirectTo({ href: 'https://forms.gle/x2cc6CrRhbhDeaxe9' })
              }
            >
              Speak
            </Button>
            <Button
              variant={'navLinkMobile'}
              onClick={() =>
                redirectTo({ href: 'https://www.facebook.com/durianpy' })
              }
            >
              Contact Us
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
