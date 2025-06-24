import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const TermsModal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-[#101014]/80 backdrop-blur-md"
      id="terms-modal"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-2xl mx-auto overflow-y-auto bg-indigo-950/90 rounded-2xl border border-yellow-600/20 shadow-2xl h-[90vh] lg:max-w-4xl"
      >
        <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent rounded-2xl">
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-yellow-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white md:text-3xl">Terms of Service</h3>
              <span className="text-sm text-gray-400">Last updated: June 2025</span>
            </div>
            <hr className="border-yellow-600/30" />

            {/* Sections */}
            {sections.map(({ title, items, subContent }, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <h4 className="pb-4 mb-4 text-lg font-bold text-yellow-600 border-b border-gray-400/50">
                  {title}
                </h4>
                {items && (
                  <ul className="pl-6 mb-4 space-y-3 text-gray-400 list-disc">
                    {items.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed first-letter:uppercase">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {subContent && (
                  <div className="p-6 my-4 border rounded-lg bg-indigo-900/30 border-yellow-600/20">
                    {subContent.map((text, j) => (
                      <p key={j} className="pb-2 text-sm leading-relaxed text-gray-400">
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const sections = [
  {
    title: "Welcome",
    items: [
      `These Terms of Service (“Terms”) govern your use of Crown Exchange’s platform at https://crownexchange.com (“Platform”). By accessing or using our Platform, you confirm you are at least 18 years old and agree to these Terms. Please read them carefully.`,
    ],
  },
  {
    title: "Key Definitions",
    items: [
      `The following terms are used throughout these Terms:`,
    ],
    subContent: [
      `“Platform” refers to the website and services provided by Crown Exchange.`,
      `“Content” includes all text, images, videos, or other media on the Platform.`,
      `“Users” are individuals or entities registered with an account on the Platform.`,
      `“We” or “Us” refers to Crown Exchange, the Platform’s operator.`,
      `“You” refers to you, our valued User.`,
    ],
  },
  {
    title: "Account Registration",
    items: [
      `To use certain features, you must create an account by providing accurate and complete information.`,
      `Keep your account details updated via your profile settings.`,
      `You are responsible for maintaining the confidentiality of your account and notifying us immediately of any unauthorized use.`,
    ],
  },
  {
    title: "Platform Access",
    items: [
      `Access is granted upon successful registration and account activation.`,
      `Your submission of a registration form is an offer to use our services, subject to our acceptance.`,
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      `All Content on the Platform is owned by Crown Exchange or its licensors and protected by international copyright laws.`,
      `You may view, print, or download Content for personal, non-commercial use, provided you:`,
    ],
    subContent: [
      `Use it solely for personal purposes.`,
      `Do not modify or incorporate it into other works.`,
      `Acknowledge Crown Exchange as the source.`,
    ],
  },
  {
    title: "Usage Guidelines",
    items: [
      `You agree to use the Platform responsibly and in compliance with all applicable laws.`,
      `We are not liable for any damage to your devices or data resulting from Platform use.`,
      `You agree to indemnify us against any claims arising from your misuse of the Platform.`,
    ],
  },
  {
    title: "Availability",
    items: [
      `We strive to keep the Platform accessible but cannot guarantee uninterrupted service.`,
      `Access may be suspended for maintenance or due to external factors like network failures.`,
    ],
  },
  {
    title: "Privacy",
    items: [
      `Our Privacy Policy (https://crownexchange.com/privacy) details how we handle your personal information.`,
      `By using the Platform, you consent to our data practices as outlined in the Privacy Policy.`,
    ],
  },
  {
    title: "Disclaimers",
    items: [
      `The Platform is provided “as is” without warranties of fitness for a specific purpose.`,
      `We do not offer investment advice; any data provided is for informational purposes only.`,
    ],
  },
  {
    title: "Complaints",
    items: [
      `If you’re dissatisfied with our services, please contact us at support@crownexchange.com with your details and concerns.`,
      `We’ll respond promptly to resolve your issue.`,
    ],
  },
  {
    title: "Liability",
    items: [
      `We are not liable for any direct or indirect losses arising from your use of the Platform.`,
    ],
  },
  {
    title: "Governing Law",
    items: [
      `These Terms are governed by the laws of England and Wales, with disputes resolved exclusively in its courts.`,
    ],
  },
  {
    title: "No Partnership",
    items: [
      `These Terms do not create a partnership or agency relationship between you and Crown Exchange.`,
    ],
  },
  {
    title: "Third-Party Rights",
    items: [
      `No third party may enforce these Terms unless explicitly stated.`,
    ],
  },
  {
    title: "Language",
    items: [
      `All communications and Terms are in English.`,
    ],
  },
  {
    title: "Updates to Terms",
    items: [
      `We may update these Terms at any time, with changes posted on the Platform.`,
      `Continued use after updates constitutes acceptance of the new Terms.`,
    ],
  },
  {
    title: "Rights Transfer",
    items: [
      `We may transfer our rights under these Terms without notice, provided your rights remain unaffected.`,
      `If an event beyond our control disrupts service for over a week, we may terminate your account without liability.`,
    ],
  },
];

export default TermsModal;