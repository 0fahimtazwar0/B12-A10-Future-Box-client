import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div className=''>
      <Home />
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
