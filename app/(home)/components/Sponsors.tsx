import { Container } from '@/components/ui/container';
import dynamic from 'next/dynamic';
const SponsorsDesktop = dynamic(() => import('./SponsorsDesktop'));
const SponsorsMobile = dynamic(() => import('./SponsorsMobile'));

interface SponsorshipProps {
  name: string;
  logo: string;
  logoMobile: string;
  description: string;
  url: string;
}

export function Sponsors() {
  const sponsors: SponsorshipProps[] = [
    {
      name: 'Mugna Tech',
      logo: '/sponsor-logos/mugna-logo.png',
      logoMobile: '/sponsor-logos/mugna-logo.png',
      description:
        'Mugna Tech specializes in Web, Software, and Mobile Development, UI/UX Design, and more, with 75+ projects for diverse businesses.',
      url: 'https://mugna.tech',
    },
    {
      name: 'Codev',
      logo: '/sponsor-logos/codev-logo.png',
      logoMobile: '/sponsor-logos/codev-logo.png',
      description:
        'Hire top offshore developers with CoDev—skilled professionals dedicated to your success.',
      url: 'https://codev.com',
    },
    {
      name: 'Ingenuity Software',
      logo: '/sponsor-logos/ingenuity-logo.png',
      logoMobile: '/sponsor-logos/ingenuity-logo-mobile.png',
      description:
        'Ingenuity Software is a Davao-based software development company that turns ideas into impactful digital solutions. ',
      url: 'https://ingenuity.ph',
    },
    {
      name: 'PythonPH',
      logo: '/sponsor-logos/pythonph-logo.png',
      logoMobile: '/sponsor-logos/pythonph-logo-mobile.png',
      description:
        'Python Philippines is a volunteer-run non-profit supporting the growth of the Python community in the country.',
      url: 'https://python.ph',
    },
    {
      name: 'Stace',
      logo: '/sponsor-logos/stace-logo.svg',
      logoMobile: '/sponsor-logos/stace-logo.svg',
      description:
        'Stace is a comprehensive platform designed to enhance and simplify the rental experience for both renters and landlords.',
      url: 'https://www.stace.app',
    },
  ];

  return (
    <section className="bg-[#112018] py-16 font-montserrat lg:mb-[-90px] md:mb-[-70px] sm:mb-0">
      <Container className="overflow-x-clip">
        {/* Desktop View (768px and up) */}
        <section className="hidden md:block">
          <SponsorsDesktop sponsors={sponsors} />
        </section>

        {/* Mobile View (Below 768px) */}
        <section className="md:hidden">
          <SponsorsMobile sponsors={sponsors} />
        </section>
      </Container>
    </section>
  );
}
