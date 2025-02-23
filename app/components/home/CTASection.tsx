import { Container } from '../ui/container';

export function CTASection() {
  return (
    <section className="py-16 bg-dark-green">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center p-10">
          {/* Since tailwind does not directly support gradient transitions, use position absolute and manipulate opacity to mimic transition effect. */}
          <a
            href="https://www.meetup.com/durianpy/"
            className="h-96 group rounded-2xl relative transition delay-50 duration-300 ease-in-out hover:scale-105"
          >
            {/* Dark green backgroun */}
            <div className="w-full h-full bg-gradient-to-b from-[#1a3d29] to-[#133120] absolute group-hover:opacity-0 duration-300 rounded-2xl z-10"></div>
            {/* Yellow Background */}
            <div className="w-full h-full bg-gradient-to-b from-[#a5850a] to-[#7f5f14] from-25% to-80% absolute duration-300 rounded-2xl z-0"></div>
            {/* Green top border of the card. */}
            <div className="absolute top-0 left-0 bottom-0 right-0 border-t-2 border-[#3EB372] z-20 rounded-2xl h-96 group-hover:border-opacity-0 transition-all duration-300"></div>
            {/* Yellow top border of the card. */}
            <div className="absolute top-0 left-0 bottom-0 right-0 border-t-[5px] border-primary z-20 rounded-2xl h-96 group-hover:border-t-[5px] border-opacity-0 group-hover:border-opacity-100 transition-all duration-300"></div>

            <div className="font-bold p-6 text-4xl break-words absolute left-0 right-0 z-20">
              <h1 className="text-white"> Join Our </h1>
              <h1 className="text-primary"> Community </h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 177"
              fill="none"
              className="absolute bottom-0 px-2 z-20 max-h-60"
            >
              <path
                d="M176 99.4688C199.839 99.4688 220.899 105.172 238.01 112.631C253.805 119.651 263.75 135.446 263.75 152.557V176.25H88.25V152.704C88.25 135.446 98.195 119.651 113.99 112.777C131.101 105.173 152.161 99.4688 176 99.4688ZM59 103.125C75.0875 103.125 88.25 89.9625 88.25 73.875C88.25 57.7875 75.0875 44.625 59 44.625C42.9125 44.625 29.75 57.7875 29.75 73.875C29.75 89.9625 42.9125 103.125 59 103.125ZM75.5263 119.213C70.115 118.335 64.7038 117.75 59 117.75C44.5213 117.75 30.7738 120.821 18.3425 126.232C7.52 130.913 0.5 141.443 0.5 153.289V176.25H66.3125V152.704C66.3125 140.565 69.6763 129.158 75.5263 119.213ZM293 103.125C309.087 103.125 322.25 89.9625 322.25 73.875C322.25 57.7875 309.087 44.625 293 44.625C276.913 44.625 263.75 57.7875 263.75 73.875C263.75 89.9625 276.913 103.125 293 103.125ZM351.5 153.289C351.5 141.443 344.48 130.913 333.658 126.232C321.226 120.821 307.479 117.75 293 117.75C287.296 117.75 281.885 118.335 276.474 119.213C282.324 129.158 285.688 140.565 285.688 152.704V176.25h151.5V153.289ZM176 0.75C200.277 0.75 219.875 20.3475 219.875 44.625C219.875 68.9025 200.277 88.5 176 88.5C151.723 88.5 132.125 68.9025 132.125 44.625C132.125 20.3475 151.723 0.75 176 0.75Z"
                fill="url(#paint0_linear_363_675)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_363_675"
                  x1="176"
                  y1="0.75"
                  x2="176"
                  y2="176.25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC201" />
                  <stop offset="1" stopColor="#FFE9A4" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          <a
            href="https://www.meetup.com/durianpy/events/"
            className="h-96 group rounded-2xl relative transition delay-50 duration-300 ease-in-out hover:scale-105"
          >
            {/* Dark green backgroun */}
            <div className="w-full h-full bg-gradient-to-b from-[#1a3d29] to-[#133120] absolute group-hover:opacity-0 duration-300 rounded-2xl z-10"></div>
            {/* Yellow Background */}
            <div className="w-full h-full bg-gradient-to-b from-[#a5850a] to-[#7f5f14] from-25% to-80% absolute duration-300 rounded-2xl z-0"></div>
            {/* Green top border of the card. */}
            <div className="absolute top-0 left-0 bottom-0 right-0 border-t-2 border-[#3EB372] z-20 rounded-2xl h-96 group-hover:border-opacity-0 transition-all duration-300"></div>
            {/* Yellow top border of the card. */}
            <div className="absolute top-0 left-0 bottom-0 right-0 border-t-[5px] border-primary z-20 rounded-2xl h-96 group-hover:border-t-[5px] border-opacity-0 group-hover:border-opacity-100 transition-all duration-300"></div>

            <div className="font-bold p-6 text-4xl break-words absolute left-0 right-0 z-20">
              <h1 className="text-white"> Attend </h1>
              <h1 className="text-primary"> Events </h1>
            </div>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 176 195"
                fill="none"
                className="absolute bottom-5 px-2 z-20 max-h-48"
              >
                <path
                  d="M88.0574 116.789C85.3054 116.789 83.0001 115.858 81.1417 113.996C79.2768 112.14 78.3443 109.838 78.3443 107.09C78.3443 104.342 79.2768 102.037 81.1417 100.175C83.0001 98.3188 85.3054 97.3909 88.0574 97.3909C90.8095 97.3909 93.118 98.3188 94.9829 100.175C96.8413 102.037 97.7706 104.342 97.7706 107.09C97.7706 109.838 96.8413 112.14 94.9829 113.996C93.118 115.858 90.8095 116.789 88.0574 116.789ZM49.205 116.789C46.4529 116.789 44.1444 115.858 42.2795 113.996C40.4211 112.14 39.4919 109.838 39.4919 107.09C39.4919 104.342 40.4211 102.037 42.2795 100.175C44.1444 98.3188 46.4529 97.3909 49.205 97.3909C51.957 97.3909 54.2655 98.3188 56.1304 100.175C57.9889 102.037 58.9181 104.342 58.9181 107.09C58.9181 109.838 57.9889 112.14 56.1304 113.996C54.2655 115.858 51.957 116.789 49.205 116.789ZM126.91 116.789C124.158 116.789 121.853 115.858 119.994 113.996C118.129 112.14 117.197 109.838 117.197 107.09C117.197 104.342 118.129 102.037 119.994 100.175C121.853 98.3188 124.158 97.3909 126.91 97.3909C129.662 97.3909 131.967 98.3188 133.826 100.175C135.691 102.037 136.623 104.342 136.623 107.09C136.623 109.838 135.691 112.14 133.826 113.996C131.967 115.858 129.662 116.789 126.91 116.789ZM88.0574 155.586C85.3054 155.586 83.0001 154.655 81.1417 152.793C79.2768 150.937 78.3443 148.635 78.3443 145.887C78.3443 143.139 79.2768 140.837 81.1417 138.981C83.0001 137.119 85.3054 136.188 88.0574 136.188C90.8095 136.188 93.118 137.119 94.9829 138.981C96.8413 140.837 97.7706 143.139 97.7706 145.887C97.7706 148.635 96.8413 150.937 94.9829 152.793C93.118 154.655 90.8095 155.586 88.0574 155.586ZM49.205 155.586C46.4529 155.586 44.1444 154.655 42.2795 152.793C40.4211 150.937 39.4919 148.635 39.4919 145.887C39.4919 143.139 40.4211 140.837 42.2795 138.981C44.1444 137.119 46.4529 136.188 49.205 136.188C51.957 136.188 54.2655 137.119 56.1304 138.981C57.9889 140.837 58.9181 143.139 58.9181 145.887C58.9181 148.635 57.9889 150.937 56.1304 152.793C54.2655 154.655 51.957 155.586 49.205 155.586ZM126.91 155.586C124.158 155.586 121.853 154.655 119.994 152.793C118.129 150.937 117.197 148.635 117.197 145.887C117.197 143.139 118.129 140.837 119.994 138.981C121.853 137.119 124.158 136.188 126.91 136.188C129.662 136.188 131.967 137.119 133.826 138.981C135.691 140.837 136.623 143.139 136.623 145.887C136.623 148.635 135.691 150.937 133.826 152.793C131.967 154.655 129.662 155.586 126.91 155.586ZM20.0656 194.383C14.7234 194.383 10.1485 192.486 6.341 188.69C2.53994 184.888 0.639404 180.319 0.639404 174.985V39.1954C0.639404 33.8608 2.53994 29.2957 6.341 25.5001C10.1485 21.698 14.7234 19.7969 20.0656 19.7969H29.7787V10.0977C29.7787 7.34957 30.708 5.04438 32.5664 3.18212C34.4313 1.32633 36.7398 0.398438 39.4919 0.398438C42.2439 0.398438 44.5524 1.32633 46.4173 3.18212C48.2758 5.04438 49.205 7.34957 49.205 10.0977V19.7969H126.91V10.0977C126.91 7.34957 127.842 5.04438 129.707 3.18212C131.566 1.32633 133.871 0.398438 136.623 0.398438C139.375 0.398438 141.68 1.32633 143.539 3.18212C145.404 5.04438 146.336 7.34957 146.336 10.0977V19.7969H156.049C161.391 19.7969 165.966 21.698 169.774 25.5001C173.575 29.2957 175.475 33.8608 175.475 39.1954V174.985C175.475 180.319 173.575 184.888 169.774 188.69C165.966 192.486 161.391 194.383 156.049 194.383H20.0656ZM20.0656 174.985H156.049V77.9924H20.0656V174.985Z"
                  fill="url(#paint0_linear_363_679)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_363_679"
                    x1="88.0574"
                    y1="0.398437"
                    x2="88.0574"
                    y2="194.383"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFC201" />
                    <stop offset="1" stopColor="#FFE9A4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>

          <a
            href="https://forms.gle/x2cc6CrRhbhDeaxe9"
            className="h-96 group rounded-2xl relative transition delay-50 duration-300 ease-in-out hover:scale-105"
          >
            {/* Dark green backgroun */}
            <div className="w-full h-full bg-gradient-to-b from-[#1a3d29] to-[#133120] absolute group-hover:opacity-0 duration-300 rounded-2xl z-10"></div>
            {/* Yellow Background */}
            <div className="w-full h-full bg-gradient-to-b from-[#a5850a] to-[#7f5f14] from-25% to-80% absolute duration-300 rounded-2xl z-0"></div>
            {/* Green top border of the card. */}
            <div className="absolute top-0 left-0 bottom-0 right-0 border-t-2 border-[#3EB372] z-20 rounded-2xl h-96 group-hover:border-opacity-0 transition-all duration-300"></div>
            {/* Yellow top border of the card. */}
            <div className="absolute top-0 left-0 bottom-0 right-0 border-t-[5px] border-primary z-20 rounded-2xl h-96 group-hover:border-t-[5px] border-opacity-0 group-hover:border-opacity-100 transition-all duration-300"></div>

            <div className="font-bold p-6 text-4xl break-words absolute left-0 right-0 z-20">
              <h1 className="text-white"> Give a </h1>
              <h1 className="text-primary"> Talk </h1>
            </div>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 252 252"
                fill="none"
                className="absolute bottom-0 px-2 z-20 max-h-64 "
              >
                <path
                  d="M220.5 125.737C220.5 146.562 214.419 165.2 202.256 181.65C190.094 198.1 174.212 209.387 154.612 215.512C152.512 216.212 150.719 215.644 149.231 213.806C147.744 211.969 147 209.65 147 206.85C147 204.05 147.612 201.381 148.837 198.844C150.062 196.306 151.9 194.512 154.35 193.462C168 187.862 178.937 178.938 187.162 166.688C195.387 154.438 199.5 140.787 199.5 125.737C199.5 110.687 195.387 97.0375 187.162 84.7875C178.937 72.5375 168 63.6125 154.35 58.0125C151.9 56.9625 150.062 55.1687 148.837 52.6312C147.612 50.0938 147 47.425 147 44.625C147 41.825 147.919 39.5062 149.756 37.6687C151.594 35.8312 153.65 35.35 155.925 36.225C175.175 42.525 190.75 53.8562 202.65 70.2187C214.55 86.5812 220.5 105.087 220.5 125.737ZM73.5 157.5H42C39.025 157.5 36.5312 156.494 34.5187 154.481C32.5062 152.469 31.5 149.975 31.5 147V105C31.5 102.025 32.5062 99.5312 34.5187 97.5187C36.5312 95.5062 39.025 94.5 42 94.5H73.5L108.15 59.85C111.475 56.525 115.281 55.7812 119.569 57.6187C123.856 59.4562 126 62.7375 126 67.4625V184.537C126 189.262 123.856 192.544 119.569 194.381C115.281 196.219 111.475 195.475 108.15 192.15L73.5 157.5ZM147 158.55V92.925C147 91.875 147.262 90.8687 147.787 89.9062C148.312 88.9437 149.012 88.2875 149.887 87.9375C150.762 87.5875 151.637 87.4125 152.512 87.4125C153.387 87.4125 154.262 87.7625 155.137 88.4625C160.912 93.0125 165.375 98.5687 168.525 105.131C171.675 111.694 173.25 118.65 173.25 126C173.25 133.35 171.675 140.262 168.525 146.737C165.375 153.212 160.912 158.637 155.137 163.012C154.262 163.712 153.387 164.062 152.512 164.062C151.637 164.062 150.762 163.887 149.887 163.537C149.012 163.188 148.312 162.531 147.787 161.569C147.262 160.606 147 159.6 147 158.55ZM10.5 63V31.5C10.5 25.725 12.5562 20.7812 16.6687 16.6687C20.7812 12.5562 25.725 10.5 31.5 10.5H63C65.975 10.5 68.4687 11.5063 70.4812 13.5187C72.4937 15.5312 73.5 18.025 73.5 21C73.5 23.975 72.4937 26.4687 70.4812 28.4812C68.4687 30.4937 65.975 31.5 63 31.5H31.5V63C31.5 65.975 30.4937 68.4687 28.4812 70.4812C26.4687 72.4937 23.975 73.5 21 73.5C18.025 73.5 15.5312 72.4937 13.5187 70.4812C11.5063 68.4687 10.5 65.975 10.5 63ZM189 241.5C186.025 241.5 183.531 240.494 181.519 238.481C179.506 236.469 178.5 233.975 178.5 231C178.5 228.025 179.506 225.531 181.519 223.519C183.531 221.506 186.025 220.5 189 220.5H220.5V189C220.5 186.025 221.506 183.531 223.519 181.519C225.531 179.506 228.025 178.5 231 178.5C233.975 178.5 236.469 179.506 238.481 181.519C240.494 183.531 241.5 186.025 241.5 189V220.5C241.5 226.275 239.444 231.219 235.331 235.331C231.219 239.444 226.275 241.5 220.5 241.5H189Z"
                  fill="url(#paint0_linear_363_684)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_363_684"
                    x1="126"
                    y1="10.5"
                    x2="126"
                    y2="241.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFC201" />
                    <stop offset="1" stopColor="#FFE9A4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
