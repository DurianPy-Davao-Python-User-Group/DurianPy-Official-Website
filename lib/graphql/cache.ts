export const CMS_CACHE_TAGS = {
  home: 'cms:home',
  events: 'cms:events',
  partners: 'cms:partners',
  sponsors: 'cms:sponsors',
} as const;

export const HOMEPAGE_CACHE_TAGS = [
  CMS_CACHE_TAGS.home,
  CMS_CACHE_TAGS.events,
  CMS_CACHE_TAGS.partners,
  CMS_CACHE_TAGS.sponsors,
];
