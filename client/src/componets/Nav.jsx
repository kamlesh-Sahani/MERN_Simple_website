import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>LOKI</h1>
      </div>
      <div className="link">
        <Link to={"/"} className="active">Home</Link>
        <Link to={"about"}>About us</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"login"}>Login</Link>
        <Link to={"register"}>Register</Link>
      </div>
    </div>
  );
};

export default Nav;
