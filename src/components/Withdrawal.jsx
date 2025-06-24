/* eslint-disable no-unused-vars */
import { useState, useEffect, Fragment } from "react";
import api from "../redux/slices/api";
import toast, { Toaster } from "react-hot-toast";
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUserDetails,
  clearUserState,
} from "../redux/slices/fetchUserSlice";

const Withdrawal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [withdrawData, setWithdrawData] = useState({
    payment_mode: "Bitcoin Withdrawal",
    amount: "",
    address: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    country: "",
    swiftCode: "",
    narration: "",
    createdAt: new Date().toLocaleString("en-US", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }),
  });

  const { user } = useSelector((state) => state.fetchUserDetails);

  useEffect(() => {
    const storedUserId = localStorage.getItem("uId");
    if (storedUserId) dispatch(fetchUserDetails(storedUserId));
    return () => dispatch(clearUserState());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWithdrawData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const mode = withdrawData.payment_mode;
    if (
      (mode === "Bitcoin Withdrawal" || mode === "Ethereum Withdrawal") &&
      (!withdrawData.address || !withdrawData.amount)
    ) {
      toast.error("Address and Amount are required for Crypto Withdrawal");
      return false;
    }

    if (mode === "Bank withdrawal") {
      const required = [
        "amount",
        "bankName",
        "accountNumber",
        "accountName",
        "country",
        "swiftCode",
      ];
      for (let field of required) {
        if (!withdrawData[field]) {
          toast.error("All bank fields are required");
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const uId = localStorage.getItem("uId");
    if (!uId) return toast.error("User ID not found");

    const baseData = {
      userId: uId,
      payment_mode: withdrawData.payment_mode,
      amount: withdrawData.amount,
    };

    if (withdrawData.payment_mode === "Bank withdrawal") {
      const bankData = {
        ...baseData,
        bankName: withdrawData.bankName,
        accountNumber: withdrawData.accountNumber,
        accountName: withdrawData.accountName,
        country: withdrawData.country,
        swiftCode: withdrawData.swiftCode,
        narration: withdrawData.narration,
      };

      toast.loading("Processing Bank withdrawal...", { id: "withdrawalToast" });
      api
        .post("bankWithdrawal", bankData)
        .then((res) => {
          if (res.status === 201 && res.data.message === "true") {
            setModalContent(
              <>
                <p className="font-semibold">
                  Dear {user?.firstName} {user?.last_Name},
                </p>
                <p className="mt-2">
                  Your withdrawal request of {user?.currency}
                  {withdrawData?.amount} to your account number{" "}
                  <span className="font-semibold">
                    {bankData?.accountNumber}
                  </span>{" "}
                  in <span className="font-semibold">{bankData?.bankName}</span>{" "}
                  has been successfully initiated and is awaiting approval.
                  Please do not resend your request.
                </p>
              </>
            );
            setShowModal(true);
          }
        })
        .catch(() => toast.error("Bank withdrawal failed"))
        .finally(() => toast.dismiss("withdrawalToast"));
    } else {
      const cryptoData = {
        ...baseData,
        wallet: withdrawData.address,
        createdAt: withdrawData.createdAt,
      };
      const label =
        withdrawData.payment_mode.includes("Ethereum") ? "Ethereum" : "Bitcoin";

      toast.loading(`Processing ${label} withdrawal...`, {
        id: "withdrawalToast",
      });
      api
        .post("CryptoWithdrawal", cryptoData)
        .then((res) => {
          if (res.status === 201 && res.data.message === "true") {
            setModalContent(
              <>
                <p className="font-semibold">
                  Dear {user?.firstName} {user?.last_Name},
                </p>
                <p className="mt-2">
                  Your withdrawal request of {user?.currency}
                  {withdrawData?.amount} to your wallet address{" "}
                  {withdrawData?.address} has been successfully initiated and is
                  awaiting approval. Please do not resend your request.
                </p>
              </>
            );
            setShowModal(true);
          }
        })
        .catch(() => toast.error(`${label} withdrawal failed`))
        .finally(() => toast.dismiss("withdrawalToast"));
    }
  };

  const renderModal = () => {
    if (!showModal) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-[#1e293b] text-white max-w-md w-full rounded-lg p-6 shadow-lg">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold">Withdrawal Submitted</h2>
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/dashboard", { state: { fromWithdraw: true } });
              }}
              className="text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
          <div className="mt-4 space-y-2 text-sm">{modalContent}</div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/dashboard", { state: { fromWithdraw: true } });
              }}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 rounded-md font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#050A1D] flex items-center justify-center p-4 min-h-screen">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#0A132A] rounded-xl p-6 lg:p-10 shadow-lg"
      >
        <h2 className="text-2xl text-white font-bold text-center mb-6">
          Withdraw Funds
        </h2>

        <Tab.Group>
          <Tab.List className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Bitcoin Withdrawal",
              "Ethereum Withdrawal",
              "Bank withdrawal",
            ].map((label, index) => (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold border-b-2 transition-all duration-200 ${
                      selected
                        ? "text-emerald-400 border-emerald-400"
                        : "text-white border-transparent hover:text-emerald-300"
                    }`}
                    onClick={() =>
                      setWithdrawData({
                        ...withdrawData,
                        payment_mode: label,
                        ...(index < 2 ? { amount: "", address: "" } : {}),
                      })
                    }
                  >
                    {label}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {[0, 1].map((idx) => (
              <Tab.Panel key={idx}>
                <div className="space-y-6">
                  <div>
                    <label className="block mb-1 text-customGreen font-semibold text-sm">
                      Destination Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Wallet Address"
                      value={withdrawData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md bg-[#0F1B38] text-white border border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-customGreen font-semibold text-sm">
                      Withdrawal Amount
                    </label>
                    <input
                      type="number"
                      name="amount"
                      placeholder="Enter amount"
                      value={withdrawData.amount}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md bg-[#0F1B38] text-white border border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white font-semibold transition"
                  >
                    {isLoading ? "Loading..." : "Withdraw"}
                  </button>
                </div>
              </Tab.Panel>
            ))}

            <Tab.Panel>
              <div className="space-y-6">
                {[
                  {
                    label: "Withdrawal Amount",
                    name: "amount",
                    type: "number",
                  },
                  { label: "Bank Name", name: "bankName" },
                  {
                    label: "Account Number",
                    name: "accountNumber",
                    type: "number",
                  },
                  { label: "Account Name", name: "accountName" },
                  { label: "Crown Exchange", name: "swiftCode" },
                  { label: "Country", name: "country" },
                  { label: "Narration (Optional)", name: "narration" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block mb-1 text-customGreen font-semibold text-sm">
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      placeholder={field.label}
                      value={withdrawData[field.name]}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md bg-[#0F1B38] text-white border border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 px-4 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white font-semibold transition"
                >
                  {isLoading ? "Loading..." : "Withdraw"}
                </button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </form>

      {renderModal()}
    </div>
  );
};

export default Withdrawal;
