/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, clearUserState } from "../redux/slices/fetchUserSlice";
import SoftwareDeposit from "./SoftwareDeposit";

const SubscribeSoftware = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.fetchUserDetails);
  const [mounted, setMounted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalSoftware, setModalSoftware] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const storedId = localStorage.getItem("uId");
      if (storedId) {
        dispatch(fetchUserDetails(storedId));
      }
    }
    return () => dispatch(clearUserState());
  }, [dispatch, mounted]);

  const handleUnavailableClick = (softwareName) => {
    setModalSoftware(softwareName);
    setShowModal(true);
  };

  if (!mounted) return null;

  if (selectedPlan) {
    return <SoftwareDeposit plan={selectedPlan.plan} price={selectedPlan.amount}  />;
  }

  const softwares = [
    {
      name: "Premium Software",
      amount: 50000,
    },
    {
      name: "Elite Software",
      amount: 100000,
    },
    { name: "Ultra Software" },
    { name: "Royal Software" },
    { name: "Titanium Software" },
    { name: "Infinity Software" },
  ];

  return (
    <div className="min-h-screen bg-[#050A1D] p-4 lg:p-10">
      <div className="my-4 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
        SOFTWARE PACKAGES
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {softwares.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#0A132A] to-[#0F1B38] rounded-2xl shadow-lg p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-2xl border border-emerald-700"
          >
            <h2 className="mb-2 text-xl font-bold text-white uppercase">{item.name}</h2>

            <div className="mt-6">
              <button
                onClick={() =>
                  item.amount
                    ? setSelectedPlan({ plan: item.name, amount: item.amount })
                    : handleUnavailableClick(item.name)
                }
                className={`w-full px-4 py-2 font-medium text-white transition rounded-md ${
                  item.amount
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300"
                    : "bg-emerald-800 hover:bg-emerald-700"
                }`}
              >
                {item.amount ? "Subscribe Now" : "Contact Support"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#0F1B38] border border-emerald-600 rounded-lg p-6 w-full max-w-sm text-center">
            <h3 className="mb-2 text-xl font-semibold text-white">Restricted Software</h3>
            <p className="mb-4 text-gray-300">
              To access <span className="font-semibold text-emerald-400">{modalSoftware}</span>, please contact support.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 mt-2 text-white rounded-md bg-emerald-600 hover:bg-emerald-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribeSoftware;
