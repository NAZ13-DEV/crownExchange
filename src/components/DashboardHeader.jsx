import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../img/logo_light.png";
import ProfileFallback from "../../public/images/userProfile.svg";
import MobileMenuDashboard from "./MobileMenuDashboard";
import DashboardWidget from "./DashboardWidget";
import Deposit from "./Deposit";
import Exchange from "./Exchange";
import History from "./History";
import Withdrawal from "./Withdrawal";
import Subscribe from "./Subscribe";
import Notifications from "./Notifications";
import Settings from "./Settings";
import UploadPhoto from "./UploadPhoto";
import Logout from "./Logout";
import Kyc from "./Kyc";
import { fetchUserDetails } from "../redux/slices/fetchUserSlice";
import { fetchNotifications } from "../redux/slices/fetchNotiSlice";
import Software from "./Software";

const GreenLoader = () => (
  <div className="flex items-center justify-center h-[300px] text-green-400 text-lg">
    Loading...
  </div>
);

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const logoutTimerRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.fetchUserDetails);
  const { notifications } = useSelector((state) => state.notifications);

  const isKycTrue = useMemo(() => {
    return (
      user?.kyc === "true" &&
      user?.kyc !== "" &&
      user?.kyc !== null &&
      user?.kyc !== "false" &&
      user?.verifi !== "" &&
      user?.verifi !== null &&
      user?.verifi !== "false" &&
      !(user?.kyc === "pending" && user?.verifi === "false") &&
      user?.verifi !== "pending"
    );
  }, [user]);

  useEffect(() => {
    const storedUserId = localStorage.getItem("uId");
    if (storedUserId) {
      dispatch(fetchUserDetails(storedUserId)).finally(() => setLoading(false));
      dispatch(fetchNotifications());
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!profileRef.current?.contains(event.target))
        setShowProfileMenu(false);
      if (!notificationRef.current?.contains(event.target))
        setShowNotificationDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (user) {
      if (isKycTrue) {
        setActiveTab(
          storedTab && storedTab !== "logout" ? storedTab : "dashboard"
        );
      } else {
        setActiveTab("kyc");
        localStorage.removeItem("activeTab");
      }
    }
  }, [user, isKycTrue]);

  useEffect(() => {
    if (
      location.state?.fromUpload ||
      location.state?.fromWithdraw ||
      location.state?.photoUpload
    ) {
      setActiveTab("history");
      localStorage.setItem("activeTab", "history");
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const handleTabChange = useCallback(
    (tab) => {
      if (!isKycTrue && tab !== "kyc" && tab !== "logout") return;
      setActiveTab(tab);
      if (tab !== "logout") {
        localStorage.setItem("activeTab", tab);
      } else {
        localStorage.removeItem("activeTab");
      }
      setIsOpen(false);
    },
    [isKycTrue]
  );

  const profileImage = user?.img || ProfileFallback;

  const tabComponents = {
    dashboard: <DashboardWidget />,
    deposit: <Deposit />,
    market: <Exchange />,
    history: <History />,
    withdrawal: <Withdrawal />,
    subscription: <Subscribe />,
    software: <Software />,
    notifications: <Notifications />,
    settings: <Settings />,
    uploadPhoto: <UploadPhoto />,
    logout: <Logout />,
    kyc: isKycTrue ? null : <Kyc />,
  };

  const resetInactivityTimer = useCallback(() => {
    clearTimeout(logoutTimerRef.current);
    logoutTimerRef.current = setTimeout(() => {
      localStorage.removeItem("uId");
      localStorage.removeItem("activeTab");
      navigate("/login");
    }, 1800000);
  }, [navigate]);

  useEffect(() => {
    resetInactivityTimer();
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];
    const handleActivity = () => resetInactivityTimer();
    events.forEach((e) => window.addEventListener(e, handleActivity));
    return () => {
      clearTimeout(logoutTimerRef.current);
      events.forEach((e) => window.removeEventListener(e, handleActivity));
    };
  }, [resetInactivityTimer]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="flex items-center justify-between px-6 py-3 shadow-md bg-gradient-to-r from-green-500 to-blue-700">
          {/* <p className="text-xl font-bold tracking-wide text-white">Example Mode</p> */}
        </div>

        <div className="flex items-center justify-between px-5 py-3 bg-[#0a0f1f] border-b border-gray-800 shadow">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-white lg:hidden"
            >
              <i className="fas fa-bars" />
            </button>
            <button onClick={() => handleTabChange("dashboard")}>
              <img src={logo} alt="logo" className="h-9" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotificationDropdown((prev) => !prev)}
                className="relative flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full md hover:ring-2 hover:ring-green-400 lg:w-10"
              >
                <i className="text-lg text-white fas fa-bell" />
                {notifications.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-gray-900" />
                )}
              </button>
              {showNotificationDropdown && (
                <div className="absolute right-0 mt-3 xxs:left-0 w-56 xxs:w-40 md:w-80 bg-[#121827] text-white rounded-lg border border-gray-700 shadow-xl p-4 z-50 max-h-[300px] overflow-y-auto">
                  <h3 className="pb-2 mb-3 text-lg font-semibold border-b border-gray-600">
                    Notifications
                  </h3>
                  {notifications.length === 0 ? (
                    <p className="text-sm text-gray-400">
                      No new notifications
                    </p>
                  ) : (
                    notifications.slice(0, 7).map((item) => (
                      <div
                        key={item.id}
                        className="pb-2 mb-3 border-b border-gray-700"
                      >
                        <p className="font-semibold">{item.messageHeader}</p>
                        <p className="text-xs text-gray-400">{item.content}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <div className="relative" ref={profileRef}>
              <div
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setShowProfileMenu((prev) => !prev)}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-8 h-8 transition duration-200 border-2 border-green-500 rounded-full sm:w-10 sm:h-10 group-hover:ring-2 group-hover:ring-green-400"
                />
                <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[100px] sm:max-w-none">
                  {user?.firstName} {user?.last_Name}
                </p>
              </div>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 sm:mt-3 w-48 sm:w-56 bg-[#121827] text-white rounded-lg shadow-xl border border-gray-700 z-50">
                  <div className="px-3 py-2 border-b border-gray-600 sm:px-4 sm:py-3">
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      Welcome
                    </p>
                    <p className="text-sm font-semibold text-white truncate">
                      {user?.firstName} {user?.last_Name}
                    </p>
                  </div>

                  <Link
                    onClick={() => handleTabChange("settings")}
                    className="block px-3 py-2 text-xs transition-colors duration-150 sm:px-4 sm:text-sm hover:bg-gray-800"
                  >
                    <i className="mr-2 text-gray-400 fas fa-cog" /> Settings
                  </Link>

                  <button
                    onClick={() => handleTabChange("logout")}
                    className="block w-full px-3 py-2 text-xs text-left text-red-400 transition-colors duration-150 sm:px-4 sm:text-sm hover:bg-red-900 hover:text-white"
                  >
                    <i className="mr-2 fas fa-sign-out-alt" /> Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex px-6 py-3 bg-[#050A1D]/90 border-t border-[#1e293b] shadow-md backdrop-blur-md">
          <ul className="flex gap-8 text-white text-[16px] font-medium tracking-wide">
            {[
              ["Dashboard", "dashboard"],
              ["Deposit", "deposit"],
              ["Market", "market"],
              ["History", "history"],
              ["Withdrawal", "withdrawal"],
              ["Investmant Plan", "subscription"],
              ["Subscription", "software"],
              ["Notifications", "notifications"],
              ["Profile", "settings"],
              ["Upload Profile Pic", "uploadPhoto"],
            ].map(([label, id]) => (
              <li
                key={id}
                onClick={() => handleTabChange(id)}
                className={`cursor-pointer hover:text-green-400 hover:underline transition-colors ${
                  !isKycTrue && id !== "logout"
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {isOpen && (
        <MobileMenuDashboard
          onClose={() => setIsOpen(false)}
          scrollToSection={handleTabChange}
        />
      )}

      <main className="px-4 pt-10 min-h-[70vh] bg-[#0a0f1f]">
        {loading ? <GreenLoader /> : tabComponents[activeTab]}
      </main>
    </>
  );
};

export default DashboardHeader;
