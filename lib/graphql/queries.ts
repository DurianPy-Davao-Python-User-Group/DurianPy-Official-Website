export const EVENTS_QUERY = /* GraphQL */ `
  query EventsContent {
    DurianpyWebsiteEvents(
      where: { _status: { equals: published } }
      sort: "-date"
    ) {
      docs {
        id
        title
        date
        location
        registrationLink
        isFeatured
        coverImage {
          url
          alt
        }
      }
    }
  }
`;

export const PARTNERS_QUERY = /* GraphQL */ `
  query PartnersContent {
    DurianpyWebsitePartners(
      where: { _status: { equals: published } }
      sort: "name"
    ) {
      docs {
        id
        name
        websiteUrl
        description
        logo {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
          }
        }
        logoMobile {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
          }
        }
      }
    }
  }
`;

export const ORGANIZATION_STATUS = /* GraphQL */ `
  query OrganizationStatus {
    DurianpyWebsiteOrganizationStatus{
      isPSFPartner
      psfPartnerLogo {
        url
        alt
      }
    }
  } 
`;

export const SPONSORS_QUERY = /* GraphQL */ `
  query SponsorsContent {
    DurianpyWebsiteSponsors(
      where: {
        _status: { equals: published }
        tier: { not_equals: community }
      }
      sort: "tier"
    ) {
      docs {
        id
        name
        websiteUrl
        tier
        description
        logo {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
          }
        }
        logoMobile {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
          }
        }
      }
    }
  }
`;

export const SIGS_QUERY = /* GraphQL */ `
  query SigsContent {
    DurianpyWebsiteSigs(
      where: { _status: { equals: published }, isActive: { equals: true } }
      sort: "title"
    ) {
      docs {
        id
        title
        isActive
        icon {
          url
          alt
        }
      }
    }
  }
`;

export const CAROUSEL_QUERY = /* GraphQL */ `
  query CarouselContent {
    DurianpyWebsiteCarousel {
      title
      subtitle
      photos {
        id
        image {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
            large {
              url
            }
          }
        }
      }
      _status
      updatedAt
      createdAt
    }
  }
`;

export const CTA_SECTION_QUERY = /* GraphQL */ `
  query CtaSectionContent {
    DurianpyWebsiteCtaSection {
      cards {
        id
        link
        whiteText
        yellowText
        icon {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
          }
        }
      }
      _status
      updatedAt
      createdAt
    }
  }
`;

export const CODE_OF_CONDUCT_QUERY = /* GraphQL */ `
  query CodeOfConductContent {
    DurianpyWebsiteCodeOfConduct {
      content
      reportFormUrl
      _status
      updatedAt
      createdAt
    }
  }
`;

export const HOMEPAGE_QUERY = /* GraphQL */ `
  query HomePageContent {
    events: DurianpyWebsiteEvents(
      where: { _status: { equals: published } }
      sort: "-date"
    ) {
      docs {
        title
        date
        location
        link: registrationLink
      }
    }

    partners: DurianpyWebsitePartners(
      where: { _status: { equals: published } }
      sort: "name"
    ) {
      docs {
        name
        url: websiteUrl
        description
        logo {
          url
          alt
        }
        logoMobile {
          url
          alt
        }
      }
    }

    sponsors: DurianpyWebsiteSponsors(
      where: {
        _status: { equals: published }
        tier: { not_equals: community }
      }
      sort: "tier"
    ) {
      docs {
        name
        description
        url: websiteUrl
        logo {
          url
          alt
        }
        logoMobile {
          url
          alt
        }
      }
    }

    organizationStatus: DurianpyWebsiteOrganizationStatus{
      isPSFPartner
      psfPartnerLogo {
        url
        alt
      }
    }
    
    carousel: DurianpyWebsiteCarousel {
      title
      subtitle
      photos {
        id
        image {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
            large {
              url
            }
          }
        }
      }
      _status
      updatedAt
      createdAt
    }

    cta: DurianpyWebsiteCtaSection {
      cards {
        id
        link
        whiteText
        yellowText
        icon {
          url
          alt
          sizes {
            small {
              url
            }
            medium {
              url
            }
          }
        }
      }
      _status
      updatedAt
      createdAt
    }
  }
`;


export const STATISTICS_QUERY = /* GraphQL */ `
  query StatisticsContent {
    DurianpyWebsiteStatisticsConfig {
      metrics {
        label
        value
        large
      }
    }
  }
`; 