import React from "react";
import W from "../../assets/W.svg";
import backNuqta from "../../assets/Group5.svg";
import backNuqta2 from "../../assets/Group8.svg";
import product from "../../assets/PRODUCT.svg";
import maskGroup from "../../assets/MaskGroup.svg";
import smileGirls from '../../assets/image15.svg'
import classes from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headLeft}>
        <h1>Building exactly the eCommerce website you want.</h1>
        <p className={classes.leftText}>
          WooCommerce is a customizable, open-source eCommerce platform built on
          WordPress. Get started quickly and make your way.
        </p>
        <div className={classes.btnPanel}>
          <button className={classes.btnHead}> Start a New Store</button>
          <a href='/'>
            <span>or</span> Customize & Extend ›
          </a>
        </div>
      </div>
      <div className={classes.headRight}>
        <img className={classes.backHeader} src={W} alt='back' />
        <img className={classes.backNuqta1} src={backNuqta} alt='back' />
        <img className={classes.backNuqta2} src={backNuqta2} alt='back' />
        <img className={classes.backNuqta3} src={backNuqta} alt='back' />
        <img className={classes.headProduct} src={product} alt='product' />
        <img className={classes.maskGroup} src={maskGroup} alt='maskGroup' />
        <img className={classes.smileGirls} src={smileGirls} alt="smile-girls" />
        <div className={classes.btnIcon}>
          <FontAwesomeIcon icon={faShieldAlt} />
        </div>
        <div className={classes.btnIcon2}>
          <FontAwesomeIcon icon={faCartPlus}/>
        </div>
        <p className={classes.btnSale}>SALE</p>
      </div>
    </div>
  );
}

export default Header;
