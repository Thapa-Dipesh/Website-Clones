import React from "react";
import "./Card.css";

const Card = () => {
  const cardDetails = [
    {
      image: "../src/assets/asset 2.avif",
      title: "Designed for life today—and tomorrow",
      description:
        "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love",
      btn: "See if your PC is ready",
    },
    {
      image: "../src/assets/asset 14.avif",
      title: "Microsoft Edge",
      description:
        " World-class performance with more privacy, more productivity, and more value while you browse.",
      btn: "Download now",
    },
    {
      image: "../src/assets/asset 17.avif",
      title: "Microsoft OneDrive",
      description:
        "Save your files and photos to OneDrive and access them from any device, anywhere.",
      btn: "Learn more",
    },
    {
      image: "../src/assets/asset 19.avif",
      title: "Outlook for iOS and Android",
      description: " Connect. Organize. Get things done.",
      btn: "Download now",
    },
  ];

  return (
    <>
      <div className="card-container container">
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
    </>
  );
};

export default Card;
