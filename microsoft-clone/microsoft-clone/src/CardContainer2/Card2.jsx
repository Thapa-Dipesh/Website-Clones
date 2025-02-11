import React from "react";
import "../CardContainer/Card.css";
import "./Card2.css";

const Card2 = () => {
  const cardDetails = [
    {
      image: "../src/assets/asset 15.avif",
      title: "Microsoft 365 Copilot",
      description:
        "Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
      btn: "Learn more",
    },
    {
      image: "../src/assets/asset 16.avif",
      title: "Get Microsoft Teams for your business",
      description:
        " Online meetings, chat, real-time collaboration, and shared cloud storage—all in one place.",
      btn: "Find the right plan for your business",
    },
    {
      image: "../src/assets/asset 20.avif",
      title: "Visual Studio 2022",
      description:
        "Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services, and games.",
      btn: "Download now",
    },
    {
      image: "../src/assets/asset 27.avif",
      title: "Welcome to your Windows 365 Cloud PC",
      description:
        " Securely stream your Windows experience from the Microsoft cloud to any device.",
      btn: "Get it today",
    },
  ];
  return (
    <div className="container">
      <h1 className="card-2-title">For business</h1>
      <div className="card-2-container">
        {cardDetails.map((item, index) => (
          <div key={index} className="card">
            <div className="card-img">
              <img src={item.image} alt="" />
            </div>
            <div className="card-title">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="card-btn">
              <button>{item.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
