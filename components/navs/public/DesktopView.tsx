'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';

interface redirectProps {
  href: string;
}

function redirectTo({ href }: redirectProps) {
  window.open(href, '_blank', 'noopener,noreferrer');
}

export default function DesktopView() {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center text-tabs-navbar text-white w-full">
      <Button
        variant={'navLink'}
        onClick={() => router.push('/')}
        className={`${pathname === '/' ? 'text-primary border-primary' : ''}`}
      >
        Home
      </Button>
      <Button
        variant={'navLink'}
        onClick={() => redirectTo({ href: 'https://www.meetup.com/durianpy/' })}
        className={`${pathname === '/about' ? 'text-primary border-primary' : ''}`}
      >
        About
      </Button>
      <Button
        variant={'navLink'}
        onClick={() =>
          redirectTo({ href: 'https://www.meetup.com/durianpy/events/' })
        }
        className={`${pathname === '/events' ? 'text-primary border-primary' : ''}`}
      >
        Events
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`${pathname === '/sponsors' || pathname === '/host' ? 'text-primary border-primary' : ''} flex [&[data-state=open]]:bg-primary [&[data-state=open]]:text-dark-green justify-center items-center outline-none gap-[10px] focus:outline-none p-[10px] border-[1px] rounded-[50px] border-transparent hover:text-primary active:border-primary active:bg-primary active:text-dark-green`}
        >
          Support Us{' '}
          <ChevronDown strokeWidth={1.5} className="h-6 w-6 shrink-0" />
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
        className={`${pathname === '/speak' ? 'text-primary border-primary' : ''}`}
      >
        Speak
      </Button>
      {/* <Button
        variant={'navLink'}
        onClick={() => redirectTo({ href: '/sigs' })}
        className={`${pathname === '/sigs' ? 'text-primary border-primary' : ''}`}
      >
        SIGs
      </Button> */}
      <Button
        variant={'navLink'}
        onClick={() => router.push('/code-of-conduct')}
        className={`${pathname === '/code-of-conduct' ? 'text-primary border-primary' : ''}`}
      >
        Code of Conduct
      </Button>
      <Button
        variant={'navLink'}
        onClick={() => router.push('/contact')}
        className={`${pathname === '/contact' ? 'text-primary border-primary' : ''}`}
      >
        Contact Us
      </Button>
    </div>
  );
}
