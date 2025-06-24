// import logo from "../img/logo_light.png"; // Adjust path as necessary
import BigLogo from "../img/BigLogoIcon.png";

const FooterTwo = () => {
  return (
    <footer className="px-4 pt-16 mx-auto duration-300 ease-in-out border bg-slate-900 md:px-24 lg:px-8 border-cyan-800 hover:border-cyan-500 rounded-2xl">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Crown Exchange"
            className="inline-flex items-center"
          >
            <img src={BigLogo} className="h-8" alt="Crown Exchange Logo" />
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-500">
              At Crown Exchange, we provide traders with the tools and insights
              they need to make improved trading decisions. Our platform offers
              comprehensive analytics, performance tracking, and real-time
              market data to help you navigate the forex market with confidence.
            </p>
          </div>
        </div>
        {/* <div>
          <span className="text-base font-bold tracking-wide text-gray-400">
            Social
          </span>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <div className="flex flex-wrap gap-4">
              {[
                {
                  href: "#",
                  icon: "fab fa-whatsapp",
                },
                {
                  href: "#",
                  icon: "fab fa-twitter",
                },
                {
                  href: "#",
                  icon: "fab fa-telegram",
                },
                {
                  href: "#",
                  icon: "fab fa-instagram",
                },
                {
                  href: "#",
                  icon: "fab fa-facebook",
                },
                {
                  href: "#",
                  icon: "fab fa-tiktok",
                },
                {
                  href: "#",
                  icon: "fab fa-linkedin",
                },
                {
                  href: "#",
                  icon: "fab fa-youtube",
                },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-white transition-colors text-[20px] pointer-events-none cursor-not-allowed"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Follow us on our social networks
          </p>
        </div>*/}
      </div> 

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-slate-700 lg:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Crown Exchange | Trademarks and brands
          are the property of their respective owners.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterTwo;
