import { Container } from '../ui/Container';

export function StatsAndReviews() {
  return (
    <section className="bg-green-900 py-16">
      <Container>
        <div className="flex flex-col items-center px-8">
          {/* Section Title */}
          <div className="flex flex-col items-center text-3xl font-bold text-white pb-7">
            <div className="flex">
              <h2 className="pr-2">Statistics</h2>
              <h2 className="text-midoriGreen">&</h2>
            </div>
            <h2 className="text-centerStage">Reviews</h2>
          </div>

          {/* Section Description */}
          <div className="flex justify-center text-center pb-7 px-2">
            <p>
              <span className="font-bold">DurianPy</span> is a community for
              Python enthusiasts to learn, share, and connect through monthly
              meetups, workshops, and events. We collaborate with organizations
              to bring valuable learning experiences to developers of all
              levels.
            </p>
          </div>

          {/* Section Statistics */}
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="bg-green-900 p-6 border border-white rounded-lg grid place-items-center">
              <div className="text-center">
                <div className="text-[41px] font-bold text-white mb-2">20+</div>
                <div className="text-xs">Active Members</div>
              </div>
            </div>

            <div className="row-span-2 bg-green-900 p-6 border border-white rounded-lg grid place-items-center">
              <div className="text-center">
                <div className="text-[41px] text-4xl font-bold text-white mb-2">
                  20+
                </div>
                <div className="text-xs">Active Members</div>
              </div>
            </div>

            <div className="bg-green-900 p-6 border border-white rounded-lg grid place-items-center">
              <div className="text-center">
                <div className="text-[41px] font-bold text-white mb-2">12</div>
                <div className="text-xs">Monthly Meetup Attendees</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
