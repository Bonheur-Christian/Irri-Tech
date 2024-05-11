import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Techniques() {
  return (
    <>
      <NavBar />
      <div className="Techniques">
        <div className="container-xxl shadow-sm">
          <p className="fs-3 p-5 m-4">
            There are many irrigation techniques, but our project is concerned
            with Drip and Sprinkler irrigation.
          </p>
        </div>
        <div className="devices container d-flex gap-5 justify-content-center ps-5">
          <div className="shadow mb-2" style={{ width: "50%" }}>
            <img src={"/images/water pump.png"} alt="soil moisture sensor" />
            <label className="label text-secondary">Water pump</label>
          </div>
          <div className="shadow mb-2" style={{ width: "50%" }}>
            <img src={"/images/sprinkler.png"} alt="Sprinkler" />
            <label className="label text-secondary">Sprinkler</label>
          </div>
        </div>
        <div className="fs-3 fw-bolder text-center mt-5">
          {""}
          {/* irrigation set up*/}
          <h2>The set up of the Sprinkler irrigation system. </h2>
          <p className="fw-bolder fs-4"> I. Field Set Up</p>
          <label className=" text-secondary fst-italic fw-bold pb-5">
            Sprinkler irrigation system using Vertical Sprinklers
          </label>
          <img
            src={"/images/full system.png"}
            alt="irrigatin system using bore holes"
          />
          <label className=" text-secondary fst-italic fw-bold pb-5 d-block">
            Sprinkler irrigation system using Aerial Sprinklers
          </label>
          <img
            src={"/images/illustrated pipes connection .png"}
            alt="connection of Pipes"
          />
        </div>
        <div className="fs-3 m-4 p-5">
          <p>
            The field is equipped with soil moisture sensors to collect the
            current state of the field and sends the information to the control
            station.
          </p>
          <div className="sensors d-flex justify-content-center gap-5">
            <div className="shadow mb-2" style={{ width: "50%" }}>
              <img
                src={"/images/soil moisture sensor.png"}
                alt="soil moisture sensor"
              />
              <label className="label text-secondary fst-italic">
                Soil moisture Sensor
              </label>
            </div>
            <div className="shadow m-2" style={{ width: "50%" }}>
              <img
                src={"/images/sensor illustration in field.png"}
                alt="Sensor Illustration"
              />
              <label className="label text-secondary fst-italic">
                Sensor in Field
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Techniques;
