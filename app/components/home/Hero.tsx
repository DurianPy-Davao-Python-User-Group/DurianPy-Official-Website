import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-900 to-green-800 min-h-[600px]">
      <Container>
        <div className="flex flex-col items-center justify-center pt-20 pb-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            DurianPy
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Accelerating Davao&apos;s Tech Growth with Python
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-full">
            Join Our Community
          </button>
        </div>
      </Container>
    </section>
  );
}
