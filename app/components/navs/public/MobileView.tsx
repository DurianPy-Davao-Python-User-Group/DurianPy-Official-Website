'use client';

import { useRouter } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
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
          className="bg-gradient-utd-nav-transparent border-l-0 rounded-l-[50px] backdrop-blur-sm flex flex-col justify-center items-center !max-w-[256px] p-0 overflow-hidden"
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
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
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Button variant={'navLinkMobile'}>Support Us</Button>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col justify-center items-center">
                  <Button variant={'accordion-dropdown'}>Sponsors</Button>
                  <Button variant={'accordion-dropdown'}>Host Us</Button>
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
