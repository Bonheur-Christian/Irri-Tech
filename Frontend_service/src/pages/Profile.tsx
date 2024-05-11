import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

function Profile() {
  const token = localStorage.getItem("token")
  console.log(token);
   
  const handleLogOut = ()=>{
    localStorage.removeItem("token")
  }
  
  return (
    <>
      <NavBar />
      <div className="justify-content-center mb-5 ms-5 ps-5">
        <h2 className="pt-5 ps-5">My Account</h2>
        <div className="d-flex  p-4 ">
          <div className="ps-5 pe-5">
            <img
              src={"./user.png"}
              alt="Profile"
              className="rounded shadow m-2"
            />
          </div>
          <div className="w-50 ps-5 pt-4 fs-4 border-start border-dark-subtle">
            <p className="fw-bolder">MUHUMURE Bonheur Christian</p>
            <p className="pb-5">
              A Software Developer From Rwanda Coding Academy. CEO of Irri-Tech
              initiative. The initiative tend to solve famine problem in society
              by implementing smart irrigation system.
            </p>
            <a
              href="https://github.com/Bonheur-Christian/Irri-Tech"
              className="text-decoration-none text-success"
            >
              Full Project
            </a>
          </div>
        </div>
        <div className=" ps-5 ms-4 d-flex ">
          <div className=" border w-25 me-4 p-5 pb-2 shadow-sm">
            <div className="d-flex gap-2">
              <img src={"./home.svg"} alt="home" />
              <p className="pt-4 fw-bolder">Home</p>
            </div>
            <div className="d-flex gap-2">
              <img src={"./tool.svg"} alt="home" />
              <p className="pt-4 fw-bolder">Tools</p>
            </div>
            <div className="d-flex gap-2">
              <img src={"./map-pin.svg"} alt="home" />
              <p className="pt-4 fw-bolder">Locations</p>
            </div>
            <Link to="/SignIn" className="text-decoration-none text-success fw-bolder">
              <div className="d-flex gap-2" onClick={handleLogOut}>
                <img src={"./log-out.svg"} alt="home" />
                <p className="pt-4 fw-bolder">Log-out</p>
              </div>
            </Link>
          </div>
          <div className="border w-50 shadow-sm">
            <h2 className="fw-bolder text-center m-4 text-success">
              Account Details
            </h2>
            <section className="p-5 m-5 w-75 shadow-sm">
              <div>
                <label className="fs-3 fst-italic">Name:</label>
                <p>MUHUMURE Bonheur Christian</p>
              </div>
              <div>
                <label className="fs-3 fst-italic">Email:</label>
                <p>mbonheurc23@gmail.com</p>
              </div>
              <div>
                <label className="fs-3 fst-italic">Password:</label>
                <p>Muhumure123</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
