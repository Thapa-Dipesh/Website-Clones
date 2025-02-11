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
            <li><a href="#">Educator training and development</a></li>
            <li><a href="#">Deals for Students and Parents</a></li>
            <li><a href="#">Azure for students</a></li>
          </ul>
        </div>

        <div className="sub-link">
          <p> Business</p>
          <ul>
            <li><a href="#">Microsoft Cloud</a></li>
            <li><a href="#">Microsoft Security</a></li>
            <li><a href="#">Azure</a></li>
            <li><a href="#">Dynamics 365</a></li>
            <li><a href="#">Microsoft 365</a></li>
            <li><a href="#">Microsoft Advertising</a></li>
            <li><a href="#">Microsoft 365 Copilot</a></li>
            <li><a href="#">Microsoft Teams</a></li>
          </ul>
        </div>

        <div className="sub-link">
          <p> Developer & It</p>
          <ul>
            <li><a href="#">Microsoft Developer</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Microsoft Learn</a></li>
            <li><a href="#">Microsoft Tech Community</a></li>
            <li><a href="#">Azure Marketplace</a></li>
            <li><a href="#">AppSource</a></li>
            <li><a href="#">Microsoft Power Platform</a></li>
            <li><a href="#">Visual Studio</a></li>
          </ul>
        </div>

        <div className="sub-link">
          <p> Company</p>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About Microsoft</a></li>
            <li><a href="#">Company news</a></li>
            <li><a href="#">Privacy at Microsoft</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Sustainability</a></li>
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
