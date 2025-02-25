import { Container } from '../ui/container';
<<<<<<< HEAD
import dynamic from 'next/dynamic';
const PartnersDesktop = dynamic(() => import('../home/PartnersDesktop'));
const PartnersMobile = dynamic(() => import('../home/PartnersMobile'));

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
}
=======
import Image from 'next/image';
>>>>>>> 4d150cc7eeeb2571bd6404fe8aab2a22eaf54cae

export function Partners() {
  const partners: PartnersProps[] = [
    {
      name: 'ADDVentures',
      logo: '/partner-logos/addventures-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'DEVCON Davao',
      logo: '/partner-logos/devcon-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'IDEAS Davao',
      logo: '/partner-logos/ideas-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'ACCESS',
      logo: '/partner-logos/access-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'AWSUG Davao',
      logo: '/partner-logos/awsug-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'CSSEC',
      logo: '/partner-logos/cssec-logo.PNG',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'DICE',
      logo: '/partner-logos/dice-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'PizzaPy',
      logo: '/partner-logos/pizzapy-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'SAMAHAN',
      logo: '/partner-logos/samahan-logo.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
    {
      name: 'SPARCS',
      logo: '/partner-logos/sparcs-logo.PNG',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi fuga est illum vero sapiente facere? Quas itaque harum praesentium a ut nobis',
    },
  ];

  return (
    <section className="bg-[#102018] py-16">
      <Container>
<<<<<<< HEAD
        <section className="hidden xl:block">
          <PartnersDesktop partners={partners} />
        </section>
        <section className="xl:hidden">
          <PartnersMobile partners={partners} />
        </section>
=======
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-green-700 p-6 rounded-lg flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
>>>>>>> 4d150cc7eeeb2571bd6404fe8aab2a22eaf54cae
      </Container>
    </section>
  );
}
