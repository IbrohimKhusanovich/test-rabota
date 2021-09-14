import React from "react";
import img1 from '../../assets/Rectangle235.svg'
import img2 from '../../assets/image24.svg'
import img3 from '../../assets/Group6.svg'
import img4 from '../../assets/Group7.svg'
import img5 from '../../assets/Ellipse32.svg'
import classes from "./support.module.css";
function Support() {
  return (
    <div className={classes.support}>
      <h1>Supported by real people</h1>
      <p>
        Our team of Happiness Engineers works remotely from 58 countries
        providing customer support across multiple time zones.
      </p>
      <img className={classes.backImg3} src={img3} alt="img3" />
      <img className={classes.backImg4} src={img4} alt="img4" />
      <img className={classes.backImg} src={img1} alt="img1" />
      <img className={classes.backImg2} src={img2} alt="img2" />
      <img className={classes.backImg5} src={img5} alt="img5" />
      <img className={classes.backImg6} src={img5} alt="img6" />
      <img className={classes.backImg7} src={img5} alt="img7" />

    </div>
  );
}

export default Support;
