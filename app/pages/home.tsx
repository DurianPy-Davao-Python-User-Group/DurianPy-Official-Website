import { Hero } from '../components/home/Hero';
import { Carousel } from '../components/home/Carousel';
import { CTASection } from '../components/home/CTASection';
import { StatsAndReviews } from '../components/home/StatsAndReviews';
import { PythonFoundation } from '../components/home/PythonFoundation';
import { Partners } from '../components/home/Partners';
import { Footer } from '../components/home/Footer';

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4 bg-red-500">
        <div className="h-32 w-32 bg-primary text-black flex text-center justify-center">
          primary
        </div>
        <div className="h-32 w-32 bg-dark-green text-white flex text-center justify-center">
          dark-green
        </div>
        <div className="h-32 w-32 bg-white text-black flex text-center justify-center border">
          white
        </div>
        <div className="h-32 w-32 bg-saturated-light-green text-black flex text-center justify-center">
          saturated-light-green
        </div>
        <div className="h-32 w-32 bg-light-dark-green text-white flex text-center justify-center">
          light-dark-green
        </div>
        <div className="h-32 w-32 bg-medium-dark-green text-white flex text-center justify-center">
          medium-dark-green
        </div>
        <div className="h-32 w-32 bg-black-30-opacity text-white flex text-center justify-center">
          black-30-opacity
        </div>

        {/* Background Images */}
        <div className="h-32 w-32 bg-gradient-ltr-lightgreen-transparent text-black flex text-center justify-center">
          ltr-lightgreen-transparent
        </div>
        <div className="h-32 w-32 bg-gradient-utd-lightgreen-darkgreen text-white flex text-center justify-center">
          utd-lightgreen-darkgreen
        </div>
        <div className="h-32 w-32 bg-gradient-ltr-darkgreen-lightgreen text-white flex text-center justify-center">
          ltr-darkgreen-lightgreen
        </div>
        <div className="h-32 w-32 bg-gradient-ltr-solid-yellow-lightyellow text-black flex text-center justify-center">
          ltr-solid-yellow-lightyellow
        </div>
        <div className="h-32 w-32 bg-gradient-ltr-transparent-yellow text-black flex text-center justify-center">
          ltr-transparent-yellow
        </div>
        <div className="h-32 w-32 bg-gradient-utd-transparent-black text-white flex text-center justify-center">
          utd-transparent-black
        </div>
        <div className="h-32 w-32 bg-gradient-middle-green-transparent text-white flex text-center justify-center">
          middle-green-transparent
        </div>
        <div className="h-32 w-32 bg-gradient-ltr-green-transparent text-white flex text-center justify-center">
          ltr-green-transparent
        </div>
        <div className="h-32 w-32 bg-gradient-utd-saturatedGreen-transparent text-black flex text-center justify-center">
          utp-saturatedGreen-transparent
        </div>
        <div className="h-32 w-32 bg-gradient-utd-green-transparent text-white flex text-center justify-center border">
          utd-green-transparent
        </div>
      </div>
      <Hero />
      <Carousel />
      <CTASection />
      <StatsAndReviews />
      <PythonFoundation />
      <Partners />
      <Footer />
    </>
  );
}
