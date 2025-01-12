import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links container">
        <div className="sub-link">
          <p>Microsoft Store</p>
          <ul>
            <li>
              <a href="#">Account profile</a>
            </li>
            <li>
              <a href="#">Order tracking</a>
            </li>
          </ul>
        </div>

        <div className="sub-link">
          <p>Microsoft Store</p>
          <ul>
            <li><a href="#">Microsoft in education</a></li>
            <li><a href="#">Devices for education</a></li>
            <li><a href="#">Microsoft Teams for Education</a></li>
            <li><a href="#">Microsoft 365 Education</a></li>
            <li><a href="#">Office Education</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
          </ul>
        </div>

        <div className="sub-link">
          <p> Business</p>
          <ul>
            <li><a href="#">Microsoft in education</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
          </ul>
        </div>

        <div className="sub-link">
          <p> Developer & It</p>
          <ul>
            <li><a href="#">Microsoft in education</a></li>
            <li><a href="#">Devices for education</a></li>
            <li><a href="#">Microsoft Teams for Education</a></li>
            <li><a href="#">Microsoft 365 Education</a></li>
            <li><a href="#">Office Education</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
          </ul>
        </div>

        <div className="sub-link">
          <p> Company</p>
          <ul>
            <li><a href="#">Microsoft in education</a></li>
            <li><a href="#">Microsoft in education</a></li>
            <li><a href="#">Microsoft in education</a></li>
            <li><a href="#">Devices for education</a></li>
            <li><a href="#">Microsoft Teams for Education</a></li>
            <li><a href="#">Microsoft 365 Education</a></li>
            <li><a href="#">Office Education</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
          </ul>
        </div>
        
      </div>

      <div className="sub-footer container">
        <div className="left">
        <img src="../src/assets/asset 5.svg" alt="world" />
        <p> English(Jordan)</p>
        <img src="../src/assets/asset 28.svg" alt="" />
        <p> Your Privacy Choice</p>
        <p>Consumer Health Privacy</p>
        </div>
        <div className="right">
            <p>Contact Microsoft</p>
            <p>Privacy</p>
            <p>Terms of use</p>
            <p>Trademarks</p>
            <p>About our ads</p>
            <span>&copy; microsoft 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
