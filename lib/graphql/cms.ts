import { queryPayloadGraphQL } from '@/lib/client';
import { CMS_CACHE_TAGS } from '@/lib/graphql/cache';
import {
  FALLBACK_CAROUSEL,
  FALLBACK_CODE_OF_CONDUCT,
  FALLBACK_CTA,
  FALLBACK_EVENTS,
  FALLBACK_PARTNERS,
  FALLBACK_SIGS,
  FALLBACK_SPONSORS,
} from '@/lib/graphql/fallbacks';
import { CODE_OF_CONDUCT_QUERY, HOMEPAGE_QUERY, STATISTICS_QUERY, SIGS_QUERY } from '@/lib/graphql/queries';
import type {
  CarouselData,
  CtaCardData,
  CmsCtaCard,
  CmsCarousel,
  CmsCodeOfConductData,
  CmsEvent,
  CmsHomepageConfig,
  CmsHomePageData,
  CmsOrganizationStatus,
  CmsPartner,
  CmsSigDoc,
  CmsSponsor,
  CodeOfConductQuery,
  HomePageQuery,
  SigsQuery,
} from '@/lib/graphql/types';

const FALLBACK_HOME_HERO_CONFIG = {
  heroTitle: 'DurianPy',
  heroSubtitle: "Accelerating Davao's Tech Growth with Python",
  heroImageDesktop: '/assets/logo.svg',
  heroImageDesktopAlt: 'Durianpy Logo',
  heroImageMobile: '/assets/logo.svg',
  heroImageMobileAlt: 'Durianpy Logo',
} as const;

type DocsEnvelope<T> = {
  docs?: T[] | null;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function readDocs<T>(
  source: DocsEnvelope<T> | null | undefined,
  fallback: T[],
) {
  if (!source?.docs || source.docs.length === 0) {
    return fallback;
  }
  return source.docs;
}

export async function getHomePageData(): Promise<CmsHomePageData> {
  const data = await queryPayloadGraphQL<HomePageQuery>({
    query: HOMEPAGE_QUERY,
  });

  const rawEvents = readDocs(
    data?.events,
    FALLBACK_EVENTS as unknown as Parameters<typeof readDocs>[1]
  ) as unknown as CmsEvent[];
  const rawPartners = readDocs(
    data?.partners,
    FALLBACK_PARTNERS as unknown as Parameters<typeof readDocs>[1]
  ) as unknown as CmsPartner[];
  const rawSponsors = readDocs(
    data?.sponsors,
    FALLBACK_SPONSORS as unknown as Parameters<typeof readDocs>[1]
  ) as unknown as CmsSponsor[];
  const rawCarousel: CmsCarousel = data?.carousel || ({} as CmsCarousel);
  const rawConfig: CmsHomepageConfig = data?.config || ({} as CmsHomepageConfig);

  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://127.0.0.1:3000';
  const mediaVersion =
    process.env.VERCEL_URL ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    'development';

  const proxyCmsImage = (urlPath: string) => {
    const sourceUrl = new URL(urlPath, cmsBaseUrl).href;
    return `/api/cms-image?url=${encodeURIComponent(sourceUrl)}&v=${encodeURIComponent(mediaVersion)}`;
  };

  const rawOrganizationStatus = data?.organizationStatus || ({} as CmsOrganizationStatus);
  const config = {
    heroTitle: rawConfig.heroTitle || FALLBACK_HOME_HERO_CONFIG.heroTitle,
    heroSubtitle: rawConfig.heroSubtitle || FALLBACK_HOME_HERO_CONFIG.heroSubtitle,
    heroImageDesktop: rawConfig.heroImageDesktop?.url
      ? proxyCmsImage(rawConfig.heroImageDesktop.url)
      : FALLBACK_HOME_HERO_CONFIG.heroImageDesktop,
    heroImageDesktopAlt:
      rawConfig.heroImageDesktop?.alt || FALLBACK_HOME_HERO_CONFIG.heroImageDesktopAlt,
    heroImageMobile: rawConfig.heroImageMobile?.url
      ? proxyCmsImage(rawConfig.heroImageMobile.url)
      : FALLBACK_HOME_HERO_CONFIG.heroImageMobile,
    heroImageMobileAlt:
      rawConfig.heroImageMobile?.alt || FALLBACK_HOME_HERO_CONFIG.heroImageMobileAlt,
  };

  const organizationStatus: CmsOrganizationStatus = {
    ...rawOrganizationStatus,
    psfPartnerLogo: {
      ...rawOrganizationStatus.psfPartnerLogo,
      url: rawOrganizationStatus.psfPartnerLogo?.url
        ? proxyCmsImage(rawOrganizationStatus.psfPartnerLogo.url)
        : undefined,
    },
  };

  const carouselPhotos = rawCarousel.photos
    ?.map((photo) => {
      const imageUrl = photo.image?.url;

      if (!imageUrl) {
        return null;
      }

      return {
        name: photo.image?.alt || photo.id || 'Community photo',
        image: proxyCmsImage(imageUrl),
      };
    })
    .filter((photo): photo is CarouselData['photos'][number] => photo !== null);

  const carousel: CarouselData = {
    photos: carouselPhotos?.length ? carouselPhotos : FALLBACK_CAROUSEL.photos,
  };

  const ctaCards = data?.cta?.cards
    ?.map((card: CmsCtaCard): CtaCardData | null => {
      if (!card.link || !card.whiteText || !card.yellowText || !card.icon?.url) {
        return null;
      }

      return {
        link: card.link,
        whiteText: card.whiteText,
        yellowText: card.yellowText,
        icon: proxyCmsImage(card.icon.url),
        iconAlt: card.icon.alt || `${card.whiteText} ${card.yellowText}`,
      };
    })
    .filter((card): card is CtaCardData => card !== null);

  const partners = rawPartners.map((p) => {
    const pData = (p as unknown) as Record<string, unknown>;
    const logoData = pData.logo as { url?: string } | undefined;
    const logoMobileData = pData.logoMobile as { url?: string } | undefined;
    
    return {
      ...p,
      desc: (pData.description as string) || (pData.desc as string) || '', 
      logo: logoData?.url
        ? proxyCmsImage(logoData.url)
        : (typeof pData.logo === 'string' ? pData.logo : ''),
      logoMobile: logoMobileData?.url
        ? proxyCmsImage(logoMobileData.url)
        : (typeof pData.logoMobile === 'string' ? pData.logoMobile : undefined),
    };
  }) as CmsPartner[];

  const sponsors = rawSponsors.map((s) => {
    const sData = (s as unknown) as Record<string, unknown>;
    const logoData = sData.logo as { url?: string } | undefined;
    const logoMobileData = sData.logoMobile as { url?: string } | undefined;
    const fallbackLogo = typeof sData.logo === 'string' ? sData.logo : '';

    return {
      ...s,
      logo: logoData?.url ? proxyCmsImage(logoData.url) : fallbackLogo,
      logoMobile: logoMobileData?.url
        ? proxyCmsImage(logoMobileData.url)
        : (typeof sData.logoMobile === 'string' ? sData.logoMobile : fallbackLogo),
    };
  }) as CmsSponsor[];

  return {
    tags: [
      CMS_CACHE_TAGS.home,
      CMS_CACHE_TAGS.events,
      CMS_CACHE_TAGS.partners,
      CMS_CACHE_TAGS.sponsors,
    ],
    config,
    events: rawEvents,
    partners,
    sponsors,
    carousel,
    organizationStatus,
    cta: ctaCards?.length ? ctaCards : FALLBACK_CTA,
  };
}

export async function getCodeOfConductData(): Promise<CmsCodeOfConductData> {
  const data = await queryPayloadGraphQL<CodeOfConductQuery>({
    query: CODE_OF_CONDUCT_QUERY,
  });

  const cmsEntry = data?.DurianpyWebsiteCodeOfConduct;
  const reportFormUrl = isNonEmptyString(cmsEntry?.reportFormUrl)
    ? cmsEntry.reportFormUrl
    : FALLBACK_CODE_OF_CONDUCT.reportFormUrl;

  return {
    reportFormUrl,
    root: cmsEntry?.root?.root || FALLBACK_CODE_OF_CONDUCT.root,
  };
}


export type CmsStatistic = {
  label: string;
  value: number;
  large?: boolean | null;
};

type StatisticsQueryResponse = {
  DurianpyWebsiteStatisticsConfig: {
    metrics: CmsStatistic[] | null;
  };
};

export async function getStatisticsData(): Promise<CmsStatistic[]> {
  const data = await queryPayloadGraphQL<StatisticsQueryResponse>({
    query: STATISTICS_QUERY,
  });

  const metrics = data?.DurianpyWebsiteStatisticsConfig?.metrics;

  // If the CMS is empty or un-published, return a safe fallback
  if (!metrics || metrics.length === 0) {
    return [
      { label: 'Community Members', value: 100 },
      { label: 'Events Hosted', value: 5 },
    ];
  }

  return metrics;
}

export async function getSigsData(): Promise<CmsSigDoc[]> {
  const data = await queryPayloadGraphQL<SigsQuery>({
    query: SIGS_QUERY,
  });
  const sigs = readDocs(
    data?.DurianpyWebsiteSigs,
    FALLBACK_SIGS,
  ) as CmsSigDoc[];
  const cmsBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://127.0.0.1:3000';
  const mediaVersion =
    process.env.VERCEL_URL ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    'development';

  return sigs.map((sig) => {
    if (!sig.icon?.url) {
      return sig;
    }

    const sourceUrl = new URL(sig.icon.url, cmsBaseUrl).href;


    return {
      ...sig,
      icon: {
        ...sig.icon,
        url: `/api/cms-image?url=${encodeURIComponent(sourceUrl)}&v=${encodeURIComponent(mediaVersion)}`,
      },
    };
  });
}
