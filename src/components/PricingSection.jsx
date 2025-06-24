import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const plans = [
  {
    name: "Silver Plan",
    price: "$10,000 - $49,000",
    features: ["5 Weekly Trades", "Instant Execution", "Up to 2x Leverage"],
  },
  {
    name: "Gold Plan",
    price: "$50,000 - $149,000",
    features: ["10 Weekly Trades", "Instant Execution", "2x & 5x Leverage"],
  },
  {
    name: "Diamond Plan",
    price: "$150,000 - $399,000",
    features: ["15 Weekly Trades", "Instant Execution", "2x, 5x, 10x Leverage"],
  },
  {
    name: "Platinum Plan",
    price: "$400,000+",
    features: ["20 Weekly Trades", "Instant Execution", "2x, 5x, 10x, 20x Leverage"],
  },
];

const PlanCard = ({ plan }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between w-full max-w-xs p-6 transition-all duration-300 border shadow-xl sm:p-8 bg-indigo-950/60 border-indigo-800/50 rounded-2xl backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:border-yellow-600/30 perspective-1000">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/10 to-transparent rounded-2xl blur-md" />
        <h3 className="relative mb-3 text-xl font-extrabold tracking-wide text-center text-white uppercase sm:mb-4 sm:text-2xl animate-fade-in">
          {plan.name}
        </h3>
        <p className="relative mb-4 text-lg font-extrabold text-center text-yellow-500 sm:mb-6 sm:text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {plan.price}
        </p>
        <ul className="relative space-y-2 text-sm font-semibold text-gray-300 sm:space-y-3 sm:text-base animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 transition-transform duration-300 sm:gap-3 hover:translate-x-1">
              <CheckCircle size={18} sm:size={20} className="flex-shrink-0 text-yellow-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => navigate("/register")}
        className="relative w-full py-2.5 sm:py-3 mt-6 sm:mt-8 text-base sm:text-lg font-bold text-white rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 hover:scale-102 shadow-lg hover:shadow-xl"
      >
        Join Now
      </button>
    </div>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const PricingSection = () => {
  return (
    <div className="bg-[#101014] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="mb-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl sm:mb-4">
            <span className="bg-clip-text bg-gradient-to-r from-yellow-600 to-indigo-600 animate-gradient-x">
              Choose Your Trading Plan
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
            Unlock powerful trading tools tailored to your goals with our flexible plans.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {plans.map((plan, index) => (
            <PlanCard plan={plan} key={index} />
          ))}
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
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default PricingSection;