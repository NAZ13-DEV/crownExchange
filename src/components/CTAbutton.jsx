import { Link } from "react-router-dom";

const CTAButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 px-4 py-10 sm:flex-row sm:gap-6 md:gap-10">
      {/* First CTA */}
      <Link 
        to="/login" 
        className="w-full px-6 py-3 text-sm font-semibold text-center text-white transition-all duration-300 ease-in-out bg-yellow-600 rounded-lg sm:text-base md:text-lg sm:w-auto sm:px-10 sm:py-3 hover:bg-yellow-700 hover:shadow-lg lg:w-52"
      >
        Login
      </Link>

      {/* Second CTA */}
      <Link 
        to="/register" 
        className="w-full px-6 py-3 text-sm font-semibold text-center text-white transition-all duration-300 ease-in-out rounded-lg sm:text-base md:text-lg bg-gradient-to-r from-yellow-500 to-indigo-900 sm:w-auto sm:px-10 sm:py-3 hover:from-yellow-600 hover:to-indigo-950 hover:shadow-lg lg:w-52"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default CTAButtons;