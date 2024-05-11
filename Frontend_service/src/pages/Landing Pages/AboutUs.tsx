import Footer from "../components/Footer";
import LandingPageBar from "../components/LandingPageBar";

function AboutUs() {
  return (
    <>
      <LandingPageBar />
      <div className="container">
        <h1 className="display-3 text-dark fw-bolder text-center">Irri-Tech</h1>
        <hr />
        <div>
          <p className="fs-4">
            <section className="m-5">
              Welcome to Irri-Tech, a leading innovator in irrigation technology
              solutions. With a passion for sustainable agriculture and
              efficient water management, we specialize in designing and
              implementing cutting-edge irrigation systems that optimize crop
              yields while conserving water resources. At Irri-Tech, we
              understand the challenges faced by farmers and growers in ensuring
              reliable water supply for their crops. Our team of experts
              combines years of industry experience with the latest advancements
              in irrigation technology to deliver tailor-made solutions that
              meet the unique needs of each client.
            </section>
            {/* <br />   */}
            <section className="m-5">
              From precision drip irrigation systems that deliver water directly
              to plant roots, reducing water wastage and promoting healthier
              growth, to advanced sensor-based systems that optimize irrigation
              schedules based on real-time data, we offer a comprehensive range
              of products and services to support sustainable farming practices.
              Our commitment to quality, innovation, and customer satisfaction
              drives everything we do. Whether you're a small-scale farmer or a
              large agricultural enterprise, we're here to partner with you in
              harnessing the power of technology to achieve optimal irrigation
              efficiency and maximize your crop production. Join us in shaping
              the future of agriculture through intelligent irrigation
              solutions. Together, we can create a greener, more productive
              world for generations to come.
            </section>
            <section className="m-5">
              With Irri-Tech , you utilize different irrigation system used
              world wide. But , here at our company we prioritize Sprinkler and
              Drip irrigation system. If you are Farmer and you need our
              service, our company provide you with the appropriate tools and
              devices used in smart irrigation systems. Inaddition incase you
              need Installation we are here to help you with it.
            </section>

            <h2 className="display-3 text-dark fw-bolder text-center">
              Advantages of our Project
            </h2>
            <hr />
            <p className="fs-4">
              <section className="m-5">
                <ul className="m-2">
                  <li className="m-2">
                    We use Sensors in field to detect the amount of moisure in
                    the field so as we apply the appropriate amount of water to
                    the soil.
                  </li>
                  <li className="m-2">
                    According to the type of the plant in the field we configure
                    the maximum and minimum water requirement for the plant so
                    as toutilize precision irrigation.
                  </li>
                  <li className="m-2">
                    In Drainage system, we use the water tiles technology. This
                    control the water table level so as we prevent the water
                    clogging in farm duringRain seasons.
                  </li>
                  <li className="m-2">
                    We utilize Automated water Sprinklers which are activated
                    directly when the water level drops with out the need for
                    manual integration.
                  </li>
                </ul>
              </section>
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
