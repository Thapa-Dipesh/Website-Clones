import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container container">
      <div className="card">
        <div className="card-img">
          <img src="../src/assets/asset 2.avif" alt="" />
        </div>
        <div className="card-title">
          <h1>Designed for life today—and tomorrow</h1>
          <p>
            The next-generation of games. Your goals. Friends and family.
            Windows 11 was made to bring you closer to everything you love
          </p>
        </div>
        <div className="card-btn">
          <button>See if your PC is ready</button>
        </div>
      </div>

      <div className="card">
        <div className="card-img">
          <img src="../src/assets/asset 14.avif" alt="" />
        </div>
        <div className="card-title">
          <h1>Microsoft Edge</h1>
          <p>
          World-class performance with more privacy, more productivity, and more value while you browse.</p>
        </div>
        <div className="card-btn">
          <button>Download now</button>
        </div>
      </div>


      <div className="card">
        <div className="card-img">
          <img src="../src/assets/asset 17.avif" alt="" />
        </div>
        <div className="card-title">
          <h1>Microsoft OneDrive</h1>
          <p>
          Save your files and photos to OneDrive and access them from any device, anywhere.</p>
        </div>
        <div className="card-btn">
          <button>Learn more</button>
        </div>
      </div>


      <div className="card">
        <div className="card-img">
          <img src="../src/assets/asset 19.avif" alt="" />
        </div>
        <div className="card-title">
          <h1>Outlook for iOS and Android</h1>
          <p>
          Connect. Organize. Get things done.</p>
        </div>
        <div className="card-btn">
          <button>Download now</button>
        </div>
      </div>


    </div>
  );
};

export default Card;
