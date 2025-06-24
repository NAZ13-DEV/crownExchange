import { useEffect, useState } from "react";
import chart1 from "../img/slide1.jpg";
import chart2 from "../img/slide2.jpg";
import chart3 from "../img/slide3.jpg";

const slides = [
  {
    image: chart1,
    heading: "Track Trades Flawlessly",
    text: "Capture every trade with pinpoint accuracy using TradeTab. Log entries, exits, and insights effortlessly to sharpen your strategy and skyrocket success.",
  },
  {
    image: chart2,
    heading: "Ignite Your Trading Power",
    text: "Unleash your potential with TradeTab’s ultimate journal. Dive into performance analytics, spot opportunities, and elevate your trading game to new heights.",
  },
  {
    image: chart3,
    heading: "Conquer with Smart Insights",
    text: "Master the markets with TradeTab’s advanced metrics. Uncover patterns, refine tactics, and make bold, data-driven moves to dominate your trades.",
  },
];

const TradeCaptureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
          return 0;
        }
        return prev + 1.25;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0b0b0e]">
      {/* Glow Effect */}
      <div
        className="absolute top-0 -left-[15rem] z-0 h-full pointer-events-none w-[50rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(247, 166, 0, 0.5) 0%, rgba(99, 102, 241, 0) 80%)",
          filter: "blur(60px)",
          borderRadius: "9999px",
        }}
      />

      <div className="w-full max-w-6xl overflow-hidden shadow-2xl bg-indigo-950/30 rounded-2xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row-reverse">
          {/* Text Content */}
          <div className="flex flex-col justify-center w-full p-6 md:w-1/2 sm:p-8 md:p-10 lg:p-12">
            <h2 className="mb-3 text-2xl font-bold text-white transition-all duration-500 ease-out sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl animate-fade-in">
              {slides[activeIndex].heading}
            </h2>
            <p className="mb-4 text-sm text-gray-400 transition-all duration-500 ease-out sm:mb-6 sm:text-base md:text-lg lg:text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {slides[activeIndex].text}
            </p>

            {/* Progress Bar */}
            <div className="h-1 mb-4 overflow-hidden bg-indigo-900 rounded-full">
              <div
                className="h-full bg-yellow-600 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(247,166,0,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 sm:gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    setProgress(0);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-yellow-600 scale-125" : "bg-indigo-800 hover:bg-indigo-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] md:w-1/2 perspective-1000">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  i === activeIndex
                    ? "opacity-100 transform scale-100 rotate-0"
                    : "opacity-0 transform scale-95 rotate-2"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e]/50 to-transparent rounded-lg" />
              </div>
            ))}
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

export default TradeCaptureSection;