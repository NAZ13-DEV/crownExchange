import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const plans = [
  {
    name: "Silver Plan",
    price: "$10,000 - $49,000",
    features: ["5 Trades per Week", "Instant Trading", "Leverage up to 2x"],
  },
  {
    name: "Gold Plan",
    price: "$50,0000 - $149,000",
    features: [
      "10 Trades per Week",
      "Instant Trading",
      "Leverage up to 2x and 5x",
    ],
  },
  {
    name: "Diamond Plan",
    price: "$150,000 - $399,000",
    features: [
      "15 Trades per Week",
      "Instant Trading",
      "Leverage up to 2x, 5x and 10x",
    ],
  },
  {
    name: "Platinum Plan",
    price: "$400,000 - UNLIMITED",
    features: [
      "20 Trades per Week",
      "Instant Trading",
      "Leverage up to 2x, 5x, 10x and 20x",
    ],
  },
];

const PlanCard = ({ plan }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between w-full max-w-xs p-4 transition-all duration-300 border border-indigo-800 shadow-2xl bg-indigo-950/50 rounded-2xl hover:scale-105">
      <div>
        <h3 className="mb-3 text-2xl font-extrabold tracking-wide text-center text-white uppercase">
          {plan.name}
        </h3>
        <p className="mb-6 text-xl font-extrabold text-center text-yellow-500">
          {plan.price}
        </p>
        <ul className="space-y-3 text-base font-semibold text-gray-300">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle size={20} className="text-yellow-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => navigate("/register")}
        className="w-full py-3 mt-8 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400"
      >
        Join Plan
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
    <div className="bg-[#101014] px-4 py-14 min-h-screen">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {plans.map((plan, index) => (
          <PlanCard plan={plan} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;