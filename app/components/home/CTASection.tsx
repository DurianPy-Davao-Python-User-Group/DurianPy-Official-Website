import { Container } from '../ui/container';

export function CTASection() {
  return (
    <section className="bg-green-800 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-green-700 rounded-lg">
            <div className="mb-4">
              <span className="text-yellow-400 text-4xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Join Our Community
            </h3>
            <p className="text-green-100">
              Connect with fellow Python developers
            </p>
          </div>

          <div className="p-6 bg-green-700 rounded-lg">
            <div className="mb-4">
              <span className="text-yellow-400 text-4xl">📅</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Attend Events</h3>
            <p className="text-green-100">Join our workshops and meetups</p>
          </div>

          <div className="p-6 bg-green-700 rounded-lg">
            <div className="mb-4">
              <span className="text-yellow-400 text-4xl">🎤</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Give a Talk</h3>
            <p className="text-green-100">Share your knowledge with others</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
