import { Container } from '../ui/container';
import dynamic from 'next/dynamic';
const PartnersDesktop = dynamic(() => import('../home/PartnersDesktop'));
const PartnersMobile = dynamic(() => import('../home/PartnersMobile'));

interface PartnersProps {
  name: string;
  logo: string;
  logoMobile: string;
  desc: string;
  url: string;
}

export function Partners() {
  const partners: PartnersProps[] = [
    {
      name: 'PizzaPy',
      logo: '/partner-logos/pizzapy-logo.png',
      logoMobile: '/partner-logos/pizzapy-logo-mobile.png',
      desc: 'Based in Cebu, PizzaPy is a Python community for students and professionals. Sharing knowledge, skills, and passion for Python and technology.',
      url: 'https://www.pizzapy.ph/',
    },
    {
      name: 'DEVCON Davao',
      logo: '/partner-logos/devcon-logo.png',
      logoMobile: '/partner-logos/devcon-logo.png',
      desc: 'A non-profit IT community fostering mentorship, networking, and collaboration. A space for developers to connect and grow.',
      url: 'https://www.facebook.com/DevConDavao',
    },
    {
      name: 'PythonPH',
      logo: '/partner-logos/pythonph-logo.png',
      logoMobile: '/partner-logos/pythonph-logo.png',
      desc: 'PythonPH is a non-stock, non-profit, volunteer-run organization dedicated to support and facilitate the growth of the community of Python programmers in the Philippines',
      url: 'https://www.python.ph',
    },
    {
      name: 'IDEAS Davao',
      logo: '/partner-logos/ideas-logo.png',
      logoMobile: '/partner-logos/ideas-logo.png',
      desc: 'A startup support network improving incubation, mentoring, and funding. Creating opportunities for founders and innovators.',
      url: 'https://ideasdavao.org/',
    },
    {
      name: 'ADDVentures',
      logo: '/partner-logos/addventures-logo.png',
      logoMobile: '/partner-logos/addventures-logo.png',
      desc: 'Ateneo de Davao’s startup incubator providing mentorship, resources, and support. Helping startups accelerate growth and innovation.',
      url: 'https://www.facebook.com/profile.php?id=61565389521650',
    },
    {
      name: 'DICE',
      logo: '/partner-logos/dice-logo.png',
      logoMobile: '/partner-logos/dice-logo.png',
      desc: 'Davao Interschool Computer Enthusiasts (DICE), is a Davao-based initiative uniting student orgs to drive tech growth and collaboration.',
      url: 'https://dicedvo.org',
    },
    {
      name: 'AWSUG Davao',
      logo: '/partner-logos/awsug-logo.png',
      logoMobile: '/partner-logos/awsug-logo.png',
      desc: 'AWS User Group Davao promotes cloud innovation and professional growth. Empowering individuals through knowledge, networking, and skills.',
      url: 'https://www.facebook.com/awsugdavao',
    },
  ];

  return (
    <section className="bg-[#112018] py-16 font-montserrat lg:mb-[-90px] md:mb-[-70px] sm:mb-0">
      <Container>
        {/* Desktop View (768px and up) */}
        <section className="hidden md:block">
          <PartnersDesktop partners={partners} />
        </section>

        {/* Mobile View (Below 768px) */}
        <section className="md:hidden">
          <PartnersMobile partners={partners} />
        </section>
      </Container>
    </section>
  );
}
