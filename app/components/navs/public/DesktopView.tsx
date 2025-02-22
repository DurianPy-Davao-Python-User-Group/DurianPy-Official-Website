'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../ui/button';

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
      <Button variant={'dropdown'}>Support Us</Button>
      <Button
        variant={'navLink'}
        onClick={() =>
          redirectTo({ href: 'https://www.meetup.com/durianpy/events/' })
        }
      >
        Events
      </Button>
      <Button
        variant={'navLink'}
        onClick={() =>
          redirectTo({ href: 'https://forms.gle/x2cc6CrRhbhDeaxe9' })
        }
      >
        Speak
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
