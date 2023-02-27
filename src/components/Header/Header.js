import React, { useState } from "react";
import logo from "../../images/logo.PNG";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/courses">Courses</a>
        <a href="/routine">Routine</a>
        <a href="/test">Test</a>
        <a href="/events">Events</a>
        <input type="text" />
        <button style={{ backgroundColor: "rgb(133,192,239)", cursor: "pointer" }}>Search</button>
      </nav>
    </div>
  );
};

export default Header;
