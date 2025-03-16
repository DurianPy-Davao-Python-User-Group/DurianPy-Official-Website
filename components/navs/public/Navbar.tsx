'use client';

import useWindowWidth from '@/components/csr/useWindowWidth';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import Image from 'next/image';

export default function Navbar() {
  const width = useWindowWidth();

  return (
    <nav className="bg-gradient-utd-green-transparent backdrop-blur-sm h-[79px] px-[16px] fixed w-full top-0 z-50 flex justify-center items-center rounded-b-[20px]">
      <div className="max-w-7xl w-full flex justify-between items-center lg:gap-[169px]">
        <Image
          src="/assets/logo.svg"
          alt="UTD Logo"
          width={160.95}
          height={44.72}
        />
        <div className="flex justify-between items-center w-full">
          {width > 0 && (width < 1024 ? <MobileView /> : <DesktopView />)}
        </div>
      </div>
    </nav>
  );
}
