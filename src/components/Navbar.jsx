import React from "react";
import { LiquidButton } from "./ui/shadcn-io/liquid-button";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { ShimmerButton } from "/src/components/ui/shimmer-button";
import { TbUserPlus } from "react-icons/tb";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const locationPath = location.pathname;
  const { user, logout, loading } = useAuth();
  const list = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/all-books'>All Books</NavLink>
      </li>
      <li>
        <NavLink to='/create-book'>Create Book</NavLink>
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
    <>
      <div
        className={`bg-base-100/30 shadow-sm backdrop-blur-2xl ${location.pathname == "/" && "sm:fixed"} sticky z-50 top-0 w-full box-border h-16`}
      >
        <div className='navbar max-w-(--max-width) mx-auto h-16'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
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

            <LiquidButton
              className='text-2xl font-heading font-bold'
              onClick={() => navigate("/")}
            >
              Book Haven
            </LiquidButton>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{list}</ul>
          </div>
          <div
            className={`navbar-end flex justify-end items-center gap-5 transition-all duration-300 ease-out ${loading ? "opacity-0 blur-sm" : "opacity-100 blur-none"}`}
          >
            {user ? (
              <>
                <div
                  className='avatar cursor-pointer h-9'
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <div className='ring-neutral ring-offset-base-100 rounded-full ring-2 ring-offset-2'>
                    <img src={user.photoURL} referrerPolicy='no-referrer' />
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
                  onClick={() => navigate("/login", { state: locationPath })}
                >
                  <span className='hidden md:block'>Login</span>
                  <LuLogIn className='text-xl block md:hidden' />
                </ShimmerButton>
                <ShimmerButton
                  className='btn px-0 md:px-5 aspect-square md:aspect-auto h-11'
                  onClick={() =>
                    navigate("/register", {
                      state: locationPath,
                    })
                  }
                >
                  <span className='hidden md:block'>Register</span>
                  <TbUserPlus className='text-xl block md:hidden' />
                </ShimmerButton>
              </>
            )}
          </div>
        </div>
      </div>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box'>
          <div className='flex flex-col sm:flex-row gap-8'>
            <div className='avatar h-20'>
              <div className='ring-neutral ring-offset-base-100 rounded-full ring-2 ring-offset-2'>
                <img src={user?.photoURL} referrerPolicy='no-referrer' />
              </div>
            </div>
            <div>
              <h3 className='font-bold text-lg'>{user?.displayName}</h3>
              <p className='py-4'>{user?.email}</p>
            </div>
          </div>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn btn-neutral'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
