import React from "react";
import img1 from "../../assets/Union.svg";
import img2 from "../../assets/Ellipse32.svg";
import img3 from "../../assets/Ellipse31.svg";
import img4 from "../../assets/Group7.svg";
import img5 from "../../assets/Ellipse32.svg";
import img6 from "../../assets/Ellipse31.svg";
import img7 from "../../assets/Group7.svg";
import img8 from "../../assets/Rectangle236.svg";
import img9 from "../../assets/Rectangle233.svg";
import classes from "./about.module.css";
function About() {
  return (
    <div className={classes.about}>
      <img src={img1} className={classes.imgAbout} alt='img1' />
      <img src={img2} className={classes.imgCircle} alt='img2' />
      <img src={img3} className={classes.imgCircle2} alt='img3' />
      <img src={img4} className={classes.imgCircles} alt='img4' />
      <img src={img5} className={classes.imgCircle3} alt='img5' />
      <img src={img6} className={classes.imgCircle4} alt='img6' />
      <img src={img7} className={classes.imgCircles2} alt='img7' />
      <div className={classes.card}>
        <img src={img8} className={classes.imgCard} alt='img8' />
        <div className={classes.texts}>
          <h3>Develop Without Limits</h3>
          <p>
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <button>Read the Documentation</button>
        </div>
      </div>
      <div className={classes.card2}>
        <div className={classes.texts}>
          <h3>Know our Global Community</h3>
          <p>
            WooCommerce is one of the fastest-growing eCommerce communities.
            We’re proud that the helpfulness of the community and a wealth of
            online resources are frequently cited as reasons our users love it.
            There are 80+ meetups worldwide!
          </p>
          <button>Read the Documentation</button>
        </div>
        <img src={img9} className={classes.imgCard} alt='img9' />
      </div>
    </div>
  );
}

export default About;
