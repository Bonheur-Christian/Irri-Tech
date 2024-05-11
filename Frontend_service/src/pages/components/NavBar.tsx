import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="container-fluid navbar bg-light shadow-sm sticky-top">
      <img src={"/images/logo.svg"} alt="logo" className="p-2" />
      <div className="d-flex p-4 gap-5 me-auto ">
        <Link
          to="/techniques"
          className="text-decoration-none text-dark ps-5 ms-5 fs-3 fw-bolder"
        >
          Techniques
        </Link>
        <Link
          to="/tools"
          className="text-decoration-none text-dark ps-5 ms-5  fs-3 fw-bolder"
        >
          Tools
        </Link>
        <Link
          to="/efficiency"
          className="text-decoration-none text-dark ps-5 ms-5  fs-3 fw-bolder"
        >
          Efficiency
        </Link>
        <Link
          to="/performance"
          className="text-decoration-none text-dark ps-5 ms-5  fs-3 fw-bolder"
        >
          Performance
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
