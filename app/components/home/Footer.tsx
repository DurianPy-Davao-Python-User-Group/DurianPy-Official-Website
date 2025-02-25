'use client';
import { useState, useEffect } from 'react';
import { Container } from '../ui/container';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/logo.svg';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from '@/app/components/ui/accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faDiscord,
  faInstagram,
  faLinkedin,
  faGithub,
  faMeetup,
  faMediumM,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: 'https://www.facebook.com/durianpy', icon: faFacebook },
  { href: 'https://discord.gg/T7sTQRHFFy', icon: faDiscord },
  { href: 'https://instagram.com/durianpy', icon: faInstagram },
  { href: 'https://www.linkedin.com/company/durianpy', icon: faLinkedin },
  { href: 'https://github.com/durianpy', icon: faGithub },
  { href: 'https://youtube.com/durianpy', icon: faYoutube },
  { href: 'https://www.meetup.com/durianpy', icon: faMeetup },
  { href: 'https://medium.com/@durianpy.davao', icon: faMediumM },
];

const links = [
  { label: 'Home', href: '/' },
  { label: 'SIGs', href: '/sigs' },
  { label: 'About', href: 'https://www.meetup.com/durianpy/', external: true },
  {
    label: 'Speak',
    href: 'https://forms.gle/x2cc6CrRhbhDeaxe9',
    external: true,
  },
  {
    label: 'Events',
    href: 'https://www.meetup.com/durianpy/events/',
    external: true,
  },
  {
    label: 'Contact Us',
    href: 'https://www.facebook.com/durianpy',
    external: true,
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  return (
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
              <Button variant="footer" className="w-full md:w-[150px] ">
                Attend an Event
              </Button>
              <Button variant="footer" className="w-full md:w-[100px]">
                Give a Talk
              </Button>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-primary h-3/4 mt-10"></div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left mt-12">
            <h4 className="text-primary text-xl font-bold mb-4">Newsletter</h4>
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
                  onCheckedChange={(checked) => setIsChecked(checked === true)}
                />
                <span className="text-white text-sm">
                  I accept the{' '}
                  <a href="/privacy-policy" className="text-primary underline">
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
            <h4 className="text-primary text-xl font-bold mb-4">Navigation</h4>
            <div className="grid grid-cols-2 md:w-[80%] md:text-sm gap-4">
              {links.map(({ label, href, external }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white hover:text-primary hover:underline"
                  {...(external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {label}
                </Link>
              ))}

              <Accordion
                type="single"
                collapsible
                className="text-white hover:text-primary hover:underline"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="mb-[5px]">
                    Support Us
                  </AccordionTrigger>

                  <AccordionContent className="flex flex-col gap-1 text-[12px]">
                    <a href="">Sponsors</a>
                    <a href="">Host Us</a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
        {socialLinks.map(({ href, icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              className="text-primary group-hover:text-[#FBFF00] transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </Container>
    </footer>
  );
}
