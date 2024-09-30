// import { FaLongArrowAltRight } from "react-icons/fa";
export const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="pragraph">
            Discover the history, culture and beauty of every nation. Sport,
            search and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring{" "}
          </button>
        </div>
        <div className="hero-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/576/863/non_2x/world-tour-travel-illustration-vector.jpg"
            alt="World Beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
