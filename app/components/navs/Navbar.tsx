import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gradient-utd-green-transparent backdrop-blur-sm h-[79px] px-[16px] fixed w-full top-0 z-50 flex justify-center items-center rounded-b-[20px]">
      <div className='max-w-7xl w-full flex justify-between items-center gap-[169px]'>
        <Image
          src="/assets/logo.svg"
          alt="UTD Logo"
          width={160.95}
          height={44.72}
        />
        <div className="flex justify-between items-center text-tabs-navbar text-white w-full">
          <div className="p-[10px]">Home</div>
          <a
            className="p-[10px]"
            href="https://www.meetup.com/durianpy/"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
          <div className="p-[10px]">Support Us</div>
          <div className="p-[10px]">Events</div>
          <div className="p-[10px]">Speak</div>
          <div className="p-[10px]">Contact Us</div>
        </div>
      </div>
    </nav>
  );
}
