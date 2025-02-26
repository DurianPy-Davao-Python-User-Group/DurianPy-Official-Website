import { Container } from '../ui/container';
import dynamic from 'next/dynamic';
const PartnersDesktop = dynamic(() => import('../home/PartnersDesktop'));
const PartnersMobile = dynamic(() => import('../home/PartnersMobile'));

interface PartnersProps {
  name: string;
  logo: string;
  desc: string;
  url: string;
}

export function Partners() {
  const partners: PartnersProps[] = [
    {
      name: 'PizzaPy',
      logo: '/partner-logos/pizzapy-logo.png',
      desc: 'PizzaPy is a volunteer-run group of Cebu Pythonistas: developers, testers, or individuals into the use of the Python programming language.',
      url: 'https://www.pizzapy.ph/'
    },
    {
      name: 'DEVCON Davao',
      logo: '/partner-logos/devcon-logo.png',
      desc: 'DEVCON is a non-stock, non-proﬁt organization which aims to promote the "IT Pinoy Talent" mainly by providing a unique venue for IT educators and students, IT professionals and IT enthusiasts to sync, support and succeed.',
      url: 'https://www.facebook.com/devcondavao'
    },
    {
      name: 'PythonPH',
      logo: '/partner-logos/pythonph-logo.png',
      desc: 'PythonPH is a non-stock, non-profit, volunteer-run organization dedicated to support and facilitate the growth of the community of Python programmers in the Philippines',
      url: 'https://www.pizzapy.ph'
    },
    {
      name: 'IDEAS Davao',
      logo: '/partner-logos/ideas-logo.png',
      desc: 'Innovation and Development Accelerators Consortium for Startups in Region XI (IDEAS-REGION XI)',
      url: 'https://www.facebook.com/ideasdavao'
    },
    {
      name: 'ADDVentures',
      logo: '/partner-logos/addventures-logo.png',
      desc: 'ADDVentures Technohub is a technology business incubator of Ateneo de Davao University that provides mentorship, resources and support to accelerate the growth of startups',
      url: 'https://www.facebook.com/profile.php?id=61565389521650'
    },
    {
      name: 'DICE',
      logo: '/partner-logos/dice-logo.png',
      desc: '🌟 Welcome to the DICE Collaborative! 🚀Empowering Davao\'s tech enthusiast & innovator groups.🖥️',
      url: 'https://www.facebook.com/dice.dvo'
    },
    {
      name: 'AWSUG Davao',
      logo: '/partner-logos/awsug-logo.png',
      desc: 'Pag-abante sa teknolohiya sa AWS ug cloud computing sa mga Pilipino!',
      url: 'https://www.facebook.com/awsugdavao'
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
