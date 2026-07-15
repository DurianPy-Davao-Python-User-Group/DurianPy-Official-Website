import { useRouter } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

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
        <SheetTrigger aria-label="Open navigation menu">
          <Menu className="text-primary" size={36} />
        </SheetTrigger>
        <SheetContent
          side={'right'}
          className="bg-gradient-utd-nav-transparent border-l-0 rounded-l-[50px] backdrop-blur-sm flex flex-col justify-center items-center !max-w-[256px] px-0 overflow-hidden py-[64px]"
        >
          <div className="flex flex-col justify-start items-center w-full max-h-[calc(100vh - 64px)] overflow-y-auto">
            <Button variant={'navLinkMobile'} onClick={() => router.navigate({ to: '/' })}>
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
            <Button
              variant={'navLinkMobile'}
              onClick={() => router.navigate({ to: '/code-of-conduct' })}
            >
              Code of Conduct
            </Button>
            <Button
              variant={'navLinkMobile'}
              onClick={() => router.navigate({ to: '/speak' })}
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
