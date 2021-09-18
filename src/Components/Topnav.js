import React from "react";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
import "./Topnav.css";

function Topnav() {
  return (
    <div>
      <div className="topnav">
        <div>Name: Salsabil Hossain Alavi</div>
        <div>Address: Dhaka</div>
        <div>Contact: 01622097717</div>
      </div>
      <Sidenav />
      <Footer />
    </div>
  );
}

export default Topnav;
