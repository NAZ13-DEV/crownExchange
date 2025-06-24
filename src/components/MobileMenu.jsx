import PropTypes from "prop-types";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
// import Logo from "../img/logo_1.png";
import BigLogo from "../img/BigLogoIcon.png";


const MobileMenu = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col w-full max-w-xs p-6 text-white backdrop-blur-lg" data-aos="fade-right">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <Link to={"/home"} className="flex items-center space-x-2 text-lg font-bold">
          <img src={BigLogo} alt="Crown Exchange logo" className="w-24" />
          {/* <span className="text-green-400 ">Trade</span>Tab */}
        </Link>
        <button onClick={onClose} aria-label="Close menu">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <ul className="space-y-4 font-medium">
        {[
          ["Home", "/home"],
          ["Metrics", "/metrics"], 
          ["Forex Calculator", "/forexCalculator"],
          ["Free University", "/freeUniversity"],
        ].map(([label, path]) => (
          <li key={path}>
            <Link to={path} onClick={onClose} className="block hover:text-[#F0B90B]">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-8">
        <Link to="/login" onClick={onClose}>
          <span className="px-5 py-2 transition border border-white rounded-full text-slate-200 hover:bg-white hover:text-black w-fit bg-[#181A20]">
            Login
          </span>
        </Link>
        <div></div>
        <Link to="/register" onClick={onClose}>
          <span className="px-5 py-2 transition border border-white rounded-full text-slate-200 hover:bg-white hover:text-black w-fit bg-[#181A20]">
            Register
          </span>
        </Link>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
