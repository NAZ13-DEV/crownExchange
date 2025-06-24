import dashImage from "../img/dash.jpg";

const FeatureSection = () => {
  const features = [
    {
      title: "Powerful Analytics",
      text: "Refine your trading with cutting-edge data tools for smarter strategies.",
    },
    {
      title: "Completely Free",
      text: "Start today with our free journaling tools to enhance your trading decisions.",
    },
    {
      title: "Next-Gen Technology",
      text: "Experience lightning-fast, synchronized software for unmatched performance.",
    },
    {
      title: "Global Network",
      text: "Connect with traders worldwide through our unique shareable link feature.",
    },
  ];

  return (
    <div className="px-4 bg-[#040405b0]" id="features">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Side */}
          <div className="relative order-first perspective-1000">
            <img
              className="object-cover w-full transition-all duration-500 shadow-xl h-80 sm:h-96 lg:h-full rounded-xl hover:scale-105 hover:shadow-2xl"
              src={dashImage}
              alt="Dashboard Preview"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040405b0]/50 to-transparent rounded-xl" />
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center lg:py-6">
            {features.map((feature, index) => (
              <div className="flex animate-fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center mr-3 sm:mr-4">
                  <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 border border-yellow-600 rounded-full sm:w-10 sm:h-10 hover:bg-yellow-600/20">
                    <svg
                      className="w-3 text-yellow-500 sm:w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <polyline points="19,15 12,22 5,15" />
                    </svg>
                  </div>
                  <div className="w-px h-full bg-yellow-600/50" />
                </div>
                <div className="pt-1 pb-6 sm:pb-8">
                  <p className="mb-1 text-base font-bold text-yellow-500 transition-all duration-300 sm:mb-2 sm:text-lg hover:text-yellow-400">
                    {feature.title}
                  </p>
                  <p className="text-sm text-gray-400 sm:text-base">{feature.text}</p>
                </div>
              </div>
            ))}
            {/* Final Success Step */}
            <div className="flex animate-fade-in" style={{ animationDelay: `${features.length * 0.1}s` }}>
              <div className="flex flex-col items-center mr-3 sm:mr-4">
                <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 bg-yellow-600 border border-indigo-900 rounded-full sm:w-10 sm:h-10 hover:scale-110">
                  <svg
                    className="w-4 text-gray-100 sm:w-6"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-1 text-base font-bold text-yellow-500 transition-all duration-300 sm:mb-2 sm:text-lg hover:text-yellow-400">
                  Achieve Mastery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style >{`
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
          animation: fade-in 0.6s ease-out forwards;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default FeatureSection;