'use client';

import useWindowWidth from '@/components/csr/useWindowWidth';
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
  faMeetup,
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
  {
    href: 'https://www.meetup.com/durianpy-davao-python-user-group/',
    icon: faMeetup,
  },
];

export default function ContactPage() {
  const width = useWindowWidth();
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
      <Container
        className={`relative min-h-screen justify-center items-center flex gap-[46px] ${
          width < 1024 ? 'flex-col mt-[100px]' : 'flex-row'
        }`}
      >
        <div
          className={`flex flex-col gap-[80px] items-start justify-start ${
            width < 1024
              ? 'text-center justify-center sw-[531px] items-center'
              : ''
          }`}
        >
          <div className="flex flex-col gap-[20px] text-white sm:items-center lg:items-start">
            <h1 className="text-web-title-font font-bold">Contact Us</h1>
            <p className="text-web-body-font sm:w-[300px]">
              Get in touch with us for any questions, concerns, or to learn more
              about our organization and initiatives
            </p>
          </div>
          <div
            className={`flex gap-[28px] ${
              width < 1024 ? 'flex-col items-center gap-[0px] ' : 'flex-row'
            }`}
          >
            <Image
              src={'/assets/icons/email-us.svg'}
              width={63}
              height={63}
              alt=""
              className=""
            />
            <div className="flex flex-col text-white">
              <p
                className={`text-[#FFC201] leading-[49px] text-web-medium-font font-bold ${width < 1024 ? 'leading-[25px] mt-[5px] md:leading-[45px]' : ''}`}
              >
                E-mail us
              </p>
              <p className="text-web-body-font">durianpy.davao@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-white text-button-hovered font-bold ">
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
                    fill="#112018"
                  />
                  <path
                    d="M836.115 244.625L836.923 244.448V238.195H672.014L518.891 598.084L365.768 238.195H188.059V244.448L188.857 244.625C218.957 251.419 234.239 261.551 234.239 298.091V725.872C234.239 762.412 218.898 772.544 188.798 779.338L188 779.516V785.788H308.57V779.535L307.773 779.358C277.672 772.564 262.39 762.432 262.39 725.892V322.905L459.093 785.788H470.249L672.683 309.996V736.457C670.104 765.317 654.96 774.228 627.705 780.382L626.897 780.569V786.773H836.923V780.569L836.115 780.382C808.831 774.228 793.322 765.317 790.743 736.457L790.605 298.091H790.743C790.743 261.551 806.024 251.419 836.115 244.625Z"
                    fill="#112018"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <YourDetails />
      </Container>
    </>
  );
}
