import footerContact from "../../api/footerApi.json";
import { NavLink } from "react-router-dom";
// import { IoLocation } from "react-icons/io5";
// import { IoCall } from "react-icons/io5";
// import { IoMail } from "react-icons/io5";

export const Footers = () => {
  // const footerIcon = {
  //   IoLocation: <IoLocation />,
  //   IoCall: <IoCall />,
  //   IoMail: <IoMail />,
  // };
  return (
    <footer className="section-footer">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{icon}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
