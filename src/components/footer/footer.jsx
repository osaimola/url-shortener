import React from "react";
import "./footer.css";
import logo_white from "../../images/logo-white.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-logo">
          <img alt="shortly" src={logo_white} />
        </div>
        <div className="footer-links">
          <div className="link-box">
            <strong>Features</strong>
            <a href="#">Link Shortening</a>
            <a href="#">Branded Links</a>
            <a href="#">Analytics</a>
          </div>
          <div className="link-box">
            <strong>Resources</strong>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </div>
          <div className="link-box">
            <strong>Company</strong>
            <a href="#">About</a>
            <a href="#">Our Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-socials">
          <img alt="facebook" src={facebook} />
          <img alt="twitter" src={twitter} />
          <img alt="pinterest" src={pinterest} />
          <img alt="instagram" src={instagram} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
