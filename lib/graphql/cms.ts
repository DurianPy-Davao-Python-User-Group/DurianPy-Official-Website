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
import { CODE_OF_CONDUCT_QUERY, HOMEPAGE_QUERY } from '@/lib/graphql/queries';
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
