import { useRouter, useLocation } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

interface redirectProps {
  href: string;
}

function redirectTo({ href }: redirectProps) {
  window.open(href, '_blank', 'noopener,noreferrer');
}

export default function DesktopView() {
  const router = useRouter();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex justify-between items-center text-tabs-navbar text-white w-full">
      <Button
        variant={'navLink'}
        onClick={() => router.navigate({ to: '/' })}
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
      <Button
        variant={'navLink'}
        onClick={() => router.navigate({ to: '/speak' })}
        className={`${pathname === '/speak' ? 'text-primary border-primary' : ''}`}
      >
        Speak
      </Button>
      <Button
        variant={'navLink'}
        onClick={() => router.navigate({ to: '/code-of-conduct' })}
        className={`${pathname === '/code-of-conduct' ? 'text-primary border-primary' : ''}`}
      >
        Code of Conduct
      </Button>
      <Button
        variant={'navLink'}
        onClick={() => router.navigate({ to: '/contact' })}
        className={`${pathname === '/contact' ? 'text-primary border-primary' : ''}`}
      >
        Contact Us
      </Button>
    </div>
  );
}
