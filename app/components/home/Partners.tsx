import { Container } from '../ui/container';
import dynamic from 'next/dynamic';
const PartnersDesktop = dynamic(() => import('../home/PartnersDesktop'));
const PartnersMobile = dynamic(() => import('../home/PartnersMobile'));

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
  link: string;
}

export function Partners() {
  const partners: PartnersProps[] = [
    {
      name: 'ADDVentures',
      logo: '/partner-logos/addventures-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://www.facebook.com/profile.php?id=61565389521650',
    },
    {
      name: 'DEVCON Davao',
      logo: '/partner-logos/devcon-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://devcon.ph/davao/',
    },
    {
      name: 'IDEAS Davao',
      logo: '/partner-logos/ideas-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://ideasdavao.org/',
    },
    {
      name: 'ACCESS',
      logo: '/partner-logos/access-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://www.facebook.com/ateneoaccess/',
    },
    {
      name: 'AWSUG Davao',
      logo: '/partner-logos/awsug-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://www.facebook.com/awsugdavao',
    },
    {
      name: 'CSSEC',
      logo: '/partner-logos/cssec-logo.PNG',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://www.facebook.com/addu.cs',
    },
    {
      name: 'DICE',
      logo: '/partner-logos/dice-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://dicedvo.org',
    },
    {
      name: 'PizzaPy',
      logo: '/partner-logos/pizzapy-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://www.pizzapy.ph/',
    },
    {
      name: 'SAMAHAN',
      logo: '/partner-logos/samahan-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://www.facebook.com/SAMAHANSysDev',
    },
    {
      name: 'SPARCS',
      logo: '/partner-logos/sparcs-logo.PNG',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
      link: 'https://www.facebook.com/SPARCSUPMin',
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
