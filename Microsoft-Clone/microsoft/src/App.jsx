import Card from "./CardContainer/Card";
import Card2 from "./CardContainer2/Card2";
import Header from "./components/Header";
import Footer from "./Footer/Footer";
import Controller from "./Section-1/Controller";
import Section from "./Section-1/Section";
import Section2 from "./Section-2/Section2";
import Links from "./SocialLinks/Links";

function App() {
  return (
    <>
      <Header />
      <Section />
      <Controller />
      <Card />
      <Section2 />
      <Card2 /> 
      <Links />
      <Footer />
    </>
  );
}

export default App;
