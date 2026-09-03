export interface CmsEvent {
  title: string;
  date: string | string[];
  location: string;
  link: string;
}

export interface CmsOrganizationStatus {
  isPSFPartner: boolean;
  psfPartnerLogo: CmsMedia;
}
export interface CmsPartner {
  id?: string;
  name: string;
  logo: string;
  logoMobile?: string;
  websiteUrl?: string;
  desc: string;
  url: string;
}

export interface CmsSponsor {
  id?: string;
  name: string;
  logo: string;
  logoMobile?: string;
  description: string;
  url: string;
}

export interface CmsImageSize {
  url?: string | null;
}

export interface CmsMediaSizes {
  small?: CmsImageSize | null;
  medium?: CmsImageSize | null;
  large?: CmsImageSize | null;
}

export interface CmsMedia {
  url?: string | null;
  alt?: string | null;
  sizes?: CmsMediaSizes | null;
}

interface DocsEnvelope<T> {
  docs?: T[] | null;
}

export interface CmsEventDoc {
  id?: string | null;
  title?: string | null;
  date?: string | null;
  location?: string | null;
  registrationLink?: string | null;
  isFeatured?: boolean | null;
  coverImage?: CmsMedia | null;
}

export interface EventsQuery {
  DurianpyWebsiteEvents?: DocsEnvelope<CmsEventDoc> | null;
}

export type SponsorTier = 'gold' | 'silver' | 'venue' | 'community';

export interface CmsPartnerDoc {
  id?: string | null;
  name?: string | null;
  websiteUrl?: string | null;
  description?: string | null;
  logo?: CmsMedia | null;
  logoMobile?: CmsMedia | null;
}

export interface CmsPartnerDoc {
  id?: string | null;
  name?: string | null;
  websiteUrl?: string | null;
  description?: string | null;
  logo?: CmsMedia | null;
  logoMobile?: CmsMedia | null;
}

export interface CmsSponsorDoc {
  id?: string | null;
  name?: string | null;
  websiteUrl?: string | null;
  tier?: SponsorTier | null;
  description?: string | null;
  logo?: CmsMedia | null;
  logoMobile?: CmsMedia | null;
}

export interface PartnersQuery {
  DurianpyWebsitePartners?: DocsEnvelope<CmsPartnerDoc> | null;
}

export interface SponsorsQuery {
  DurianpyWebsiteSponsors?: DocsEnvelope<CmsSponsorDoc> | null;
}

export interface CmsSigDoc {
  id?: string | null;
  title?: string | null;
  isActive?: boolean | null;
  icon?: CmsMedia | null;
}

export interface SigsQuery {
  DurianpyWebsiteSigs?: DocsEnvelope<CmsSigDoc> | null;
}

export interface CmsCarouselPhoto {
  id?: string | null;
  image?: CmsMedia | null;
}

export interface CmsCarousel {
  title?: string | null;
  subtitle?: string | null;
  photos?: CmsCarouselPhoto[] | null;
  _status?: 'draft' | 'published' | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

export interface CarouselPhoto {
  name: string;
  image: string;
}

export interface CarouselData {
  photos: CarouselPhoto[];
}

export interface CarouselQuery {
  DurianpyWebsiteCarousel?: CmsCarousel | null;
}

export interface CmsCtaCard {
  id?: string | null;
  link?: string | null;
  whiteText?: string | null;
  yellowText?: string | null;
  icon?: CmsMedia | null;
}

export interface CmsCtaSection {
  cards?: CmsCtaCard[] | null;
  _status?: 'draft' | 'published' | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

export interface CtaCardData {
  link: string;
  whiteText: string;
  yellowText: string;
  icon: string;
  iconAlt: string;
}

export interface CtaSectionQuery {
  DurianpyWebsiteCtaSection?: CmsCtaSection | null;
}

export interface CmsCodeOfConduct {
  root?: LexicalEditorState | null;
  reportFormUrl?: string | null;
  _status?: 'draft' | 'published' | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

export interface CmsCodeOfConductData {
  reportFormUrl: string;
  root: LexicalNode;
}

export interface CodeOfConductQuery {
  DurianpyWebsiteCodeOfConduct?: CmsCodeOfConduct | null;
}

export interface HomePageEventDoc {
  title?: string | null;
  date?: string | null;
  location?: string | null;
  link?: string | null;
}

export interface HomePagePartnerDoc {
  name?: string | null;
  url?: string | null;
  description?: string | null;
  logo?: CmsMedia | null;
  logoMobile?: CmsMedia | null;
}

export interface HomePageSponsorDoc extends HomePagePartnerDoc {
  tier?: SponsorTier | null;
}

export interface CmsHomepageConfig {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  heroImageDesktop?: CmsMedia | null;
  heroImageMobile?: CmsMedia | null;
}

export interface HomeHeroConfigData {
  heroTitle: string;
  heroSubtitle: string;
  heroImageDesktop: string;
  heroImageDesktopAlt: string;
  heroImageMobile: string;
  heroImageMobileAlt: string;
}

export interface HomePageContentQuery {
  events?: DocsEnvelope<HomePageEventDoc> | null;
  partners?: DocsEnvelope<HomePageSponsorDoc> | null;
  sponsors?: DocsEnvelope<HomePageSponsorDoc> | null;
}

export interface HomePageQuery {
  config?: CmsHomepageConfig | null;
  events?: DocsEnvelope<HomePageEventDoc> | null;
  partners?: DocsEnvelope<HomePagePartnerDoc> | null;
  sponsors?: DocsEnvelope<HomePageSponsorDoc> | null;
  carousel?: CmsCarousel | null;
  organizationStatus?: CmsOrganizationStatus | null;
  cta?: CmsCtaSection | null;
}

export interface CmsHomePageData {
  tags: string[];
  config: HomeHeroConfigData;
  events: CmsEvent[];
  partners: CmsPartner[];
  sponsors: CmsSponsor[];
  carousel: CarouselData;
  organizationStatus: CmsOrganizationStatus;
  cta: CtaCardData[];
}
// Base fields shared by every Lexical node
interface LexicalNodeBase {
  type: string;
  version: number;
  format?: number | string; // number on text nodes, string ("start"/"") on some block nodes
  indent?: number;
  direction?: 'ltr' | 'rtl' | null;
}

interface LexicalTextNode extends LexicalNodeBase {
  type: 'text';
  text: string;
  detail: number;
  mode: 'normal' | 'token' | 'segmented';
  style: string;
  format: number; // bitmask: bold=1, italic=2, strikethrough=4, underline=8, code=16, sub=32, sup=64
}

interface LexicalLinkFields {
  linkType: 'custom' | 'internal';
  newTab: boolean;
  url: string;
}

interface LexicalLinkNode extends LexicalNodeBase {
  type: 'link';
  children: LexicalNode[];
  fields: LexicalLinkFields;
  id: string;
}

interface LexicalHeadingNode extends LexicalNodeBase {
  type: 'heading';
  children: LexicalNode[];
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface LexicalParagraphNode extends LexicalNodeBase {
  type: 'paragraph';
  children: LexicalNode[];
  textFormat?: number;
  textStyle?: string;
}

interface LexicalListNode extends LexicalNodeBase {
  type: 'list';
  children: LexicalNode[];
  listType: 'number' | 'bullet' | 'check';
}

interface LexicalListItemNode extends LexicalNodeBase {
  type: 'listitem';
  children: LexicalNode[];
}

interface LexicalQuoteNode extends LexicalNodeBase {
  type: 'quote';
  children: LexicalNode[];
}

interface LexicalLinebreakNode extends LexicalNodeBase {
  type: 'linebreak';
}

interface LexicalRootNode extends LexicalNodeBase {
  type: 'root';
  children: LexicalNode[];
}

export interface LexicalEditorState {
  root: LexicalRootNode;
}

// Fallback for explicitly marked nodes not modeled above.
// Arbitrary string node types cannot coexist with a discriminated union.
interface LexicalUnknownNode extends LexicalNodeBase {
  type: 'unknown';
  children?: LexicalNode[];
  [key: string]: unknown;
}

export type LexicalNode =
  | LexicalRootNode
  | LexicalTextNode
  | LexicalHeadingNode
  | LexicalParagraphNode
  | LexicalLinkNode
  | LexicalListNode
  | LexicalListItemNode
  | LexicalQuoteNode
  | LexicalLinebreakNode
  | LexicalUnknownNode;
