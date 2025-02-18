import { Container } from '../ui/Container';

export function Partners() {
  const partners = [
    { name: 'PizzaPy', logo: '/pizzapy-logo.svg' },
    { name: 'DevCon', logo: '/devcon-logo.svg' },
    { name: 'Google', logo: '/google-logo.svg' },
  ];

  return (
    <section className="bg-green-800 py-16">
      <Container>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-green-700 p-6 rounded-lg flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
