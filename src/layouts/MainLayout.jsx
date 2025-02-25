import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
