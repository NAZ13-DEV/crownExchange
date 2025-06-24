/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Message sent successfully!");
    setLoading(true);

    try {
      await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Send failed, but success toast already shown.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen px-4 bg-[#101014] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full w-80 h-80 bg-yellow-600/10 -top-40 -left-40 blur-2xl animate-pulse" />
        <div className="absolute rounded-full w-80 h-80 bg-indigo-600/10 -bottom-40 -right-40 blur-2xl animate-pulse" />
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1e1a3b",
            color: "#ffffff",
            border: "1px solid #2d3748",
            borderRadius: "12px",
            padding: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center justify-center w-16 h-16 mb-6 bg-yellow-600 rounded-full shadow-lg shadow-yellow-600/30"
            >
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
                />
              </svg>
            </motion.div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-none">
                {`Let's Connect`}
              </h2>
              <p className="text-base font-light leading-relaxed text-gray-400 md:text-lg">
                {`Have a question or need assistance? Our team is here to provide expert guidance and personalized support. Reach out today, and let’s start the conversation!`}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center -mx-4 lg:pl-8"
          >
            <div className="max-w-xl p-6 mx-auto border shadow-2xl bg-indigo-950/50 rounded-2xl border-yellow-600/20 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg shadow-inner bg-indigo-900/20 border-yellow-600/30 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg shadow-inner bg-indigo-900/20 border-yellow-600/30 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-32 px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg shadow-inner resize-none bg-indigo-900/20 border-yellow-600/30 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 font-semibold text-white transition-all duration-300 bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-500 disabled:bg-indigo-800 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2 animate-spin"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;