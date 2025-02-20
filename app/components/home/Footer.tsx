import { Container } from '../ui/Container';
import Image from 'next/image';
import logo from '../../assets/images/logo.svg';

export function Footer() {
  return (
    <div className="bg-dark-green">
      <footer className="bg-gradient-utd-saturatedGreen-transparent rounded-t-[100px] pt-16 ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[25%_40%_30%] gap-8 mb-12 border-b border-primary ">
            <div className="relative after:absolute after:top-12 after:bottom-8 after:right-0 after:w-[1px] after:bg-primary md:after:block after:hidden min-h-[250px]">
              <div className="max-w-[230px] -mt-4">
                <Image src={logo} alt="DurianPy Logo" width={220} />
                <p className="text-green-100 text-sm pl-2 -mt-4">
                  Accelerating{' '}
                  <span className="text-primary">Davao&apos;s </span>
                  Tech Growth with Python
                </p>
                {/* TODO: Add button with after init shadcn issue */}
              </div>
            </div>

            <div className="relative p-12 -mt-4 after:absolute after:top-12 after:bottom-8 after:right-0 after:w-[1px] after:bg-primary md:after:block after:hidden">
              <h4 className="text-primary text-lg font-black mb-4">
                Newsletter
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-green-100 hover:text-white">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white">
                    ___________
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white">
                    Speak
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <h4 className="text-primary font-bold mb-4">Navigation</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-green-100 hover:text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-green-100 hover:text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-green-100 hover:text-white">
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-green-100 hover:text-white">
                        Support Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-green-100 hover:text-white">
                        SIGs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-green-100 hover:text-white">
                        Speak
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-green-100 hover:text-white">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8">
            <p className="text-center text-green-100">
              © {new Date().getFullYear()} DurianPy. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
