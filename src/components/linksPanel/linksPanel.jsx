import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img1 from '../../assets/image25.svg'
import classes from './linksPanel.module.css'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
function LinksPanel() {
 return (
  <div className={classes.linksPanel}>
   <div className={classes.icons}>
    <FontAwesomeIcon icon={faTwitter}/>
    <FontAwesomeIcon icon={faFacebook}/>
    <FontAwesomeIcon className={classes.iconWiFi} icon={faWifi}/>
    <FontAwesomeIcon icon={faInstagram}/>
   </div>
   <p>COPYRIGHT WOOCOMMERCE 2020 - <span>TERMS & CONDITIONS  PRIVACY POLICY</span></p>
   <img src={img1} alt="img" />
  </div>
 )
}

export default LinksPanel
