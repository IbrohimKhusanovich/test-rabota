import React from "react";
import img1 from "../../assets/Vector2.svg";
import img2 from "../../assets/Union1.svg";
import img3 from "../../assets/Union2.svg";
import img4 from "../../assets/LOGO1.svg";
import classes from "./footer.module.css";
function Footer() {
  const data = [
    { img: img1, text: "30 day money back guarantee" },
    { img: img2, text: "Support teams across the world" },
    { img: img3, text: "Safe & Secure online payment" },
  ];
  const data2 = [
    {
      title: "Who we Are",
      texts: [{ text: "About" }, { text: "Team" }, { text: "Work With Us" }],
    },
    {
      title: "WOOCOMMERCE",
      texts: [
        { text: "Features" },
        { text: "Payments" },
        { text: "Marketing" },
        { text: "Shipping" },
        { text: "Extension Store" },
        { text: "eCommerce blog" },
        { text: "Development blog" },
        { text: "Ideas board" },
        { text: "Mobile App" },
        { text: "Community" },
        { text: "Style Guide" },
        { text: "Email Newsletter" },
      ],
    },
    {
      title: "OTHER PRODUCTS",
      texts: [
        { text: "Storefront" },
        { text: "WooSlider" },
        { text: "Sensei" },
        { text: "Sensei Extensions" },
      ],
    },
    {
      title: "SUPPORT",
      texts: [
        { text: "Documentation" },
        { text: "Customizations" },
        { text: "Support Policy" },
        { text: "Contact" },
        { text: "COVID-19 Resources" },
        { text: "Privacy Notice for" },
        { text: "California Users" },
      ],
    },
    {
      title: "WE RECOMMEND",
      texts: [
        { text: "WooExperts" },
        { text: "Hosting Solutions" },
        { text: "Pre-sales FAQ" },
        { text: "Success Stories" },
        { text: "Design Feedback Group" },
      ],
    },
  ];
  return (
    <div className={classes.footer}>
      <div className={classes.footerHead}>
        <h3>
          WooCommerce - the most customizable eCommerce platform for building
          your online business.
        </h3>
        <button>GET STARTED</button>
      </div>
      <div className={classes.footerMain}>
        <div className={classes.topPanel}>
          {data.map((data, idx) => {
            return (
              <div key={idx} className={classes.icon}>
                <img src={data.img} alt='imgIcons' />
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
        <img className={classes.logoImg} src={img4} alt='logo' />
        <div className={classes.bottomPanel}>
          {data2.map((data, idx) => {
            return (
              <div key={idx} className={classes.panel}>
                <th>{data.title}</th>
                <div className={classes.panelTexts}>
                {data.texts.map((inData, ind) => {
                  return <p key={ind}>{inData.text}</p>;
                })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
