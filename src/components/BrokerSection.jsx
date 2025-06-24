import admiral from "../img/admiral.jpg";
import alpari from "../img/alpari.jpg";
import avatrade from "../img/avatrade.jpg";
import axi from "../img/axi.jpg";
import charles from "../img/charles.jpg";
import city from "../img/city.jpg";
import cmc from "../img/cmc.jpg";
import darwinex from "../img/darwinex.jpg";
import decode from "../img/decode.jpg";
import dukascopy from "../img/dukascopy.jpg";
import easy from "../img/easy.jpg";
import etoro from "../img/etoro.jpg";
import fbs from "../img/fbs.jpg";
import forex from "../img/forex.jpg";
import fxcm from "../img/fxcm.jpg";
import fxotp from "../img/fxotp.jpg";
import fxpro from "../img/fxpro.jpg";
import fxtm from "../img/fxtm.jpg";
import fxview from "../img/fxview.jpg";
import gkg from "../img/gkg.jpg";
import hf from "../img/hf.jpg";
import ig from "../img/ig.jpg";
import instaforex from "../img/instaforex.jpg";
import libertex from "../img/libertex.jpg";
import m4 from "../img/m4.jpg";
import oanda from "../img/oanda.jpg";
import octa from "../img/octa.jpg";
import xm from "../img/xm.jpg";

const rowLogos = [
  [admiral, alpari, avatrade, axi, charles, city, cmc],
  [darwinex, decode, dukascopy, easy, etoro, fbs, forex],
  [fxcm, fxotp, fxpro, fxtm, fxview, gkg, hf],
  [ig, instaforex, libertex, m4, oanda, octa, xm],
];

const BrokersSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#101014] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Glowing Right Circle */}
      <div
        className="absolute top-0 -right-[15rem] z-0 h-full pointer-events-none w-[50rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(247, 166, 0, 0.5) 0%, rgba(99, 102, 241, 0) 80%)",
          filter: "blur(60px)",
          borderRadius: "9999px",
        }}
      />

      {/* Section Content */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-12">
        {/* Title Section */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl sm:mb-4">
            <span className="bg-clip-text bg-gradient-to-r from-yellow-600 to-indigo-600 animate-gradient-x">
              Trade with 1,200+ Top Brokers
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
            Discover trusted brokers, read reviews, and engage with their communities effortlessly.
          </p>
          <div className="flex items-center justify-center gap-2 pt-4 sm:gap-3 sm:pt-6 animate-pulse-slow">
            {[1, 2, 3, 4, 5].map((i) => {
              let sizeClass = "w-6 h-6 sm:w-8 sm:h-8";
              if (i === 2 || i === 4) sizeClass = "w-8 h-8 sm:w-10 sm:h-10";
              if (i === 3) sizeClass = "w-10 h-10 sm:w-12 sm:h-12";
              return (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`text-yellow-600 ${sizeClass} transition-transform duration-300 hover:scale-110`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              );
            })}
          </div>
        </div>

        {/* Infinite Logo Sliders */}
        <div className="space-y-4 sm:space-y-6">
          {rowLogos.map((logos, rowIndex) => (
            <div
              key={rowIndex}
              className="relative w-full overflow-hidden rounded-lg"
            >
              <div
                className={`flex w-max items-center ${
                  rowIndex % 2 === 0
                    ? "animate-marquee-left"
                    : "animate-marquee-right"
                }`}
              >
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={`${rowIndex}-${i}`}
                    className="flex items-center justify-center px-4 py-2 mx-2 transition-all duration-300 rounded-md sm:px-6 md:px-8 lg:px-10 sm:py-3 bg-indigo-900/20 backdrop-blur-lg sm:mx-3 hover:scale-105 hover:shadow-lg hover:bg-indigo-900/30"
                  >
                    <img
                      src={logo}
                      alt={`Broker ${i}`}
                      className="object-contain w-20 h-auto transition-transform duration-300 rounded-sm sm:w-24 md:w-28 lg:w-32"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style >{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        @keyframes pulse-slow {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
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
      `}</style>
    </div>
  );
};

export default BrokersSection;