import { Container } from '../ui/container';
import Image from 'next/image';

export function PythonFoundation() {
  return (
    <section className="bg-green-900 py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-primary text-[80px] font-bold text-[#FFC201] mb-8">Recognized by</h2>
          <div className="flex justify-center items-center">
            <div className="w-[800px] h-[300px] p-8 rounded-lg relative">
              <Image
                src="/image/psf-logo.png"
                alt="Python Software Foundation"
                loading="lazy"
                fill
                className="h-2 w-auto relative object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
