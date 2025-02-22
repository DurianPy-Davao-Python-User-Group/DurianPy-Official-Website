import { Container } from '../ui/container';

export function CTASection() {
  return (
    <section className="py-16 bg-dark-green">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center p-10">
          {/* Since tailwind does not directly support gradient transitions, use position absolute and manipulate opacity to mimic transition effect. */}
          <a href='https://www.meetup.com/durianpy/' className="h-96 group rounded-2xl relative">
            {/* Dark green backgroun */}
            <div className='w-full h-full bg-gradient-to-b from-[#1a3d29] to-[#133120] absolute group-hover:opacity-0 duration-300 rounded-2xl z-10'></div>
            {/* Yellow Background */}
            <div className='w-full h-full bg-gradient-to-b from-[#a5850a] to-[#7f5f14] from-25% to-80% absolute duration-300 rounded-2xl z-0'></div>
            {/* Green top border of the card. */}
            <div className='absolute top-0 left-0 bottom-0 right-0 border-t-2 border-[#3EB372] z-20 rounded-2xl h-96 group-hover:border-opacity-0 transition-all duration-300'></div>
            {/* Yellow top border of the card. */}
            <div className='absolute top-0 left-0 bottom-0 right-0 border-t-[5px] border-primary z-20 rounded-2xl h-96 group-hover:border-t-[5px] border-opacity-0 group-hover:border-opacity-100 transition-all duration-300'></div>

            <div className="font-bold p-6 text-5xl break-words absolute left-0 right-0 z-20">
              <h1 className="text-white"> Join Our </h1>
              <h1 className="text-primary"> Community </h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 177" fill="none" className='absolute bottom-0 px-2 z-20'>
              <path d="M176 99.4688C199.839 99.4688 220.899 105.172 238.01 112.631C253.805 119.651 263.75 135.446 263.75 152.557V176.25H88.25V152.704C88.25 135.446 98.195 119.651 113.99 112.777C131.101 105.173 152.161 99.4688 176 99.4688ZM59 103.125C75.0875 103.125 88.25 89.9625 88.25 73.875C88.25 57.7875 75.0875 44.625 59 44.625C42.9125 44.625 29.75 57.7875 29.75 73.875C29.75 89.9625 42.9125 103.125 59 103.125ZM75.5263 119.213C70.115 118.335 64.7038 117.75 59 117.75C44.5213 117.75 30.7738 120.821 18.3425 126.232C7.52 130.913 0.5 141.443 0.5 153.289V176.25H66.3125V152.704C66.3125 140.565 69.6763 129.158 75.5263 119.213ZM293 103.125C309.087 103.125 322.25 89.9625 322.25 73.875C322.25 57.7875 309.087 44.625 293 44.625C276.913 44.625 263.75 57.7875 263.75 73.875C263.75 89.9625 276.913 103.125 293 103.125ZM351.5 153.289C351.5 141.443 344.48 130.913 333.658 126.232C321.226 120.821 307.479 117.75 293 117.75C287.296 117.75 281.885 118.335 276.474 119.213C282.324 129.158 285.688 140.565 285.688 152.704V176.25h151.5V153.289ZM176 0.75C200.277 0.75 219.875 20.3475 219.875 44.625C219.875 68.9025 200.277 88.5 176 88.5C151.723 88.5 132.125 68.9025 132.125 44.625C132.125 20.3475 151.723 0.75 176 0.75Z" fill="url(#paint0_linear_363_675)" />
              <defs>
                <linearGradient id="paint0_linear_363_675" x1="176" y1="0.75" x2="176" y2="176.25" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFC201" />
                  <stop offset="1" stopColor="#FFE9A4" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          <div className="p-6 bg-green-700 rounded-lg">
            <div className="mb-4">
              <span className="text-yellow-400 text-4xl">📅</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Attend Events</h3>
            <p className="text-green-100">Join our workshops and meetups</p>
          </div>

          <div className="p-6 bg-green-700 rounded-lg">
            <div className="mb-4">
              <span className="text-yellow-400 text-4xl">🎤</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Give a Talk</h3>
            <p className="text-green-100">Share your knowledge with others</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
