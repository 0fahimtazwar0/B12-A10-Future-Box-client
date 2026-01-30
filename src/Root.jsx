import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LiquidButton } from "./components/ui/shadcn-io/liquid-button";

const Root = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <div className='mt-40'>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
