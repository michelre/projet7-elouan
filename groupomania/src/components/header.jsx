import '../styles/style.css';
import React from "react";

function Header () {
  const pageName = window.location.pathname === "/" ? "Home" : "Settings";
  return (
    <div className='header'>
      <h1>{pageName}</h1>
    </div>
  )
}

export default Header;