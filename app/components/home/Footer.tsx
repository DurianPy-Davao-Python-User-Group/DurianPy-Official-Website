'use client';
import { useState, useEffect } from 'react';
import { Container } from '../ui/container';
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  return (
    <div className="">
      <footer className="bg-gradient-utd-saturatedGreen-transparent rounded-t-[100px] pt-4 ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[25%_1px_40%_1px_30%] gap-6 md:gap-8 mb-10 p-6 md:p-8 border-b border-primary items-start">
            {/* Logo & CTA Section */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <Image
                src={logo}
                alt="DurianPy Logo"
                width={250}
                className="mx-auto md:mx-0 w-[70%] sm:w-[75%] md:w-[190px] lg:w-[230px] max-w-[250px]"
                loading="lazy"
              />
              <p className="text-white text-md px-4 md:px-0 -mt-4 font-normal">
                Accelerating <span className="text-primary">Davao&apos;s </span>
                Tech Growth with Python
              </p>
              <div className="flex flex-col space-y-4 mt-4 w-full md:w-auto">
                <Button variant="footer" className="w-full md:w-[175px]">
                  Attend an Event
                </Button>
                <Button variant="footer" className="w-full md:w-[124px]">
                  Give a Talk
                </Button>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1px] bg-primary h-3/4 mt-10"></div>

            {/* Newsletter Section */}
            <div className="text-center md:text-left mt-12">
              <h4 className="text-primary text-xl font-bold mb-4">
                Newsletter
              </h4>
              <Input
                placeholder="Your Email"
                type="email"
                variant="underline"
                className="placeholder:text-white/50 placeholder:text-lg placeholder:font-medium px-0 w-full text-white font-normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      setIsChecked(checked === true)
                    }
                  />
                  <span className="text-white text-sm">
                    I accept the{' '}
                    <a
                      href="/privacy-policy"
                      className="text-primary underline"
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms" className="text-primary underline">
                      Terms and Conditions
                    </a>
                  </span>
                </label>
                <Button
                  variant="footer"
                  className="w-full md:w-[124px]"
                  disabled={!isEmailValid || !isChecked}
                >
                  Send
                </Button>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1px] bg-primary h-3/4 mt-10"></div>

            {/* Navigation Links */}
            <div className="text-center md:text-left mt-12">
              <h4 className="text-primary text-xl font-bold mb-4">
                Navigation
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-lg">
                  <li>
                    <a
                      href="/"
                      className="text-white hover:text-primary hover:underline"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.meetup.com/durianpy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary hover:underline"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sponsors"
                      className="text-white hover:text-primary hover:underline"
                    >
                      Support Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.meetup.com/durianpy/events/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary hover:underline"
                    >
                      Events
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2 text-lg">
                  <li>
                    <a
                      href="/sigs"
                      className="text-white hover:text-primary hover:underline"
                    >
                      SIGs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://forms.gle/x2cc6CrRhbhDeaxe9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary hover:underline"
                    >
                      Speak
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/durianpy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary hover:underline"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="border-t border-green-700 pt-4">
            <p className="text-center text-green-100 text-sm">
              © {new Date().getFullYear()} DurianPy. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
