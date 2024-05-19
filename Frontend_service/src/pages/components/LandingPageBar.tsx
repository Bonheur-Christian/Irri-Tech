import { Link } from "react-router-dom";
import Button from "./Button";

function LandingPageBar() {
  return (
    <>
      <nav className="container-fluid navbar  bg-white shadow sticky-top">
        <img src={"./images/logo.svg"} alt="logo" className="ps-4" />
        <div className="d-flex ps-5 gap-5 ms-5 ms-auto navbar">
          <Link
            to="/"
            className="text-decoration-none text-black  fs-5 fw-bold"
          >
            Home
          </Link>
          <Link
            to="/about us"
            className="text-decoration-none text-dark fs-5 fw-bolder"
          >
            About Us
          </Link>
          <Link
            to="/contacts"
            className="text-decoration-none text-dark fs-5 fw-bolder"
          >
            Contacts
          </Link>
        </div>
        <div className="ms-auto me-5">
          <Link to="/signin">
            <Button
              color="success"
              type="btn-md"
              margin="m-4 gap-4"
              padding="p-2"
            >
              Sign in
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default LandingPageBar;
