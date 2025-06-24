import Logo from "../img/mt45-logo.png";

const Hero = () => {
  return (
    <section className="px-3 py-3 text-center text-white sm:px-4 sm:py-10 md:py-20 lg:py-2">
      <div className="max-w-4xl mx-auto">
        {/* Logo and Sync Badge */}
        <div className="flex flex-col items-center justify-center gap-2 mb-4 sm:flex-row sm:gap-3 md:gap-4 sm:mb-6 md:mb-8 animate-slide-in">
          <div className="relative">
            <img
              className="transition-transform duration-300 rounded-full shadow-lg size-12 sm:size-14 md:size-16 lg:size-18 hover:scale-110 hover:shadow-xl"
              src={Logo}
              alt="Crown Exchange Logo"
            />
            <span className="absolute inset-0 rounded-full bg-[#ffb92e]/20 blur-md animate-pulse-slow" />
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-semibold tracking-wide text-[#ffb92e] bg-indigo-950/70 px-2 sm:px-3 py-1 rounded-full border border-yellow-600/30 transition-all duration-300 hover:bg-indigo-900/80">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"></path>
            </svg>
            <span>Instant Sync</span>
          </div>
        </div>

        {/* User Stats Badge */}
        <div className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base font-medium text-white bg-teal-800/80 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-teal-700/90 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          ⭐ 35,000+ Traders Thriving!
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-xl font-extrabold leading-tight tracking-tight sm:mb-5 md:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          Empower Trades, <span className="text-[#f7a500e7] bg-clip-text bg-gradient-to-r from-[#f7a500e7] to-[#ffb92e] animate-gradient-x">Amplify Wealth</span>
          <br /> & Rule Markets
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto mb-4 text-base text-gray-300 sm:mb-6 md:mb-8 sm:text-lg md:text-xl lg:text-2xl">
          Elevate your trading with Crown Exchange’s intelligent journal for unmatched precision and success.
        </p>
      </div>

      {/* Custom Animations */}
      <style >{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 5s linear infinite;
        }
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        @keyframes pulse-slow {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;