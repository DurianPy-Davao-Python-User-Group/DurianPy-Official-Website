import { Container } from '../ui/Container';
import dynamic from 'next/dynamic';
const PartnersDesktop = dynamic(() => import('../home/PartnersDesktop'));
const PartnersMobile = dynamic(() => import('../home/PartnersMobile'));

interface PartnersProps {
  name: string;
  logo: string;
}

export function Partners() {
  const partners: PartnersProps[] = [
    { name: 'PizzaPy', logo: '/pizzapy-logo.svg' },
    { name: 'DevCon', logo: '/devcon-logo.svg' },
    { name: 'Google', logo: '/google-logo.svg' },
  ];

  return (
    <section className="bg-green-800 py-16">
      <Container>
        <section className="hidden xl:block">
          <PartnersDesktop partners={partners} />
        </section>
        <section className="xl:hidden">
          <PartnersMobile partners={partners} />
        </section>
      </Container>
    </section>
  );
}
