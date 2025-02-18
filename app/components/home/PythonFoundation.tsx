import { Container } from '../ui/Container';

export function PythonFoundation() {
  return (
    <section className="bg-green-900 py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Recognized by</h2>
          <div className="flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              <img
                src="/python-logo.svg"
                alt="Python Software Foundation"
                className="h-16 w-auto"
              />
              <p className="mt-4 text-green-900 font-medium">
                Python Software Foundation
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
