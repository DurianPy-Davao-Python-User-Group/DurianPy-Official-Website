'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
// import { ChevronDown } from 'lucide-react';
// import {
//   Accordion,
//   AccordionTrigger,
//   AccordionContent,
//   AccordionItem,
// } from '@/components/ui/accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faDiscord,
  faInstagram,
  faLinkedin,
  faGithub,
  faMeetup,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: 'https://www.facebook.com/durianpy', icon: faFacebook },
  { href: 'https://discord.gg/T7sTQRHFFy', icon: faDiscord },
  { href: 'https://instagram.com/durianpy.dvo', icon: faInstagram },
  { href: 'https://www.linkedin.com/company/durianpy', icon: faLinkedin },
  {
    href: 'https://github.com/DurianPy-Davao-Python-User-Group',
    icon: faGithub,
  },
  { href: 'https://youtube.com/@DurianPy', icon: faYoutube },
  { href: 'https://www.meetup.com/durianpy/', icon: faMeetup },
];

const links = [
  { label: 'Home', href: '/' },
  // { label: 'SIGs', href: '/sigs' },
  {
    label: 'Code of Conduct',
    href: '/code-of-conduct',
    external: false,
  },
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
    <footer className="bg-gradient-utd-saturatedGreen-transparent pt-4 ">
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
              <Link href="https://www.meetup.com/durianpy/" target="_blank">
                <Button variant="footer" className="w-full md:w-[150px] ">
                  Attend an Event
                </Button>
              </Link>
              <Link href="https://forms.gle/x2cc6CrRhbhDeaxe9" target="_blank">
                <Button variant="footer" className="w-full md:w-[100px]">
                  Give a Talk
                </Button>
              </Link>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-primary h-3/4 mt-10"></div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left mt-12">
            <h2 className="text-primary text-xl font-bold mb-4">Newsletter</h2>
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
                  onCheckedChange={(checked: boolean) =>
                    setIsChecked(checked === true)
                  }
                />
                <span className="text-white text-sm">
                  I accept the{' '}
                  <Link
                    href="/privacy-policy"
                    className="text-primary underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms" className="text-primary underline">
                    Terms and Conditions
                  </Link>
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
          <div className="text-center md:text-left mt-12 md:w-[75%]">
            <h2 className="text-primary text-xl font-bold mb-4">Navigation</h2>
            <div className="grid grid-cols-2  md:text-sm gap-4">
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

              {/* <div className="col-span-2 flex justify-center md:justify-start ">
                <Accordion
                  type="single"
                  collapsible
                  className="text-white hover:text-primary hover:underline "
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="mb-[5px]">
                      Support Us
                      <ChevronDown className="h-5 w-5 shrink-50 transition-transform duration-200" />
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col text-[12px] text-left">
                      <Link href="/sponsors">Sponsors</Link>
                      <Link href="/host" className="mr-2">
                        Host Us
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div> */}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-row items-center gap-4 md:w-full md:gap-6 justify-center p-5 -mt-10 ">
          {socialLinks.map(({ href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-primary group-hover:text-[#FBFF00] transition-transform duration-300 group-hover:scale-110 
             text-md sm:text-xl md:w-10 md:text-2xl md:h-10"
              />
            </Link>
          ))}
          {/* Latest Version of Medium Icon was not included in the package */}
          <Link
            href="https://medium.com/@durianpy.davao"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 1024 1024"
              fill="none"
              className="w-[16px] h-[16px]  sm:w-[24px] sm:h-[24px] sm:mb-1 md:w-[40px] md:h-[40px] text-primary group-hover:text-[#FBFF00] transition-transform duration-300 group-hover:scale-110"
            >
              <rect
                width="1024"
                height="1024"
                rx="179.649"
                fill="currentColor"
              />
              <path
                d="M1024 704.736V797.736C1018.16 798.3 1012.16 798.588 1006 798.588C896.061 798.588 834.166 707.016 831.497 592.432C831.418 588.002 831.448 583.6 831.546 579.228C831.606 576.501 831.714 573.783 831.852 571.075C831.921 569.628 831.989 568.269 832.098 566.753C832.206 565.236 832.315 563.72 832.443 562.204C836.401 511.613 852.687 466.594 879.568 433.284C896.267 412.606 916.334 396.852 939.09 386.316C959.078 376.253 987.17 370.699 1010.07 370.699H1011.06C1015.4 370.699 1019.71 370.844 1024 371.13V396.717C1019.45 395.47 1014.58 394.801 1009.4 394.715C963.086 395.67 935.486 451.145 932.049 528.007H1024V549.669H929.972L929.942 549.689C925.703 624.579 966.692 687.87 1024 704.736Z"
                fill="#067F3C"
              />
              <path
                d="M836.115 244.625L836.923 244.448V238.195H672.014L518.891 598.084L365.768 238.195H188.059V244.448L188.857 244.625C218.957 251.419 234.239 261.551 234.239 298.091V725.872C234.239 762.412 218.898 772.544 188.798 779.338L188 779.516V785.788H308.57V779.535L307.773 779.358C277.672 772.564 262.39 762.432 262.39 725.892V322.905L459.093 785.788H470.249L672.683 309.996V736.457C670.104 765.317 654.96 774.228 627.705 780.382L626.897 780.569V786.773H836.923V780.569L836.115 780.382C808.831 774.228 793.322 765.317 790.743 736.457L790.605 298.091H790.743C790.743 261.551 806.024 251.419 836.115 244.625Z"
                fill="#067F3C"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
