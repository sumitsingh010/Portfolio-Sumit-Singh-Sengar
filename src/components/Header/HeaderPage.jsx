import React from "react";
import "./Header.css";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";

const HeaderPage = () => {
  // dropdownMenu
  const dropdownMenu = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("active");
      } else document.querySelector(".site-header").classList.remove("active");

      navbar.classList.remove("active");
    };
  };

  return (
    <header className="site-header">
      <div id="menu-btn" className="fas fa-bars" onClick={dropdownMenu}></div>

      <NavLink className="logo" to="/">
        <p>
          (<span>Sumit Singh Sengar</span>)
        </p>
      </NavLink>

      <nav className="navbar">
        <NavLink to="/" offset={-150} duration={500}>
          <FormattedMessage id="home" defaultMessage="Home" />
        </NavLink>
        <NavLink to="/about" offset={-150} duration={500}>
          <FormattedMessage id="about" defaultMessage="About me" />
        </NavLink>
        <NavLink to="/service" offset={-150} duration={500}>
          <FormattedMessage id="services" defaultMessage="Services" />
        </NavLink>
        <NavLink to="/project" offset={-150} duration={500}>
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </NavLink>
        
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(HeaderPage);
