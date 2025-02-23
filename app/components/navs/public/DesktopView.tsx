'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../ui/button';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/app/components/ui/dropdown-menu';

interface redirectProps {
  href: string;
}

function redirectTo({ href }: redirectProps) {
  window.open(href, '_blank', 'noopener,noreferrer');
}

export default function DesktopView() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center text-tabs-navbar text-white w-full">
      <Button variant={'navLink'} onClick={() => router.push('/')}>
        Home
      </Button>
      <Button
        variant={'navLink'}
        onClick={() => redirectTo({ href: 'https://www.meetup.com/durianpy/' })}
      >
        About
      </Button>
      <Button
        variant={'navLink'}
        onClick={() =>
          redirectTo({ href: 'https://www.meetup.com/durianpy/events/' })
        }
      >
        Events
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center outline-none focus:outline-none">
          <Button variant={'dropdown'}>
            Support Us <ChevronDown strokeWidth={2} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-[144px] rounded-[20px] border-[1px] border-primary p-0 bg-transparent backdrop-blur-sm">
          <Button variant={'dropdown-item'} onClick={() => router.push('/404')}>
            Sponsors
          </Button>
          <Button variant={'dropdown-item'} onClick={() => router.push('/404')}>
            Host Us
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant={'navLink'}
        onClick={() =>
          redirectTo({ href: 'https://forms.gle/x2cc6CrRhbhDeaxe9' })
        }
      >
        Speak
      </Button>
      <Button variant={'navLink'} onClick={() => router.push('/404')}>
        SIGs
      </Button>
      <Button
        variant={'navLink'}
        onClick={() =>
          redirectTo({ href: 'https://www.facebook.com/durianpy' })
        }
      >
        Contact Us
      </Button>
    </div>
  );
}
