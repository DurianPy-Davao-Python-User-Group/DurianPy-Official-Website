interface EventCardProps {
    title: string;
    date: string;
    location: string;
  }
  
  const EventCard: React.FC<EventCardProps> = ({ title, date, location }) => {
    return (
      <div className="bg-green-900 opacity-80 p-4 rounded-lg text-white border-green-500 border-[2px]">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm opacity-80">
            {date}
            <br />
            {location}
        </p>
      </div>
    );
  };
  
  export default EventCard;  