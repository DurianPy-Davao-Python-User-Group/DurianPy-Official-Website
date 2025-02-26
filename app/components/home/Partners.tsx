import { Container } from '../ui/container';
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
    {
      name: 'PizzaPy',
      logo: '/partner-logos/pizzapy-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'DEVCON Davao',
      logo: '/partner-logos/devcon-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'PythonPH',
      logo: '/partner-logos/pythonph-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'IDEAS Davao',
      logo: '/partner-logos/ideas-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'ADDVentures',
      logo: '/partner-logos/addventures-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'DICE',
      logo: '/partner-logos/dice-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'AWSUG Davao',
      logo: '/partner-logos/awsug-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
  ];
  return (
    <section className="bg-[#112018] py-16 font-montserrat">
      <Container>
        <section className="hidden lg:block">
          <PartnersDesktop partners={partners} />
        </section>
        <section className="lg:hidden">
          <PartnersMobile partners={partners} />
        </section>
      </Container>
    </section>
  );
}
