import React, { useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className='relative'>
      <Navbar />
      <div className='min-h-screen flex flex-col flex-1 pb-40'>
        <Outlet />
      </div>
      <Footer />
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            color: "var(--color-base-content)",
            background: "var(--color-base-100)",
            fontWeight: "500",
          },
          iconTheme: {
            primary: "var(--color-accent)",
            secondary: "#FFFAEE",
          },
        }}
      />
    </div>
  );
};

export default Root;
