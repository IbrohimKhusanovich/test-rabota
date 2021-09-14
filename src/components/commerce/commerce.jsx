import React from "react";
import img1 from "../../assets/Group.svg";
import img2 from "../../assets/Group2.svg";
import img3 from "../../assets/Group3.svg";
import classes from "./commerce.module.css";
function Commerce() {
  return (
    <div className={classes.commerce}>
      <h1>Your eCommerce made simple</h1>
      <div className={classes.cards}>
        <div className={classes.card}>
          <img className={classes.cardImg} src={img1} alt='img1' />
          <div className={classes.cardTexts}>
            <h3>All You Need to Start</h3>
            <p>
              Add WooCommerce plugin to any WordPress site and set up a new
              store in minutes.
            </p>
            <a href='/'>Ecommerce for Wordpress ›</a>
          </div>
        </div>
        <div className={classes.card2}>
          <img className={classes.cardImg2} src={img2} alt='img1' />
          <div className={classes.cardTexts2}>
            <h3>Customize and Extend</h3>
            <p>
              From subscriptions to gym classes to luxury cars, WooCommerce is
              fully customizable.
            </p>
            <a href='/'>Browse Extensions ›</a>
          </div>
        </div>
        <div className={classes.card3}>
          <img className={classes.cardImg3} src={img3} alt='img1' />
          <div className={classes.cardTexts3}>
            <h3>Active Community</h3>
            <p>
              WooCommerce is one of the fastest-growing eCommerce communities.
            </p>
            <a href='/'>Check our Forums ›</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commerce;
