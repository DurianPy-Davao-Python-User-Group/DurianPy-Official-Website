export interface CmsEvent {
	title: string;
	date: string | string[];
	location: string;
	link: string;
}

export interface CmsOrganizationStatus {
	isPSFPartner: boolean;
	psfPartnerLogo: CmsMedia
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
	content?: unknown;
	reportFormUrl?: string | null;
	_status?: 'draft' | 'published' | null;
	updatedAt?: string | null;
	createdAt?: string | null;
}

export interface CmsCodeOfConductData {
	reportFormUrl: string;
	content: string[];
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

export interface HomePageContentQuery {
	events?: DocsEnvelope<HomePageEventDoc> | null;
	partners?: DocsEnvelope<HomePageSponsorDoc> | null;
	sponsors?: DocsEnvelope<HomePageSponsorDoc> | null;
}

export interface HomePageQuery {
	events?: DocsEnvelope<HomePageEventDoc> | null;
	partners?: DocsEnvelope<HomePagePartnerDoc> | null;
	sponsors?: DocsEnvelope<HomePageSponsorDoc> | null;
	carousel?: CmsCarousel | null;
	organizationStatus?: CmsOrganizationStatus | null;
	cta?: CmsCtaSection | null;
}

export interface CmsHomePageData {
	tags: string[];
	events: CmsEvent[];
	partners: CmsPartner[];
	sponsors: CmsSponsor[];
	carousel: CarouselData;
	organizationStatus: CmsOrganizationStatus;
	cta: CtaCardData[];
}
