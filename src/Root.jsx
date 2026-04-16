import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LiquidButton } from "./components/ui/shadcn-io/liquid-button";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='min-h-screen flex flex-col flex-1 pb-40'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
