import React from "react";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
//import GoogleMapSearch from "../searchbar/search";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            {" "}
            <AiOutlineHome />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a
            href="#profile"
            onClick={() => setActiveNav("#profile")}
            className={activeNav === "#profile" ? "active" : ""}
          >
            {" "}
            <CgProfile />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a
            href="#Itinerary"
            onClick={() => setActiveNav("#itinerary")}
            className={activeNav === "#itinerary" ? "active" : ""}
          >
            {" "}
            <AiOutlineSchedule />
          </a>
        </Nav.Item>
        <Nav.Item>
          {/* <GoogleMapSearch /> */}
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
