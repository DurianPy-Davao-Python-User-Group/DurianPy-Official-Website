import { Image } from "@unpic/react";
import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

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
    <footer className="bg-dark-green border-t border-[#36FF90] rounded-t-[50px] font-montserrat">
      <Container className="flex flex-col py-16">
        <div className="flex flex-col md:flex-row justify-between items-start w-full md:gap-12 lg:gap-16">
          {/* Logo and CTA Buttons */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-[60%]">
            <Image src="/assets/images/logo.svg" alt="UTD logo" className="mb-4 h-12 w-auto" />
            <p className="text-white text-sm mb-6 max-w-[280px]">
              Accelerating Davao&apos;s Tech Growth with Python
            </p>
            <div className="flex space-x-4 mb-8 md:mb-0">
              <a href="https://www.meetup.com/durianpy/" target="_blank" rel="noopener noreferrer">
                <Button variant="footer">Attend Event</Button>
              </a>
              <a href="https://forms.gle/x2cc6CrRhbhDeaxe9" target="_blank" rel="noopener noreferrer">
                <Button variant="footer">Give a Talk</Button>
              </a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-[#36FF90] h-36 mt-10"></div>

          {/* Newsletter Form */}
          <div className="flex flex-col items-center md:items-start md:w-[75%] mt-8 md:mt-0">
            <h2 className="text-[#FFC200] text-xl font-bold mb-4">Newsletter</h2>
            <p className="text-white text-sm mb-6 text-center md:text-left max-w-[360px]">
              Subscribe to our newsletter to get the latest updates on our events
              and initiatives
            </p>
            <div className="flex flex-col gap-4 w-full max-w-[360px]">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white border-white focus-visible:ring-primary placeholder-gray-400"
              />
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
                    to="/code-of-conduct"
                    className="text-primary underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link to="/code-of-conduct" className="text-primary underline">
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
          <div className="hidden md:block w-[1px] bg-[#36FF90] h-36 mt-10"></div>

          {/* Navigation Links */}
          <div className="text-center md:text-left mt-12 md:w-[75%]">
            <h2 className="text-primary text-xl font-bold mb-4">Navigation</h2>
            <div className="grid grid-cols-2 md:text-sm gap-4">
              {links.map(({ label, href, external }) => {
                if (external) {
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary hover:underline"
                    >
                      {label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={label}
                    to={href as any}
                    className="text-white hover:text-primary hover:underline"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-row items-center gap-4 md:w-full md:gap-6 justify-center p-5 mt-10">
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
                className="text-primary group-hover:text-[#FBFF00] transition-transform duration-300 group-hover:scale-110 text-xl"
              />
            </a>
          ))}
          <a
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
              className="w-[24px] h-[24px] text-primary group-hover:text-[#FBFF00] transition-transform duration-300 group-hover:scale-110"
            >
              <rect
                width="1024"
                height="1024"
                rx="179.649"
                fill="currentColor"
              />
              <path
                d="M1024 704.736V797.736C1018.16 798.3 1012.16 798.588 1006 798.588C896.061 798.588 834.166 707.016 831.497 592.432C831.418 588.002 831.448 583.6 831.546 579.228C831.606 576.501 831.714 573.783 831.852 571.075C831.921 569.628 831.989 568.269 832.098 566.753C832.206 565.236 832.315 563.72 832.443 562.204C836.401 511.613 852.687 466.594 879.568 433.284C896.267 412.606 916.334 396.852 939.09 386.316C959.078 376.253 987.17 370.699 1010.07 370.699H1011.06C1015.4 370.699 1019.71 370.844 1024 371.13V396.717C1019.45 395.47 1014.58 394.801 1009.4 394.715C963.086 395.67 935.486 451.145 932.049 528.007H1024V549.669H929.972L929.942 549.689C925.703 624.579 966.692 687.87 1024 704.736Z"
                fill="#112018"
              />
              <path
                d="M836.115 244.625L836.923 244.448V238.195H672.014L518.891 598.084L365.768 238.195H188.059V244.448L188.857 244.625C218.957 251.419 234.239 261.551 234.239 298.091V725.872C234.239 762.412 218.898 772.544 188.798 779.338L188 779.516V785.788H308.57V779.535L307.773 779.358C277.672 772.564 262.39 762.432 262.39 725.892V322.905L459.093 785.788H470.249L672.683 309.996V736.457C670.104 765.317 654.96 774.228 627.705 780.382L626.897 780.569V786.773H836.923V780.569L836.115 780.382C808.831 774.228 793.322 765.317 790.743 736.457L790.605 298.091H790.743C790.743 261.551 806.024 251.419 836.115 244.625Z"
                fill="#112018"
              />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
