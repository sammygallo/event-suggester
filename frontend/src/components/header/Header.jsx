import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";

export const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h1>Event Suggester</h1>
      </div>
    </header>
  );
};

export default Header;
