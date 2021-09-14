import React from "react";
import img1 from '../../assets/Group7.svg'
import img2 from '../../assets/Group6.svg'
import img3 from '../../assets/Ellipse15.svg'
import img4 from '../../assets/Ellipse29.svg'
import img5 from '../../assets/Ellipse27.svg'
import img6 from '../../assets/Ellipse28.svg'
import img7 from '../../assets/Ellipse26.svg'
import img8 from '../../assets/Ellipse30.svg'
import classes from "./clientsSay.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function ClientsSay() {
  return (
    <div className={classes.clientsSay}>
      <h1>Trusted by Agencies & Store Owners</h1>
      <img className={classes.backImg1} src={img1} alt="back img" />
      <img className={classes.backImg2} src={img2} alt="back img" />
      <div className={classes.cards}>
        <div className={classes.card2}>
          <div className={classes.card}>
            <p>
              No other eCommerce platform allows people to start for free and
              grow their store as their business grows. More importantly,
              WooCommerce doesn't charge you a portion of your profits as your
              business grows!
            </p>
          </div>
        </div>
      </div>
<div className={classes.icons}>
<FontAwesomeIcon className={classes.icon1} icon={faArrowLeft}/>
<FontAwesomeIcon className={classes.icon2} icon={faArrowRight}/>
</div>
<img className={classes.backImg3} src={img3} alt="img3" />
<img className={classes.backImg4} src={img4} alt="img4" />
<img className={classes.backImg5} src={img5} alt="img5" />
<img className={classes.backImg6} src={img6} alt="img6" />
<img className={classes.backImg7} src={img7} alt="img7" />
<img className={classes.backImg8} src={img8} alt="img8" />
    </div>
  );
}

export default ClientsSay;
