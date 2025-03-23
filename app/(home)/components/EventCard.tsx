interface EventCardProps {
  title: string;
  date: string;
  location: string;
  variant?: 'main' | 'regular'; // "main" for the featured event, "regular" for other events
}

export default function EventCard({
  title,
  date,
  location,
  variant = 'regular',
}: EventCardProps) {
  const isMainEvent = variant === 'main';

  return (
    <div
      className={`p-2 rounded-lg lg:text-left text-center ${
        isMainEvent
          ? 'text-white bg-none'
          : 'bg-[#1A3E2A] border-[0.96px] border-[#36FF90] text-white'
      }`}
    >
      <h2 className={`font-semibold lg:font-medium ${isMainEvent ? `text-[25px] sm:text-[32px] md:text-[40px] lg:text-[35px] xl:text-[42px] leading-tight` : 'text-xl leading-snug'}`}>
        {title}
      </h2>

      <p
        className={`mt-[0.8rem] ${isMainEvent ? 'text-[13px] md:text-[18px] lg:text-[18px]' : 'text-sm font-normal'}`}
      >
        {date} <br /> {location}
      </p>
    </div>
  );
}
