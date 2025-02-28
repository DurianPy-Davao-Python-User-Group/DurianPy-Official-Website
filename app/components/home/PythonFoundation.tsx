import { Container } from '../ui/container';
import Image from 'next/image';
import logo from '@/public/assets/ctaIcons/durianpy.png';
import gradient from '@/public/assets/ctaIcons/gradient.svg';

export function PythonFoundation() {
  return (
    <section className="bg-dark-green relative min-h-[70vh] lg:min-h-screen flex items-center justify-center">
      <Image src={gradient} alt="bg" className='w-full absolute' />
      <Container className='justify-center items-center w-full h-full z-10'>
        <div className="text-center z-10">
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
