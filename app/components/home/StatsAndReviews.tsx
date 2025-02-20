import { Container } from '../ui/container';

export function StatsAndReviews() {
  return (
    <section className="bg-green-900 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="stats">
            <h2 className="text-3xl font-bold text-white mb-8">
              Statistics & Reviews
            </h2>
            <div className="grid grid-cols-2 gap-8">{/* Stats cards */}</div>
          </div>
          <div className="reviews">{/* Reviews carousel/grid */}</div>
        </div>
      </Container>
    </section>
  );
}
