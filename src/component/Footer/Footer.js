import React from "react";
import './Footer.css'
import Logo from "../../Images/white-logo.png";
import Facebook from "../../Images/facebook.png";
import Instagram from "../../Images/insta.jpg";
import Twitter from "../../Images/tweeter.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="footerAddress">
          <img src={Logo} alt="logo"/>
          
          <p>101, Relcon Enclave, NH-48</p><br/>
          <p>Surat, Gujarat</p><br/>
          <p>India - 394325</p>
          
        </div>
        <div className="footerSection">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
            <li>Community Guidelines</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>Cancellation & Refund</li>
            <li>Shipping & Exchange</li>
            <li>FAQs</li>
            <li>Startup FAQs</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>FAQs</h3>
          <ul>
            <li>Startup FAQs</li>
          </ul>
        </div>
      </div>
      <div className="bottomNav">
        <div className="socialMedia">
        <img src={Twitter} alt="twitter"/>
        <img src={Facebook} alt="facebook"/>
        <img src={Instagram}  alt="instagram"/>
        </div>
        <div className="footerCopyRight">
          <p>
            © 2023 <b>StartupzWorld,</b> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;