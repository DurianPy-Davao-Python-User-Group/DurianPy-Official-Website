import { Container } from '../ui/container';
import Image from 'next/image';
import joinOurCommunityIcon from "@/public/assets/ctaIcons/join-our-community.svg"
import attendEventsIcon from "@/public/assets/ctaIcons/attend-events.svg"
import giveATalkIcon from "@/public/assets/ctaIcons/give-a-talk.svg"

type CardProps = {
  link: string;
  whiteText: string
  yellowText: string
  svg: string
}

const Card = ({ link, whiteText, yellowText, svg }: CardProps) => {
  return (
    // Since tailwind does not directly support gradient transitions, use position absolute and manipulate opacity to mimic transition effect.
    <a
      href={link}
      className="h-96 group rounded-2xl relative transition delay-50 duration-300 ease-in-out hover:scale-105"
      target='_blank'
    >

      {/* Dark green background */}
      <div className="w-full h-full bg-gradient-to-b from-[#1a3d29] to-[#133120] absolute group-hover:opacity-0 duration-300 rounded-2xl z-10"></div>
      {/* Yellow Background */}
      <div className="w-full h-full bg-gradient-to-b from-[#a5850a] to-[#7f5f14] from-25% to-80% absolute duration-300 rounded-2xl z-0"></div>
      {/* Green top border of the card. */}
      <div className="absolute top-0 left-0 bottom-0 right-0 border-t-2 border-[#3EB372] z-20 rounded-2xl h-96 group-hover:border-opacity-0 transition-all duration-300"></div>
      {/* Yellow top border of the card. */}
      <div className="absolute top-0 left-0 bottom-0 right-0 border-t-[5px] border-primary z-20 rounded-2xl h-96 group-hover:border-t-[5px] border-opacity-0 group-hover:border-opacity-100 transition-all duration-300"></div>

      <div className="font-bold p-6 text-4xl break-words absolute left-0 right-0 z-20">
        <h1 className="text-white">{whiteText}</h1>
        <h1 className="text-primary">{yellowText}</h1>
      </div>

      <div className="flex justify-center">
        <Image
          src={svg}
          alt="UTD Logo"
          className="absolute bottom-0 px-2 z-20 max-h-64"
          priority={true}
        />
      </div>
    </a>
  )
}

export function CTASection() {
  return (
    <section className="py-16 bg-dark-green">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center p-10">
          <Card link={"https://www.meetup.com/durianpy/"} whiteText={"Join Our"} yellowText={"Community"} svg={joinOurCommunityIcon} />
          <Card link={"https://www.meetup.com/durianpy/events/"} whiteText={"Attend"} yellowText={"Events"} svg={attendEventsIcon} />
          <Card link={"https://forms.gle/x2cc6CrRhbhDeaxe9"} whiteText={"Give a"} yellowText={"Talk"} svg={giveATalkIcon} />
        </div>
      </Container>
    </section>
  );
}
