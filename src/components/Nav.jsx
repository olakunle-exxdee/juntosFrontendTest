import React from "react";
import Logo from "../../src/images/juntossomosmais_logo.svg";
import SearchBar from "./SearchBar";

const Nav = ({ filterSearch }) => {
  return (
    <nav className="navbar">
      <div className="logo ">
        <img src={Logo} alt="logo" className="" />
      </div>
      <SearchBar filterSearch={filterSearch} />
      <div className="gray-box_wrapper">
        <div className="gray-box"></div>
        <div className="gray-box"></div>
      </div>
    </nav>
  );
};

export default Nav;
