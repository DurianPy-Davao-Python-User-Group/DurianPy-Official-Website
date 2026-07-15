import { Container } from '@/components/ui/container';

const logo = '/assets/images/ctaIcons/psf-logo.svg';
const gradient = '/assets/images/ctaIcons/gradient.svg';
const gradient2 = '/assets/images/ctaIcons/gradient2.svg';

export function PythonFoundation() {
  return (
    <section className="bg-dark-green relative min-h-[360px] sm:min-h-screen flex items-center justify-center">
      <img
        src={gradient}
        alt="bg"
        className="hidden lg:block w-full absolute"
      />
      <img src={gradient2} alt="bg" className="lg:hidden w-full absolute" />
      <Container className="justify-center items-center w-full h-full z-10">
        <div className="text-center z-10 flex justify-center items-center flex-col gap-2 sm:gap-8">
          <h2 className="text-web-title-font font-bold text-[#FFC201]">
            Recognized by
          </h2>

          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Python Software Foundation"
              height={158}
              className="max-h-[158px] h-full w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
