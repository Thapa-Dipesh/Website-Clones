import React from "react";
import "../CardContainer/Card.css";
import "./Card2.css";

const Card2 = () => {
  return (
    <div className="container">
      <h1 className="card-2-title">For business</h1>
      <div className="card-2-container">
        <div className="card">
          <div className="card-img">
            <img src="../src/assets/asset 15.avif" alt="" />
          </div>
          <div className="card-title">
            <h1>Microsoft 365 Copilot</h1>
            <p>
              Save time and focus on the things that matter most with AI in
              Microsoft 365 for business.
            </p>
          </div>
          <div className="card-btn">
            <button>Learn more</button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="../src/assets/asset 16.avif" alt="" />
          </div>
          <div className="card-title">
            <h1>Get Microsoft Teams for your business</h1>
            <p>
              Online meetings, chat, real-time collaboration, and shared cloud
              storage—all in one place.
            </p>
          </div>
          <div className="card-btn">
            <button>Find the right plan for your business</button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="../src/assets/asset 20.avif" alt="" />
          </div>
          <div className="card-title">
            <h1>Visual Studio 2022</h1>
            <p>
              Get the most comprehensive IDE for .NET and C++ developers on
              Windows for building web, cloud, desktop, mobile apps, services,
              and games.
            </p>
          </div>
          <div className="card-btn">
            <button>Download now</button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src="../src/assets/asset 27.avif" alt="" />
          </div>
          <div className="card-title">
            <h1>Welcome to your Windows 365 Cloud PC</h1>
            <p>
              Securely stream your Windows experience from the Microsoft cloud
              to any device.
            </p>
          </div>
          <div className="card-btn">
            <button>Get it today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
