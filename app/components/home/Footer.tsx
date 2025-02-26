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
  // { href: 'https://medium.com/@durianpy.davao', icon: faMediumM },
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

              <div className="col-span-2 flex justify-center md:justify-start ">
                <Accordion
                  type="single"
                  collapsible
                  className="text-white hover:text-primary hover:underline "
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="mb-[5px]">
                      Support Us
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col text-[12px] text-left">
                      <Link href="">Sponsors</Link>
                      <Link href="" className="mr-2">
                        Host Us
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-row items-center gap-4 md:w-full md:gap-6 justify-center -mt-4 pb-4">
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
             text-xl sm:text-2xl md:w-10 md:text-3xl md:h-10"
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
              height="33"
              viewBox="0 0 719 160"
              fill="currentColor"
              className=" text-primary group-hover:text-[#FBFF00] transition-transform duration-300 group-hover:scale-110"
            >
              <path d="m174.104 9.734.215-.047V8.02H130.39L89.6 103.89 48.81 8.021H1.472v1.666l.212.047c8.018 1.81 12.09 4.509 12.09 14.242V137.93c0 9.734-4.087 12.433-12.106 14.243l-.212.047v1.671h32.118v-1.665l-.213-.048c-8.018-1.809-12.089-4.509-12.089-14.242V30.586l52.399 123.305h2.972l53.925-126.743V140.75c-.687 7.688-4.721 10.062-11.982 11.701l-.215.05v1.652h55.948v-1.652l-.215-.05c-7.269-1.639-11.4-4.013-12.087-11.701l-.037-116.774h.037c0-9.733 4.071-12.432 12.087-14.242m25.555 75.488c.915-20.474 8.268-35.252 20.606-35.507 3.806.063 6.998 1.312 9.479 3.714 5.272 5.118 7.751 15.812 7.368 31.793zm-.553 5.77h65.573v-.275c-.186-15.656-4.721-27.834-13.466-36.196-7.559-7.227-18.751-11.203-30.507-11.203h-.263c-6.101 0-13.584 1.48-18.909 4.16-6.061 2.807-11.407 7.003-15.855 12.511-7.161 8.874-11.499 20.866-12.554 34.343q-.05.606-.092 1.212a50 50 0 0 0-.065 1.151 85.807 85.807 0 0 0-.094 5.689c.71 30.524 17.198 54.917 46.483 54.917 25.705 0 40.675-18.791 44.407-44.013l-1.886-.664c-6.557 13.556-18.334 21.771-31.738 20.769-18.297-1.369-32.314-19.922-31.042-42.395m139.722 41.359c-2.151 5.101-6.639 7.908-12.653 7.908s-11.513-4.129-15.418-11.63c-4.197-8.053-6.405-19.436-6.405-32.92 0-28.067 8.729-46.22 22.24-46.22 5.657 0 10.111 2.807 12.236 7.704zm43.499 20.008c-8.019-1.897-12.089-4.722-12.089-14.951V1.309l-48.716 14.353v1.757l.299-.024c6.72-.543 11.278.386 13.925 2.83 2.072 1.915 3.082 4.853 3.082 8.987v18.66c-4.803-3.067-10.516-4.56-17.448-4.56-14.059 0-26.909 5.92-36.176 16.672-9.66 11.205-14.767 26.518-14.767 44.278-.003 31.72 15.612 53.039 38.851 53.039 13.595 0 24.533-7.449 29.54-20.013v16.865h43.711v-1.746zM424.1 19.819c0-9.904-7.468-17.374-17.375-17.374-9.859 0-17.573 7.632-17.573 17.374s7.721 17.374 17.573 17.374c9.907 0 17.375-7.47 17.375-17.374m11.499 132.546c-8.019-1.897-12.089-4.722-12.089-14.951h-.035V43.635l-43.714 12.551v1.705l.263.024c9.458.842 12.047 4.1 12.047 15.152v81.086h43.751v-1.746zm112.013 0c-8.018-1.897-12.089-4.722-12.089-14.951V43.635l-41.621 12.137v1.71l.246.026c7.733.813 9.967 4.257 9.967 15.36v59.279c-2.578 5.102-7.415 8.131-13.274 8.336-9.503 0-14.736-6.419-14.736-18.073V43.638l-43.714 12.55v1.703l.262.024c9.459.84 12.05 4.097 12.05 15.152v50.17a56.3 56.3 0 0 0 .91 10.444l.787 3.423c3.701 13.262 13.398 20.197 28.59 20.197 12.868 0 24.147-7.966 29.115-20.43v17.311h43.714v-1.747zm169.818 1.788v-1.749l-.213-.05c-8.7-2.006-12.089-5.789-12.089-13.49v-63.79c0-19.89-11.171-31.761-29.883-31.761-13.64 0-25.141 7.882-29.569 20.16-3.517-13.01-13.639-20.16-28.606-20.16-13.146 0-23.449 6.938-27.869 18.657V43.643L545.487 55.68v1.715l.263.024c9.345.829 12.047 4.181 12.047 14.95v81.784h40.787v-1.746l-.215-.053c-6.941-1.631-9.181-4.606-9.181-12.239V66.998c1.836-4.289 5.537-9.37 12.853-9.37 9.086 0 13.692 6.296 13.692 18.697v77.828h40.797v-1.746l-.215-.053c-6.94-1.631-9.18-4.606-9.18-12.239V75.066a42 42 0 0 0-.578-7.26c1.947-4.661 5.86-10.177 13.475-10.177 9.214 0 13.691 6.114 13.691 18.696v77.828z"></path>
            </svg>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
