import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        <h1>Maximise the everyday with Microsoft 365</h1>
        <p>
          Get online protection, secure cloud storage and innovative apps
          designed to fit your needs – all in one plan.
        </p>
        <div className="section-btns">
          <button>For 1 person</button>
          <li>
            <a>For up to 6 people &#62;</a>
          </li>
        </div>
      </div>
      <img
        src="../src/assets/asset 9.avif"
        alt="sectionImage"
        className="section-img"
      />
    </div>
  );
};

export default Section;
