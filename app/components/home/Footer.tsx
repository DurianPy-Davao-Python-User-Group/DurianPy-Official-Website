import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-green-900 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold mb-4">DurianPy</h3>
            <p className="text-green-100">
              Accelerating Davao&apos;s Tech Growth with Python
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Speak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8">
          <p className="text-center text-green-100">
            © {new Date().getFullYear()} DurianPy. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
