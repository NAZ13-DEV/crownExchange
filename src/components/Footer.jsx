import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import TermsModal from "./TermsModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleFeatureClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("features");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#features");
    }
  };

  return (
    <footer className="relative overflow-hidden text-white bg-[#101014] border-t border-yellow-600/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full w-80 h-80 bg-yellow-600/10 -top-40 -right-40 blur-2xl animate-pulse" />
        <div className="absolute rounded-full w-80 h-80 bg-indigo-600/10 -bottom-40 -left-40 blur-2xl animate-pulse" />
      </div>

      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container px-4 py-12 mx-auto"
      >
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-gray-400">
            <motion.li
              whileHover={{ scale: 1.1, color: "#eab308" }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleFeatureClick}
                className="text-base font-medium transition-colors cursor-pointer hover:text-yellow-600"
              >
                Features
              </button>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "#eab308" }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={toggleModal}
                className="text-base font-medium transition-colors cursor-pointer hover:text-yellow-600"
              >
                Terms & Conditions
              </button>
            </motion.li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 transition-colors hover:text-yellow-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 transition-colors hover:text-yellow-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 transition-colors hover:text-yellow-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between pt-6 mt-8 border-t border-gray-200/20 lg:mt-10 md:flex-row">
          <p className="text-sm text-center text-gray-400 md:text-left">
            © {new Date().getFullYear()} Crown Exchange. All Rights Reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="items-center hidden text-yellow-600 transition-colors hover:text-yellow-500 lg:flex"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l-9 9h6v9h6v-9h6l-9-9z" />
            </svg>
            <span className="text-sm font-medium">Scroll to Top</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Terms Modal */}
      {isModalOpen && <TermsModal onClose={() => setIsModalOpen(false)} />}
    </footer>
  );
};

export default Footer;