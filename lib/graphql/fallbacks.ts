import type {
  CarouselData,
  CtaCardData,
  CmsCodeOfConductData,
  CmsEvent,
  CmsPartner,
  CmsSigDoc,
  CmsSponsor,
} from '@/lib/graphql/types';

export const FALLBACK_CTA: CtaCardData[] = [
  {
    link: 'https://www.meetup.com/durianpy/',
    whiteText: 'Join Our',
    yellowText: 'Community',
    icon: '/assets/ctaIcons/join-our-community.svg',
    iconAlt: 'Join our community',
  },
  {
    link: 'https://www.meetup.com/durianpy/events/',
    whiteText: 'Attend',
    yellowText: 'Events',
    icon: '/assets/ctaIcons/attend-events.svg',
    iconAlt: 'Attend events',
  },
  {
    link: 'https://forms.gle/x2cc6CrRhbhDeaxe9',
    whiteText: 'Give a',
    yellowText: 'Talk',
    icon: '/assets/ctaIcons/give-a-talk.svg',
    iconAlt: 'Give a talk',
  },
];

export const FALLBACK_EVENTS: CmsEvent[] = [
  {
    title: 'PyCon Davao 2025',
    date: ['October 25, 2025', 'October 26, 2025'],
    location: 'Ateneo de Davao University',
    link: 'https://techtix.durianpy.org/pycon-davao-2025/register',
  },
];

export const FALLBACK_CAROUSEL: CarouselData = {
  photos: [
    { name: 'pyconf 2024', image: '/assets/carousel/1.png' },
    { name: 'meetup #1', image: '/assets/carousel/2.png' },
    { name: 'meetup #2', image: '/assets/carousel/3.png' },
    { name: 'meetup #3', image: '/assets/carousel/4.png' },
  ],
};

export const FALLBACK_PARTNERS: CmsPartner[] = [
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
    desc: "Ateneo de Davao's startup incubator providing mentorship, resources, and support. Helping startups accelerate growth and innovation.",
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

export const FALLBACK_SPONSORS: CmsSponsor[] = [
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
      'Hire top offshore developers with CoDev-skilled professionals dedicated to your success.',
    url: 'https://codev.com',
  },
  {
    name: 'Ingenuity Software',
    logo: '/sponsor-logos/ingenuity-logo.png',
    logoMobile: '/sponsor-logos/ingenuity-logo-mobile.png',
    description:
      'Ingenuity Software is a Davao-based software development company that turns ideas into impactful digital solutions.',
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

export const FALLBACK_SIGS: CmsSigDoc[] = [
  {
    title: 'Data',
    icon: {
      url: '/assets/sigsIcons/Group125.png',
      alt: 'Data SIG',
    },
  },
  {
    title: 'Backend',
    icon: {
      url: '/assets/sigsIcons/Group122.png',
      alt: 'Backend SIG',
    },
  },
];

export const FALLBACK_CODE_OF_CONDUCT: CmsCodeOfConductData = {
  reportFormUrl:
    process.env.NEXT_PUBLIC_COC_REPORT_FORM_URL ??
    'https://forms.gle/R4MXsc2brwHEmgrE7',
  root: {
    type: 'root',
    version: 1,
    children: [
      {
        type: 'heading',
        version: 1,
        tag: 'h2',
        children: [
          {
            type: 'text',
            version: 1,
            text: 'We value respect and inclusivity in all events.',
            detail: 0,
            mode: 'normal',
            style: '',
            format: 0,
          },
        ],
      },
      {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: 'The Python community is made up of members from around the globe with a diverse set of skills, personalities, and experiences. It is through these differences that our community experiences great successes and continued growth.',
            detail: 0,
            mode: 'normal',
            style: '',
            format: 0,
          },
        ],
      },
      {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: 'To clarify our expectations, all participants, including attendees, speakers, exhibitors, organizers, and volunteers at any DurianPy event, must adhere to the Python Software Foundation ',
            detail: 0,
            mode: 'normal',
            style: '',
            format: 0,
          },
          {
            type: 'link',
            version: 3,
            id: 'fallback-code-of-conduct',
            fields: {
              linkType: 'custom',
              newTab: true,
              url: 'https://policies.python.org/python.org/code-of-conduct/',
            },
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Code of Conduct',
                detail: 0,
                mode: 'normal',
                style: '',
                format: 0,
              },
            ],
          },
          {
            type: 'text',
            version: 1,
            text: '.',
            detail: 0,
            mode: 'normal',
            style: '',
            format: 0,
          },
        ],
      },
      {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: 'If you witness or experience any violations of the Code of Conduct, please report them using the ',
            detail: 0,
            mode: 'normal',
            style: '',
            format: 0,
          },
          {
            type: 'link',
            version: 3,
            id: 'fallback-report-form',
            fields: {
              linkType: 'custom',
              newTab: true,
              url:
                process.env.NEXT_PUBLIC_COC_REPORT_FORM_URL ??
                'https://forms.gle/R4MXsc2brwHEmgrE7',
            },
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Code of Conduct Report Form',
                detail: 0,
                mode: 'normal',
                style: '',
                format: 0,
              },
            ],
          },
          {
            type: 'text',
            version: 1,
            text: '.',
            detail: 0,
            mode: 'normal',
            style: '',
            format: 0,
          },
        ],
      },
    ],
  },
};
