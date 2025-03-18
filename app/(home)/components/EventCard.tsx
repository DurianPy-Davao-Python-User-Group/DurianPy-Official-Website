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
      className={`p-2 rounded-lg ${
        isMainEvent
          ? 'text-white bg-none'
          : 'bg-[#1A3E2A] border-[0.96px] border-[#36FF90] text-white'
      }`}
    >
      <h2 className={`font-medium ${isMainEvent ? 'text-[40px]' : 'text-xl'}`}>
        {title}
      </h2>
      <p
        className={`mt-[0.3rem] ${isMainEvent ? 'text-lg' : 'text-sm font-normal'}`}
      >
        {date} <br /> {location}
      </p>
    </div>
  );
}
