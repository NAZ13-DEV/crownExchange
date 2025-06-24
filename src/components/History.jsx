/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../redux/slices/fetchHistory";
import {
  fetchUserDetails,
  clearUserState,
} from "../redux/slices/fetchUserSlice";
import { FolderSimpleDashed } from "@phosphor-icons/react"; // install this package

const History = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const [mounted, setMounted] = useState(false);

  const {
    deposits,
    profits,
    userPlans,
    software,
    cryptoWithdrawals,
    bankWithdrawals,
  } = useSelector((state) => state.fetchHistory);
  const { user } = useSelector((state) => state.fetchUserDetails);

  const tabData = [
    {
      label: "Total Deposit History",
      data: deposits,
      emptyMessage: "No Deposit History",
    },
    {
      label: "Total Bank Withdrawal History",
      data: bankWithdrawals,
      emptyMessage: "No Bank Withdrawal History",
    },
    {
      label: "Total Crypto Withdrawal History",
      data: cryptoWithdrawals,
      emptyMessage: "No Crypto Withdrawal History",
    },
    {
      label: "Total Earning History",
      data: profits,
      emptyMessage: "No Earning History",
    },
    {
      label: "Plan Subscription",
      data: userPlans,
      emptyMessage: "No Subscription Plan History",
    },
    {
      label: "Software Subscription",
      data: software,
      emptyMessage: "No Subscription software History",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const id = localStorage.getItem("uId");
      setUserId(id);
    }
  }, [mounted]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserDetails(userId));
      dispatch(fetchDashboardData());
    }
    return () => dispatch(clearUserState());
  }, [dispatch, userId]);

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-GB"); // Format as dd/mm/yyyy
  };

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-[#050A1D] flex items-center justify-center px-4 py-10'>
      <section className='w-full max-w-screen-xl grid grid-cols-12 gap-6'>
        <div className='col-span-12 xl:col-span-11 bg-[#0A132A] rounded-2xl p-4 lg:p-6'>
          <div className='w-full h-full bg-[#0A132A] rounded-2xl p-4 lg:p-6'>
            <Tab.Group>
              <Tab.List className='flex flex-wrap gap-3 mb-6'>
                {tabData.map(({ label }, index) => (
                  <Tab key={index} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`text-sm md:text-base font-semibold px-4 py-2 rounded-md transition-colors border-b-2 ${
                          selected ?
                            "text-emerald-400 border-emerald-400"
                          : "text-white hover:text-emerald-300 border-transparent"
                        }`}
                      >
                        {label}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels>
                {tabData.map(({ label, data, emptyMessage }, panelIndex) => (
                  <Tab.Panel key={panelIndex}>
                    <div className='bg-[#0F1B38] rounded-xl p-4 overflow-x-auto min-h-[300px]'>
                      <h5 className='text-xl font-semibold text-white mb-4'>
                        {label}
                      </h5>

                      {!data || data.length === 0 ?
                        <div className='flex flex-col items-center justify-center py-10 text-center text-white'>
                          <FolderSimpleDashed
                            size={64}
                            className='text-emerald-400 mb-4'
                          />
                          <p className='text-lg font-medium'>{emptyMessage}</p>
                        </div>
                      : <table className='w-full text-sm md:text-base text-left whitespace-nowrap'>
                          <thead className='text-emerald-400 font-bold border-b border-emerald-800'>
                            <tr>
                              {/* Deposit History columns */}
                              {panelIndex === 0 && (
                                <>
                                  <th className='py-2 px-3'>Sn</th>
                                  <th className='py-2 px-3'>Amount</th>
                                  <th className='py-2 px-3'>Coin Value</th>
                                  <th className='py-2 px-3'>Deposit Method</th>
                                  <th className='py-2 px-3'>Wallet</th>
                                  <th className='py-2 px-3'>Deposit Id</th>
                                  <th className='py-2 px-3'>Deposit Status</th>
                                  <th className='py-2 px-3'>Date of Deposit</th>
                                </>
                              )}
                              {/* Bank Withdrawal History columns */}
                              {panelIndex === 1 && (
                                <>
                                  <th className='py-2 px-3'>Sn</th>
                                  <th className='py-2 px-3'>
                                    # Withdrawal ID
                                  </th>{" "}
                                  {/* Added # symbol */}
                                  <th className='py-2 px-3'>Account Name</th>
                                  <th className='py-2 px-3'>Account Number</th>
                                  <th className='py-2 px-3'>Bank Name</th>
                                  <th className='py-2 px-3'>Country</th>
                                  <th className='py-2 px-3'>Amount</th>
                                  <th className='py-2 px-3'>
                                    Date of Withdrawal
                                  </th>
                                  <th className='py-2 px-3'>Narration</th>
                                  <th className='py-2 px-3'>
                                    Withdrawal Status
                                  </th>
                                </>
                              )}
                              {/* Crypto Withdrawal History columns */}
                              {panelIndex === 2 && (
                                <>
                                  <th className='py-2 px-3'>Sn</th>
                                  <th className='py-2 px-3'>Amount</th>
                                  <th className='py-2 px-3'>
                                    Date of Withdrawal
                                  </th>
                                  <th className='py-2 px-3'>Payment Mode</th>
                                  <th className='py-2 px-3'>Withdrawal ID</th>
                                  <th className='py-2 px-3'>
                                    Withdrawal Status
                                  </th>
                                  <th className='py-2 px-3'>Wallet</th>
                                </>
                              )}
                              {/* Earning History columns */}
                              {panelIndex === 3 && (
                                <>
                                  <th className='py-2 px-3'>Sn</th>
                                  <th className='py-2 px-3'>Amount</th>
                                  <th className='py-2 px-3'>Type</th>
                                  <th className='py-2 px-3'>Transaction Id</th>
                                  <th className='py-2 px-3'>
                                    Transaction Status
                                  </th>
                                  <th className='py-2 px-3'>
                                    Date of Transaction
                                  </th>
                                </>
                              )}
                              {/* Plan Subscription History columns */}
                              {panelIndex === 4 && (
                                <>
                                  <th className='py-2 px-3'>Sn</th>
                                  <th className='py-2 px-3'>Amount</th>
                                  <th className='py-2 px-3'>Coin Value</th>
                                  <th className='py-2 px-3'>Deposit Method</th>
                                  <th className='py-2 px-3'>Wallet</th>
                                  <th className='py-2 px-3'>Deposit Plan</th>
                                  <th className='py-2 px-3'>Deposit Id</th>
                                  <th className='py-2 px-3'>Deposit Status</th>
                                  <th className='py-2 px-3'>Date of Deposit</th>
                                </>
                              )}
                              {panelIndex === 5 && (
                                <>
                                  <th className='py-2 px-3'>Sn</th>
                                  <th className='py-2 px-3'>Amount</th>
                                  <th className='py-2 px-3'>Coin Value</th>
                                  <th className='py-2 px-3'>Deposit Method</th>
                                  <th className='py-2 px-3'>Wallet</th>
                                  <th className='py-2 px-3'>Software Plan</th>
                                  <th className='py-2 px-3'>Deposit Id</th>
                                  <th className='py-2 px-3'>Deposit Status</th>
                                  <th className='py-2 px-3'>Date of Deposit</th>
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody className='text-white divide-y divide-[#1E293B]'>
                            {data.map((dataItem, i) => (
                              <tr
                                key={dataItem.id || i}
                                className={
                                  panelIndex === 0 ?
                                    "bg-green-900/20 text-green-400"
                                  : panelIndex === 1 || panelIndex === 2 ?
                                    "bg-red-900/20 text-red-400"
                                  : panelIndex === 3 ?
                                    dataItem.type?.toLowerCase() === "loss" ?
                                      "bg-red-900/30 text-red-400"
                                    : (
                                      dataItem.type?.toLowerCase() === "profit"
                                    ) ?
                                      "bg-green-900/30 text-green-400"
                                    : ""
                                  : panelIndex === 4 ?
                                    "bg-blue-900/20 text-blue-400"
                                  : panelIndex === 5 ?
                                    "bg-purple-900/20 text-purple-400"
                                  : ""
                                }
                              >
                                {panelIndex === 0 && (
                                  <>
                                    <td className='py-2 px-3'>{i + 1}</td>
                                    <td className='py-2 px-3'>
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {parseFloat(dataItem.amtValue).toFixed(4)}{" "}
                                      {dataItem.transMethod === "bitcoin" ?
                                        "Btc"
                                      : dataItem.transMethod === "ethereum" ?
                                        "Eth"
                                      : dataItem.transMethod === "tether" ?
                                        "Usdt"
                                      : ""}
                                    </td>
                                    <td className='py-2 px-3 capitalize'>
                                      {dataItem.transMethod}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.Wallet}
                                    </td>
                                    <td className='py-2 px-3'>
                                      #{dataItem.transId}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.transStatus}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {formatDate(dataItem.createdAt)}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 1 && (
                                  <>
                                    <td className='py-2 px-3'>{i + 1}</td>
                                    <td className='py-2 px-3'>
                                      #{dataItem.transId}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.accName}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.accNum}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.bankName}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.country}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {formatDate(dataItem.dateOfTrans)}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.narration}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.transStatus}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 2 && (
                                  <>
                                    <td className='py-2 px-3'>{i + 1}</td>
                                    <td className='py-2 px-3'>
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {formatDate(dataItem.dateOfTrans)}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.payment_mode}
                                    </td>
                                    <td className='py-2 px-3'>
                                      #{dataItem.transId}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.transStatus}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.wallet}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 3 && (
                                  <>
                                    <td className='py-2 px-3'>{i + 1}</td>
                                    <td className='py-2 px-3'>
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.amount).toFixed(2)}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.type}
                                    </td>
                                    <td className='py-2 px-3'>
                                      #{dataItem.transId}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.transStatus}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {formatDate(dataItem.dateOfTrans)}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 4 && (
                                  <>
                                    <td className='py-2 px-3'>{i + 1}</td>
                                    <td className='py-2 px-3'>
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.cryptoAmt).toFixed(
                                        2
                                      )}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {parseFloat(dataItem.cryptovalue).toFixed(
                                        4
                                      )}{" "}
                                      {dataItem.netWork === "bitcoin" ?
                                        "Btc"
                                      : dataItem.netWork === "ethereum" ?
                                        "Eth"
                                      : dataItem.netWork === "tether" ?
                                        "Usdt"
                                      : ""}
                                    </td>
                                    <td className='py-2 px-3 capitalize'>
                                      {dataItem.netWork}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.companyWallet}
                                    </td>
                                    <td className='py-2 px-3 capitalize'>
                                      {dataItem.selectedPlan} Plan
                                    </td>
                                    <td className='py-2 px-3'>
                                      #{dataItem.transId}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.transStatus}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {formatDate(dataItem.createdAt)}
                                    </td>
                                  </>
                                )}

                                {panelIndex === 5 && (
                                  <>
                                    <td className='py-2 px-3'>{i + 1}</td>
                                    <td className='py-2 px-3'>
                                      {user?.currency}{" "}
                                      {parseFloat(dataItem.cryptoAmt).toFixed(
                                        2
                                      )}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {parseFloat(dataItem.cryptovalue).toFixed(
                                        4
                                      )}{" "}
                                      {dataItem.netWork === "bitcoin" ?
                                        "Btc"
                                      : dataItem.netWork === "ethereum" ?
                                        "Eth"
                                      : dataItem.netWork === "tether" ?
                                        "Usdt"
                                      : ""}
                                    </td>
                                    <td className='py-2 px-3 capitalize'>
                                      {dataItem.netWork}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.companyWallet}
                                    </td>
                                    <td className='py-2 px-3 capitalize'>
                                      {dataItem.selectedPlan} Plan
                                    </td>
                                    <td className='py-2 px-3'>
                                      #{dataItem.transId}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {dataItem.transStatus}
                                    </td>
                                    <td className='py-2 px-3'>
                                      {formatDate(dataItem.createdAt)}
                                    </td>
                                  </>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      }
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
