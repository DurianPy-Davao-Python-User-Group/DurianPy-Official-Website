import { Container } from '../ui/container';
import Image from 'next/image';
import logo from '@/public/assets/ctaIcons/durianpy.png';
import gradient from '@/public/assets/ctaIcons/gradient.svg';

export function PythonFoundation() {
  return (
    <section className="bg-dark-green py-16 relative overflow-y-visible flex min-h-screen items-center justify-center">
      <Image src={gradient} alt="bg" className='w-screen' />
      <Container className="absolute">
        <div className="text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#FFC201] mb-8">
            Recognized by
          </h2>

          <div className="flex justify-center items-center">
            <Image
              src={logo}
              alt="Python Software Foundation"
              width={150}
              height={150}
              className="h-24 w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
