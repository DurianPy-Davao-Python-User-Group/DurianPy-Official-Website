'use client';

import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';

interface redirectProps {
  href: string;
}

function redirectTo({ href }: redirectProps) {
  window.location.href = href;
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
                  <ChevronDown className="h-8 w-8 shrink-50 transition-transform duration-200" />
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

            {/* <Button
              variant={'navLinkMobile'}
              onClick={() => redirectTo({ href: '/sigs' })}
            >
              SIGs
            </Button> */}
            <Button
              variant={'navLinkMobile'}
              onClick={() => router.push('/code-of-conduct')}
            >
              Code of Conduct
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
