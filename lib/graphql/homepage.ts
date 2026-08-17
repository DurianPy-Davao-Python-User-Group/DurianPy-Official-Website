/*
  For this not sure we need to have fallback data and also have the requests on their own separate file.
  we may do a more generalized approach to this and rename it from homepage.ts to cms.ts or something like that and have the requests for the other pages in there as well.
  for fallbacks we can have a separate file for that as well and import it here if ever we do need it.
*/
import { queryPayloadGraphQL } from '@/lib/client';
import { CMS_CACHE_TAGS, HOMEPAGE_CACHE_TAGS } from '@/lib/graphql/cache';
import { HOMEPAGE_QUERY } from '@/lib/graphql/queries';
import type {
  CmsEvent,
  CmsHomePageData,
  CmsPartner,
  CmsSponsor,
  HomePageQuery,
} from '@/lib/graphql/types';

type HomeDocs<T> = {
  docs?: T[] | null;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function isCmsEvent(value: unknown): value is CmsEvent {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const event = value as Partial<CmsEvent>;
  const hasValidDate =
    typeof event.date === 'string' ||
    (Array.isArray(event.date) && event.date.every(isNonEmptyString));

  return (
    isNonEmptyString(event.title) &&
    hasValidDate &&
    isNonEmptyString(event.location) &&
    isNonEmptyString(event.link)
  );
}

function isCmsPartner(value: unknown): value is CmsPartner {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const partner = value as Partial<CmsPartner>;
  return (
    isNonEmptyString(partner.name) &&
    isNonEmptyString(partner.logo) &&
    isNonEmptyString(partner.logoMobile) &&
    isNonEmptyString(partner.desc) &&
    isNonEmptyString(partner.url)
  );
}

function isCmsSponsor(value: unknown): value is CmsSponsor {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const sponsor = value as Partial<CmsSponsor>;
  return (
    isNonEmptyString(sponsor.name) &&
    isNonEmptyString(sponsor.logo) &&
    isNonEmptyString(sponsor.logoMobile) &&
    isNonEmptyString(sponsor.description) &&
    isNonEmptyString(sponsor.url)
  );
}

const FALLBACK_EVENTS: CmsEvent[] = [
  {
    title: 'PyCon Davao 2025',
    date: ['October 25, 2025', 'October 26, 2025'],
    location: 'Ateneo de Davao University',
    link: 'https://techtix.durianpy.org/pycon-davao-2025/register',
  },
];

const FALLBACK_PARTNERS: CmsPartner[] = [
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
    desc: 'Ateneo de Davao\'s startup incubator providing mentorship, resources, and support. Helping startups accelerate growth and innovation.',
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

const FALLBACK_SPONSORS: CmsSponsor[] = [
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

function readDocs<T>(
  source: HomeDocs<T> | null | undefined,
  fallback: T[],
  validator?: (value: unknown) => value is T
) {
  if (!source?.docs || source.docs.length === 0) {
    return fallback;
  }

  if (validator && !source.docs.every((entry) => validator(entry))) {
    return fallback;
  }

  return source.docs;
}

export async function getHomePageData(): Promise<CmsHomePageData> {
  const data = await queryPayloadGraphQL<HomePageQuery>({
    query: HOMEPAGE_QUERY,
    tags: HOMEPAGE_CACHE_TAGS,
    revalidate: 300,
  });

  const events = readDocs(data?.events, FALLBACK_EVENTS, isCmsEvent);
  const partners = readDocs(data?.partners, FALLBACK_PARTNERS, isCmsPartner);
  const sponsors = readDocs(data?.sponsors, FALLBACK_SPONSORS, isCmsSponsor);

  return {
    tags: [
      CMS_CACHE_TAGS.home,
      CMS_CACHE_TAGS.events,
      CMS_CACHE_TAGS.partners,
      CMS_CACHE_TAGS.sponsors,
    ],
    events,
    partners,
    sponsors,
  };
}
