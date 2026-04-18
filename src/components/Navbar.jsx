import React, { use } from "react";
import { LiquidButton } from "./ui/shadcn-io/liquid-button";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ShimmerButton } from "/src/components/ui/shimmer-button";
import { TbUserPlus } from "react-icons/tb";
import { LuLogIn, LuLogOut } from "react-icons/lu";

const Navbar = () => {
  let navigate = useNavigate();

  const { user, logout } = use(AuthContext);
  if (user) {
    console.log(user.photoURL);
  }
  const list = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/books'>All Books</NavLink>
      </li>
      <li>
        <NavLink to='/create-books'>Create Books</NavLink>
      </li>
      <li>
        <NavLink to='/my-books'>My Books</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='bg-base-100/30 shadow-sm backdrop-blur-2xl sticky sm:fixed z-50 top-0 w-full box-border h-16'>
      <div className='navbar max-w-(--max-width) mx-auto h-16'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {" "}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex='-1'
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              {list}
            </ul>
          </div>

          <LiquidButton className='text-2xl font-heading font-bold'>
            Book Haven
          </LiquidButton>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{list}</ul>
        </div>
        <div className='navbar-end flex justify-end items-center gap-5'>
          {user ? (
            <>
              <div className='avatar cursor-pointer h-9'>
                <div className='ring-neutral ring-offset-base-100 rounded-full ring-2 ring-offset-2'>
                  <img src={user.photoURL} />
                </div>
              </div>
              <ShimmerButton
                className='btn px-0 md:px-5 aspect-square md:aspect-auto h-11'
                onClick={handleLogout}
              >
                <span className='hidden md:block'>Logout</span>
                <LuLogOut className='text-xl block md:hidden' />
              </ShimmerButton>
            </>
          ) : (
            <>
              <ShimmerButton
                className='btn px-0 md:px-5 aspect-square md:aspect-auto h-11'
                onClick={() => navigate("/login")}
              >
                <span className='hidden md:block'>Login</span>
                <LuLogIn className='text-xl block md:hidden' />
              </ShimmerButton>
              <ShimmerButton
                className='btn px-0 md:px-5 aspect-square md:aspect-auto h-11'
                onClick={() => navigate("/register")}
              >
                <span className='hidden md:block'>Register</span>
                <TbUserPlus className='text-xl block md:hidden' />
              </ShimmerButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
