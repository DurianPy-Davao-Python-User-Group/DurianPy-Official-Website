import { Container } from '@/components/ui/container';
import Image from 'next/image';
import logo from '@/public/assets/ctaIcons/psf-logo.svg';
import gradient from '@/public/assets/ctaIcons/gradient.svg';
import gradient2 from '@/public/assets/ctaIcons/gradient2.svg';
import type { CmsOrganizationStatus } from '@/lib/graphql/types';

type PythonFoundationProps = {
  organizationStatus: CmsOrganizationStatus;
};

export function PythonFoundation({ organizationStatus }: PythonFoundationProps) {
  if (!organizationStatus.isPSFPartner) {
    return null;
  }

  const logoSource = organizationStatus.psfPartnerLogo?.url || logo;
  const logoAlt = organizationStatus.psfPartnerLogo?.alt || 'Python Software Foundation';

  return (
    <section className="bg-dark-green relative min-h-[360px] sm:min-h-screen flex items-center justify-center">
      <Image
        src={gradient}
        alt="bg"
        className="hidden lg:block w-full absolute"
      />
      <Image src={gradient2} alt="bg" className="lg:hidden w-full absolute" />
      <Container className="justify-center items-center w-full h-full z-10">
        <div className="text-center z-10 flex justify-center items-center flex-col gap-2 sm:gap-8">
          <h2 className="text-web-title-font font-bold text-[#FFC201]">
            Recognized by
          </h2>

          <div className="relative h-[158px] w-full max-w-[640px]">
            <Image
              src={logoSource}
              alt={logoAlt}
              fill
              sizes="(max-width: 640px) 100vw, 640px"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
