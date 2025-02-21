import { Container } from '../ui/Container';

export function StatsAndReviews() {
  return (
    <section className="bg-green-900 py-16">
      <Container>
        <div className="flex flex-col items-center px-8  xl:px-[320px] 2xl:flex-row 2xl:px-0 2xl:justify-between">
          <div className="w-full">
            {/* Section Title */}
            <div className="text-center text-3xl xl:text-7xl font-bold xl:leading-none text-white pb-7">
              <h2>
                Statistics <span className="text-midoriGreen">&</span> <br />{' '}
                <span className="text-centerStage">Reviews</span>
              </h2>
            </div>

            {/* Section Description */}
            <div className="flex justify-center text-center pb-7 xl:pb-[121px] px-2 sm:px-24 md:px-40 lg:px-72 xl:px-32">
              <p>
                <span className="font-bold">DurianPy</span> is a community for
                Python enthusiasts to learn, share, and connect through monthly
                meetups, workshops, and events. We collaborate with
                organizations to bring valuable learning experiences to
                developers of all levels.
              </p>
            </div>
          </div>
          {/* Section Statistics */}
          <div className="grid grid-cols-2 grid-rows-2 gap-5 h-52 2xl:h-max">
            <div className="bg-green-900 p-6 border border-white rounded-lg grid place-content-center">
              <div className="text-center">
                {/* <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-xs">Active Members</div> */}
                <span className="text-4xl font-bold text-white">20 +</span>
                <br />
                <span className="text-xs">Active Members</span>
              </div>
            </div>

            <div className="row-span-2 bg-green-900 p-6 border border-white rounded-lg grid place-content-center">
              <div className="text-center">
                <span className="text-4xl font-bold text-white">20 +</span>
                <br />
                <span className="text-xs">Active Members</span>
              </div>
            </div>

            <div className="bg-green-900 p-6 border border-white rounded-lg grid place-content-center">
              <div className="text-center">
                <span className="text-4xl font-bold text-white">12</span>
                <br />
                <span className="text-xs">Monthly Meetup Attendees</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
