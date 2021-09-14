import React from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/LOGO.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className={classes.nav}>
      <div className={classes.navLeft}>
      <img src={logo} alt='logo' />
      <div className={classes.links}>
        <p>Sell</p>
        <p>Marketplace</p>
        <p>Community</p>
        <p>Develop</p>
        <p>Resources</p>
      </div>
      </div>
      <div className={classes.loginPanel}>
       <p className={classes.login}>Log In</p>
       <button className={classes.btnLogin}>Get Started</button>
       <FontAwesomeIcon icon={faSearch}/>
      </div>
    </div>
  );
}

export default Navbar;
