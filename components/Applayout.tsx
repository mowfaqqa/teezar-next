import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar2 from "./Navbar";
import { Context } from "../context/Context";

interface AppProps {
  children: ReactNode;
}
const Applayout = ({ children }: AppProps) => {
  return (
    <Context>
      <div>
        <Navbar2 />
        <div className="h-full">{children}</div>
        <Footer />
      </div>
    </Context>
  );
};

export default Applayout;
