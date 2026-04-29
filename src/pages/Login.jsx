import React from "react";
import SectionTitle from "../components/SectionTitle";
import flyingBook from "/src/assets/flying-book.png";
import { AuroraText } from "/src/components/ui/aurora-text";
import { SparklesText } from "/src/components/ui/sparkles-text";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { user, login, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    login(email, password)
      .then(() => {
        // Signed in
        // const user = userCredential.user;
        // ...
        // console.log(user);
        navigate(location.state || "/");
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        // The signed-in user info.
        // const user = result.user;
        // console.log(user);
        navigate(location.state || "/");
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        toast.error(errorCode);
      });
  };

  return (
    <div className='h-[90vh] flex flex-col md:flex-row items-center justify-center gap-0 md:gap-15 '>
      <div className='flex flex-col justify-between h-55 w-full max-w-sm md:w-fit'>
        <img src={flyingBook} alt='Flying-Book' className='w-24 select-none' />
        <div className='flex flex-col gap-2.5'>
          <SparklesText>
            <AuroraText className='font-heading section-heading font-light'>
              Login Now
            </AuroraText>
          </SparklesText>
          <AuroraText className='font-heading text-xl'>
            to continue...
          </AuroraText>
          {user && (
            <div className='border w-full text-center p-2 rounded-sm bg-accent text-primary-content font-semibold opacity-80'>
              You are already logged in
            </div>
          )}
        </div>
      </div>

      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10'>
        <div className='card-body'>
          <form onSubmit={handleLogin}>
            <fieldset className='fieldset flex flex-col gap-3'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm' htmlFor='email'>
                  Email
                </label>
                <label className='input has-user-invalid:validator border'>
                  <svg
                    className='h-[1em] opacity-50'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <g
                      strokeLinejoin='round'
                      strokeLinecap='round'
                      strokeWidth='2.5'
                      fill='none'
                      stroke='currentColor'
                    >
                      <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                    </g>
                  </svg>
                  <input
                    type='email'
                    placeholder='mail@site.com'
                    required
                    id='email'
                  />
                </label>
                <div className='validator-hint hidden'>
                  Enter valid email address
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm' htmlFor='password'>
                  Password
                </label>
                <label className='input border'>
                  <svg
                    className='h-[1em] opacity-50'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <g
                      strokeLinejoin='round'
                      strokeLinecap='round'
                      strokeWidth='2.5'
                      fill='none'
                      stroke='currentColor'
                    >
                      <path d='M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z'></path>
                      <circle
                        cx='16.5'
                        cy='7.5'
                        r='.5'
                        fill='currentColor'
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type='password'
                    required
                    placeholder='••••••••••••••••••'
                    id='password'
                  />
                </label>
              </div>
              <div>
                <a className='hover:text-accent link link-hover'>
                  Forgot password?
                </a>
              </div>
              <button className='btn btn-neutral mt-4' type='submit'>
                Login
              </button>
            </fieldset>
          </form>
          <div className='divider h-1'>Or</div>
          <button
            className='btn bg-white text-black border-[#e5e5e5]'
            onClick={handleGoogleLogin}
          >
            <svg
              aria-label='Google logo'
              width='16'
              height='16'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <g>
                <path d='m0 0H512V512H0' fill='#fff'></path>
                <path
                  fill='#34a853'
                  d='M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341'
                ></path>
                <path
                  fill='#4285f4'
                  d='m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57'
                ></path>
                <path
                  fill='#fbbc02'
                  d='m90 341a208 200 0 010-171l63 49q-12 37 0 73'
                ></path>
                <path
                  fill='#ea4335'
                  d='m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55'
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className='mt-3.5'>
            Don't have an account?{" "}
            <Link
              to='/register'
              className='hover:text-accent link link-hover font-semibold'
              state={location.state}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
