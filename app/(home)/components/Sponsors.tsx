import { Container } from '@/components/ui/container';
import dynamic from 'next/dynamic';
const SponsorsDesktop = dynamic(() => import('./SponsorsDesktop'));
// const SponsorsMobile = dynamic(() => import("./SponsorsMobile"));

interface SponsorshipProps {
  name: string;
  logo: string;
  logoMobile: string;
  testimonial: string;
  url: string;
}

export function Sponsors() {
  const sponsors: SponsorshipProps[] = [
    {
      name: 'Mugna Tech',
      logo: '/sponsor-logos/mugna-logo.png',
      logoMobile: '/sponsor-logos/mugna-logo.png',
      testimonial:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, quas possimus. Vitae, officia quia. Doloribus saepe',
      url: 'https://mugna.tech',
    },
    {
      name: 'Codev',
      logo: '/sponsor-logos/codev-logo.png',
      logoMobile: '/sponsor-logos/codev-logo.png',
      testimonial:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, quas possimus. Vitae, officia quia. Doloribus saepe',
      url: 'https://codev.com',
    },
    {
      name: 'Ingenuity Software',
      logo: '/sponsor-logos/ingenuity-logo.png',
      logoMobile: '/sponsor-logos/ingenuity-logo-mobile.png',
      testimonial:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, quas possimus. Vitae, officia quia. Doloribus saepe',
      url: 'https://ingenuity.ph',
    },
    {
      name: 'PythonPH',
      logo: '/sponsor-logos/pythonph-logo.png',
      logoMobile: '/sponsor-logos/pythonph-logo-mobile.png',
      testimonial:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, quas possimus. Vitae, officia quia. Doloribus saepe',
      url: 'https://python.ph',
    },
    {
      name: 'Stace',
      logo: '/sponsor-logos/stace-logo.svg',
      logoMobile: '/sponsor-logos/stace-logo.svg',
      testimonial:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, quas possimus. Vitae, officia quia. Doloribus saepe',
      url: 'https://www.stace.app',
    },
  ];

  return (
    <section className="bg-[#112018] py-16 font-montserrat lg:mb-[-90px] md:mb-[-70px] sm:mb-0">
      <Container>
        {/* Desktop View (768px and up) */}
        <section className="hidden md:block">
          <SponsorsDesktop sponsors={sponsors} />
        </section>

        {/* Mobile View (Below 768px) */}
        {/* <section className="md:hidden">
                    <SponsorsMobile sponsors={sponsors} />
                </section> */}
      </Container>
    </section>
  );
}
