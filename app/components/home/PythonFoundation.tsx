import { Container } from '../ui/container';
import Image from 'next/image';
import logo from '@/public/assets/ctaIcons/durianpy.png';
import gradient from '@/public/assets/ctaIcons/gradient.svg';

export function PythonFoundation() {
  return (
    <section className="bg-green-900 py-16 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat opacity-100"
        style={{ 
          backgroundImage: `url(${gradient.src})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}
      ></div>

      <Container>
        <div className="text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#FFC201] mb-8">Recognized by</h2>
          
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