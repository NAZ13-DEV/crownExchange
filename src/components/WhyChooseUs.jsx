import mt4Logo from "../img/mt45-logo.png";
import BigLogo from "../img/BigLogoIcon.png";
import globe from "../img/globe.png";

const pins = [
  { top: "35%", left: "27%", city: "New York City", country: "USA" },
  { top: "45%", left: "17%", city: "Mexico City", country: "Mexico" },
  { top: "37%", left: "77%", city: "Tokyo", country: "Japan" },
  { top: "33%", left: "45%", city: "London", country: "U.K." },
  { top: "50%", left: "47%", city: "Melbourne", country: "Australia" },
  { top: "27%", left: "54%", city: "Frankfurt", country: "Germany" },
  { top: "27%", left: "48%", city: "Madrid", country: "Spain" },
  { top: "37%", left: "55%", city: "Istanbul", country: "Turkey" },
  { top: "35%", left: "72%", city: "Delhi", country: "India" },
  { top: "38%", left: "64%", city: "Dubai", country: "UAE" },
  { top: "57%", left: "32%", city: "São Paulo", country: "Brazil" },
  { top: "40%", left: "70%", city: "Mumbai", country: "India" },
  { top: "32%", left: "55%", city: "Kuala Lumpur", country: "Malaysia" },
];

const WhyChooseUs = () => {
  return (
    <section
      id="whychoose"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[radial-gradient(at_top_center,_#1e1a3b_0%,_#101014_70%)] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full sm:w-96 sm:h-96 bg-yellow-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full sm:w-96 sm:h-96 bg-indigo-600/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-500 to-indigo-500 animate-gradient-x">
            Why Choose Us
          </h2>
          <p className="max-w-3xl mx-auto mt-3 text-sm text-gray-300 sm:text-base md:text-lg lg:text-xl">
            Experience Crown Exchange's global reach with cutting-edge platforms and unmatched reliability.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 sm:gap-8 md:gap-10">
          {/* Logos Card - Spans 2 columns on lg screens */}
          <div className="p-6 transition-all duration-500 border shadow-xl lg:col-span-2 bg-gradient-to-br from-indigo-950/30 to-indigo-900/20 backdrop-blur-lg rounded-2xl sm:p-8 md:p-10 border-indigo-700/20 hover:shadow-2xl">
            <h3 className="mb-6 text-lg font-semibold text-center text-white sm:text-xl md:text-2xl lg:text-3xl sm:mb-8">
              Trusted Platforms
            </h3>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:gap-8">
              {/* Logo 1 */}
              <div className="relative group">
                <img
                  src={mt4Logo}
                  alt="MetaTrader 4/5"
                  className="w-16 transition-transform duration-300 sm:w-20 md:w-24 lg:w-28 group-hover:scale-110"
                />
                <span className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full sm:w-8 sm:h-8 left-1/2 top-1/2 blur-xl animate-ping" />
              </div>

              {/* Animated Line */}
              <div className="w-20 sm:w-24 md:w-32 h-[2px] sm:h-12 sm:w-[2px] bg-indigo-700/30 relative overflow-hidden">
                <div className="absolute w-full rounded-full h-1/2 sm:w-1/2 sm:h-full bg-gradient-to-r from-yellow-500 to-indigo-500 animate-line-slide" />
              </div>

              {/* Logo 2 */}
              <div className="relative group">
                <img
                  src={BigLogo}
                  alt="TradeTab"
                  className="w-16 transition-transform duration-300 sm:w-20 md:w-24 lg:w-28 group-hover:scale-110"
                />
                <span className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 rounded-full sm:w-8 sm:h-8 left-1/2 top-1/2 blur-xl animate-ping" />
              </div>
            </div>
          </div>

          {/* Globe Card - Spans 3 columns on lg screens */}
          <div className="p-6 transition-all duration-500 border shadow-xl lg:col-span-3 bg-gradient-to-br from-indigo-950/30 to-indigo-900/20 backdrop-blur-lg rounded-2xl sm:p-8 md:p-10 border-indigo-700/20 hover:shadow-2xl">
            <h3 className="mb-6 text-lg font-semibold text-center text-white sm:text-xl md:text-2xl lg:text-3xl sm:mb-8">
              Global Presence
            </h3>
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] perspective-1000">
              <img
                src={globe}
                alt="world map"
                className="absolute inset-0 object-contain w-full h-full transition-transform duration-700 transform hover:scale-105 hover:-rotate-2"
              />
              {pins.map((pin, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center text-xs text-yellow-500 sm:text-sm md:text-base animate-fade-in group"
                  style={{
                    top: pin.top,
                    left: pin.left,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-indigo-950/70 border border-yellow-500/50 rounded-lg whitespace-nowrap transform transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-900/80 shadow-md hover:shadow-lg">
                    <strong className="block text-xs font-medium text-white sm:text-sm md:text-base">
                      {pin.city}
                    </strong>
                    <span className="text-yellow-400 text-[10px] sm:text-[11px] md:text-xs">
                      {pin.country}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 mt-1 rotate-45 bg-yellow-500 shadow-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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
          animation: gradient-x 8s linear infinite;
        }
        @keyframes line-slide {
          0% {
            transform: translateX(-100%) translateY(0);
          }
          100% {
            transform: translateX(100%) translateY(0);
          }
        }
        .animate-line-slide {
          animation: line-slide 2s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;