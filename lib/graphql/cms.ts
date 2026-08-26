import { queryPayloadGraphQL } from '@/lib/client';
import {
  CMS_CACHE_TAGS,
  CODE_OF_CONDUCT_CACHE_TAGS,
  HOMEPAGE_CACHE_TAGS,
} from '@/lib/graphql/cache';
import {
  FALLBACK_CODE_OF_CONDUCT,
  FALLBACK_EVENTS,
  FALLBACK_PARTNERS,
  FALLBACK_SPONSORS,
} from '@/lib/graphql/fallbacks';
import { CODE_OF_CONDUCT_QUERY, HOMEPAGE_QUERY, STATISTICS_QUERY } from '@/lib/graphql/queries';
import type {
  CmsCodeOfConductData,
  CmsEvent,
  CmsHomePageData,
  CmsPartner,
  CmsSponsor,
  CodeOfConductQuery,
  HomePageQuery,
} from '@/lib/graphql/types';

type DocsEnvelope<T> = {
  docs?: T[] | null;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isNonEmptyString);
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
  // Name and logo are the only strictly required fields in the new CMS schema
  return (
    isNonEmptyString(partner.name) &&
    typeof partner.logo !== 'undefined'
  );
}

function isCmsSponsor(value: unknown): value is CmsSponsor {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const sponsor = value as Partial<CmsSponsor>;
  // Name and logo are the only strictly required fields in the new CMS schema
  return (
    isNonEmptyString(sponsor.name) &&
    typeof sponsor.logo !== 'undefined'
  );
}

function readDocs<T>(
  source: DocsEnvelope<T> | null | undefined,
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

function normalizeCodeOfConductContent(content: unknown): string[] {
  if (isStringArray(content)) {
    return content;
  }

  if (isNonEmptyString(content)) {
    return [content];
  }

  if (
    content &&
    typeof content === 'object' &&
    'root' in content &&
    content.root &&
    typeof content.root === 'object'
  ) {
    return FALLBACK_CODE_OF_CONDUCT.content;
  }

  return FALLBACK_CODE_OF_CONDUCT.content;
}

export async function getHomePageData(): Promise<CmsHomePageData> {
  const data = await queryPayloadGraphQL<HomePageQuery>({
    query: HOMEPAGE_QUERY,
    tags: HOMEPAGE_CACHE_TAGS,
    revalidate: 300,
  });

  const rawEvents = readDocs(data?.events, FALLBACK_EVENTS, isCmsEvent);
  const rawPartners = readDocs(data?.partners, FALLBACK_PARTNERS, isCmsPartner);
  const rawSponsors = readDocs(data?.sponsors, FALLBACK_SPONSORS, isCmsSponsor);

  const rawBaseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://127.0.0.1:3000';
  const baseUrl = rawBaseUrl.replace('localhost', '127.0.0.1');

 // Smart URL formatter: Prevents Next.js Image Optimization crash
  const formatUrl = (urlPath?: string) => {
    if (!urlPath) return '';
    const fullUrl = urlPath.startsWith('http') ? urlPath : `${baseUrl}${urlPath}`;
    return fullUrl.replace('localhost', '127.0.0.1');
  };

  // ADAPTER: Format CMS Partners for the React Component
  const partners = rawPartners.map((p) => {
    const pData = (p as unknown) as Record<string, unknown>;
    const logoData = pData.logo as { url?: string } | undefined;
    
    return {
      ...p,
      desc: (pData.description as string) || (pData.desc as string) || '', 
      logo: formatUrl(logoData?.url || (typeof pData.logo === 'string' ? pData.logo : ''))
    };
  }) as CmsPartner[];

  // ADAPTER: Format CMS Sponsors for the React Component
  const sponsors = rawSponsors.map((s) => {
    const sData = (s as unknown) as Record<string, unknown>;
    const logoData = sData.logo as { url?: string } | undefined;
    const bannerData = sData.banner as { url?: string } | undefined;

    const fallbackBanner = typeof sData.banner === 'string' ? sData.banner : (typeof sData.logoMobile === 'string' ? sData.logoMobile : '');
    const fallbackLogo = typeof sData.logo === 'string' ? sData.logo : '';

    return {
      ...s,
      logo: formatUrl(logoData?.url || fallbackLogo),
      logoMobile: formatUrl(bannerData?.url || fallbackBanner || logoData?.url || fallbackLogo)
    };
  }) as CmsSponsor[];

  return {
    tags: [
      CMS_CACHE_TAGS.home,
      CMS_CACHE_TAGS.events,
      CMS_CACHE_TAGS.partners,
      CMS_CACHE_TAGS.sponsors,
    ],
    events: rawEvents,
    partners,
    sponsors,
  };
}

export async function getCodeOfConductData(): Promise<CmsCodeOfConductData> {
  const data = await queryPayloadGraphQL<CodeOfConductQuery>({
    query: CODE_OF_CONDUCT_QUERY,
    tags: CODE_OF_CONDUCT_CACHE_TAGS,
    revalidate: 300,
  });

  const cmsEntry = data?.DurianpyWebsiteCodeOfConduct;
  const reportFormUrl = isNonEmptyString(cmsEntry?.reportFormUrl)
    ? cmsEntry.reportFormUrl
    : FALLBACK_CODE_OF_CONDUCT.reportFormUrl;

  return {
    reportFormUrl,
    content: normalizeCodeOfConductContent(cmsEntry?.content),
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
    tags: ['statistics'],
    revalidate: 300,
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