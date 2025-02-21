import { Container } from '../ui/Container';
import dynamic from 'next/dynamic';
const PartnersDesktop = dynamic(() => import('../home/PartnersDesktop'));
const PartnersMobile = dynamic(() => import('../home/PartnersMobile'));

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
}

export function Partners() {
  const partners: PartnersProps[] = [
    { name: 'ADDVentures', logo: '/partner-logos/addventures-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'DEVCON Davao', logo: '/partner-logos/devcon-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'IDEAS Davao', logo: '/partner-logos/ideas-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'ACCESS', logo: '/partner-logos/access-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'AWSUG Davao', logo: '/partner-logos/awsug-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'CSSEC', logo: '/partner-logos/cssec-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'DICE', logo: '/partner-logos/dice-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'PizzaPy', logo: '/partner-logos/pizzapy-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'SAMAHAN', logo: '/partner-logos/samahan-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
    { name: 'SPARCS', logo: '/partner-logos/sparcs-logo.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis' },
  ];

  return (
    <section className="bg-[#102018] py-16">
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
