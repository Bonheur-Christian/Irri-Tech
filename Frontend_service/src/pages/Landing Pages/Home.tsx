import Intro from "../components/intro";
import RegisterBtn from "../components/Registerbtn";
import Body from "../components/Body1";
import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <LandingPageBar />

      <Intro>
        “Improve you harvest by implementing technology which is efficient and
        easy to master”.
      </Intro>
      <RegisterBtn>Register</RegisterBtn>
      <Body />
      <Footer/>
    </div>

  );
};

export default Home;
