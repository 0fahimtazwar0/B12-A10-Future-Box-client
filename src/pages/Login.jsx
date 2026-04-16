import React from "react";
import SectionTitle from "../components/SectionTitle";
import flyingBook from "/src/assets/flying-book.png";
import { AuroraText } from "/src/components/ui/aurora-text";

const Login = () => {
  return (
    <div className='h-[90vh] flex flex-col md:flex-row items-center justify-center gap-0 md:gap-15 '>
      <div className='flex flex-col justify-between h-50 md:h-60 w-full max-w-sm md:w-fit'>
        <img src={flyingBook} alt='Flying-Book' className='w-24 select-none' />
        <div className='flex flex-col gap-2.5'>
          <AuroraText className='font-heading section-heading font-light'>
            Login Now
          </AuroraText>
          <AuroraText className='font-heading text-xl'>
            to continue...
          </AuroraText>
        </div>
      </div>

      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10'>
        <div className='card-body'>
          <fieldset className='fieldset'>
            <label className='label'>Email</label>
            <input
              type='email'
              className='input border'
              placeholder='name@example.com'
            />
            <label className='label'>Password</label>
            <input
              type='password'
              className='input border'
              placeholder='••••••••••••••••••••••••••••'
            />
            <div>
              <a className='hover:text-accent link link-hover'>
                Forgot password?
              </a>
            </div>
            <button className='btn btn-neutral mt-4'>Login</button>
          </fieldset>
          <p>
            Don't have an account?{" "}
            <a
              href=''
              className='hover:text-accent link link-hover font-semibold'
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
