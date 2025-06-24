import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import api from '../redux/slices/api';

const schema = yup.object().shape({
  newPassword: yup.string().min(8, 'Password must be at least 8 characters').required('New password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match').required('Confirm password is required'),
});

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('mail');

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitPassword = async (data) => {
    const { newPassword, confirmPassword } = data;

    if (!email) {
      toast.error("Invalid email address");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await api.post('changePassword', { email, newPassword });

      if (response.status === 201) {
        toast.success('Password updated successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      toast.error(error || 'Failed to update password');
    }
  };

  return (
    <div className="px-4 md:px-20 py-24 md:py-32 font-poppins text-[#E6E6E6]">
      <Toaster position="top-center" toastOptions={{ style: { background: '#041F3E', color: '#fff' } }} />
      <div className="w-full max-w-xl p-8 mx-auto shadow-lg bg-slate-900/80 rounded-2xl">
        <h2 className="text-2xl font-bold text-white">Set New Password</h2>

        <form onSubmit={handleSubmit(handleSubmitPassword)} className="space-y-5 mt-8">
          <div>
            <label className="block mb-1 text-xs text-white">New Password</label>
            <div className="relative mt-4">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('newPassword')}
                placeholder="Enter new password"
                className="w-full px-10 py-2 text-white bg-transparent border-2 border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-white right-3 top-2.5"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.newPassword && <p className="mt-1 text-xs text-red-500">{errors.newPassword.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-xs text-white">Confirm Password</label>
            <div className="relative mt-4">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="Confirm new password"
                className="w-full px-10 py-2 text-white bg-transparent border-2 border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute text-white right-3 top-2.5"
              >
                {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-black font-semibold rounded-md bg-[#50DD8A] hover:bg-green-500`}
          >
            {isSubmitting ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
