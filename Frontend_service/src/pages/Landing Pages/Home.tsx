import Intro from "../components/intro";
import Body from "../components/Body1";
import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";
import "../../main.css";

const Home = () => {
  return (
    <div>
      <LandingPageBar />

      <Intro className="intro">
        “Improve you harvest by implementing technology which is efficient and
        easy to master”.
      </Intro>
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
