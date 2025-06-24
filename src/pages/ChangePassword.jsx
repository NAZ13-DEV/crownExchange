import ChangePasswordSection from "../components/ChangePassword"
import Navbar from "../components/Navbar"

const ChangePassword = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-cover bg-slate-900 bg-login ">
      <Navbar />
      <ChangePasswordSection/>
    </div>
  )
}

export default ChangePassword