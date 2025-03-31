import { Container } from '@/components/ui/container';
import YourDetails from './components/YourDetails';
import Image from 'next/image';
import Link from 'next/link';
import {
  faFacebook,
  faDiscord,
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialLinks = [
  { href: 'https://discord.gg/T7sTQRHFFy', icon: faDiscord },
  { href: 'https://www.facebook.com/durianpy', icon: faFacebook },
  { href: 'https://instagram.com/durianpy.dvo', icon: faInstagram },
  { href: 'https://youtube.com/@DurianPy', icon: faYoutube },
  {
    href: 'https://github.com/DurianPy-Davao-Python-User-Group',
    icon: faGithub,
  },
  { href: 'https://www.linkedin.com/company/durianpy', icon: faLinkedin },
];

export default function ContactPage() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="825"
        height="813"
        viewBox="0 0 825 813"
        fill="none"
        className="absolute top-0 left-0"
      >
        <g filter="url(#filter0_f_2582_874)">
          <path
            d="M605 31C605 341.384 351.145 593 38 593C-275.145 593 -529 341.384 -529 31C-529 -279.384 -275.145 -531 38 -531C351.145 -531 605 -279.384 605 31Z"
            fill="url(#paint0_radial_2582_874)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2582_874"
            x="-748.5"
            y="-750.5"
            width="1573"
            height="1563"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="109.75"
              result="effect1_foregroundBlur_2582_874"
            />
          </filter>
          <radialGradient
            id="paint0_radial_2582_874"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(37.9999 30.9999) rotate(90) scale(562 567)"
          >
            <stop stop-color="#009643" />
            <stop offset="1" stop-color="#271E00" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <Container className="relative min-h-screen justify-center items-center flex gap-[46px]">
        <div className="flex flex-col gap-[80px] items-start justify-start">
          <div className="flex flex-col gap-[20px] text-white">
            <h1 className="text-web-title-font font-bold">Contact Us</h1>
            <p className="text-web-body-font">
              Get in touch with us for any questions, concerns, or to learn more
              about our organization and initiatives
            </p>
          </div>
          <div className="flex gap-[28px]">
            <Image
              src={'/assets/icons/email-us.svg'}
              width={63}
              height={63}
              alt=""
            />
            <div className="flex flex-col text-white">
              <p className="text-[#FFC201] leading-[49px] text-web-medium-font font-bold">
                E-mail us
              </p>
              <p className="text-web-body-font">durianpy.davao@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-white text-button-hovered font-bold">
              Follow our social media
            </p>
            <div className="flex gap-[8px]">
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
            </div>
          </div>
        </div>
        <YourDetails />
      </Container>
    </>
  );
}
