import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../redux/slices/api";
import Navbar from "../components/Navbar";
import FooterTwo from "../components/FooterTwo";

const VerifyResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('T');
  const mail = searchParams.get('m');
  const num = searchParams.get('n');
  const [message, setMessage] = useState("Verifying Reset Link...");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !mail || !num) {
      setMessage("Invalid verification link.");
      return;
    }

    api
      .post("verifyResetPassword", {
        token,
        email: mail,
        num,
      })
      .then((response) => {
        if (response.status === 201) {
          setMessage(response.data.message);
          setTimeout(() => {
            navigate(`/ChangePassword?mail=${encodeURIComponent(mail)}`);
          }, 3000);
        }
      })
      .catch((error) => {
        const err =
          error.response?.status === 422
            ? error.response.data.errors[0]
            : "Verification failed. Please try again.";
        setMessage(err);
      });
  }, [token, mail, num, navigate]);
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <div className="px-6 text-center">
        <h3 className="text-emerald-400 text-2xl lg:text-[32px] font-semibold leading-[38px]">
          {message}
        </h3>
        <div className="w-[190px] mx-auto bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg px-2 py-1 mt-8"></div>
      </div>
    </div>
    <FooterTwo/>
    </>
  );
};

export default VerifyResetPassword;
