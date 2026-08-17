export const CMS_CACHE_TAGS = {
  home: 'cms:home',
  events: 'cms:events',
  partners: 'cms:partners',
  sponsors: 'cms:sponsors',
  codeOfConduct: 'cms:code-of-conduct',
} as const;

export const HOMEPAGE_CACHE_TAGS = [
  CMS_CACHE_TAGS.home,
  CMS_CACHE_TAGS.events,
  CMS_CACHE_TAGS.partners,
  CMS_CACHE_TAGS.sponsors,
];

export const CODE_OF_CONDUCT_CACHE_TAGS = [
  CMS_CACHE_TAGS.codeOfConduct,
];
