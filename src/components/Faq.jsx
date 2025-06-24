import { useState } from "react";

const faqs = [
  {
    question: "Do I need to download software for Crown Exchange?",
    answer:
      "No way! Crown Exchange is 100% web-based, so you can trade from any device with just an internet connection—no downloads required.",
  },
  {
    question: "Is my data safe with Crown Exchange?",
    answer:
      "Absolutely. We use top-tier encryption and security protocols to keep your data locked tight, prioritizing your privacy every step of the way.",
  },
  {
    question: "How do I monitor my trading performance?",
    answer:
      "Dive into powerful analytics with Crown Exchange. Get detailed reports on trades, profits, losses, and key metrics to sharpen your strategy.",
  },
  {
    question: "Is Crown Exchange suitable for new traders?",
    answer:
      "You bet! Our platform is designed for all levels, with an intuitive interface that makes it easy for beginners to kickstart their trading journey.",
  },
  {
    question: "Can I link multiple broker accounts?",
    answer:
      "Yes, seamlessly! Manage all your broker accounts in one place with Crown Exchange for effortless tracking and analysis.",
  },
  {
    question: "Does Crown Exchange provide live market data?",
    answer:
      "Totally! Stay ahead with real-time market data and updates, giving you the edge to make smart, timely trading decisions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-[#0e0e11]">
      <div
        className="absolute top-0 -left-[15rem] z-0 h-full pointer-events-none w-[50rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(247, 166, 0, 0.5) 0%, rgba(99, 102, 241, 0) 80%)",
          filter: "blur(60px)",
          borderRadius: "9999px",
        }}
      />
      <div className="px-4 py-16 mx-auto max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-screen-xl mb-10 md:mx-auto sm:text-center md:mb-12">
            <div className="mx-auto text-center">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold uppercase bg-yellow-500 rounded-full text-indigo-950 animate-pulse-slow">
                Curious About Trading?
              </p>
            </div>
            <p className="mb-6 text-4xl font-bold leading-none text-center text-white md:text-5xl md:mx-auto animate-fade-in">
              <span className="bg-clip-text bg-gradient-to-r from-yellow-500 to-indigo-600 animate-gradient-x">
                Your Questions, Answered
              </span>
            </p>
            <p className="text-base text-gray-400 md:text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
             { `We've got you covered with clear, concise answers to fuel your trading journey.`}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-300 border-b rounded-lg shadow-sm border-yellow-600/50 bg-indigo-950/20 hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  type="button"
                  aria-label="Toggle item"
                  title="Toggle item"
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full p-4 sm:p-5 focus:outline-none"
                >
                  <p className="text-base font-medium text-white transition-colors duration-200 sm:text-lg hover:text-yellow-500">
                    {item.question}
                  </p>
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-3 sm:w-4 text-yellow-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="2,7 12,17 22,7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-5 ${
                    openIndex === index ? "max-h-40 py-2 sm:py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-yellow-500 sm:text-base">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
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
        @keyframes pulse-slow {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
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

export default Faq;