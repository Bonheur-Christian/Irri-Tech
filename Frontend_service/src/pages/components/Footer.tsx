import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="d-flex gap-5 bg-dark">
      <div className="m-4">
        <address className="fs-4 m-4  p-5 text-light d-flex gap-5">
          <div className="border-end border-success pe-5">
            <h2 className=" text-success-subtle">Contacts</h2>
            <p>Email: irritech@gmail.com</p>
            <p>Tel: 0783144722 </p>
            <p>Website: irritech.com</p>
          </div>
          <div className="border-end border-success pe-5">
            <h2 className="text-success fw-bolder ">Navigate</h2>
            <div className="m-4">
              <Link
                to="/"
                className="text-info fw-bolder text-decoration-none "
                style={{ display: "block" }}
              >
                Home
              </Link>
              <Link
                to="/about us"
                className="text-info fw-bolder text-decoration-none"
                style={{ display: "block" }}
              >
                About Us
              </Link>
              <a
                href="#"
                className="text-info fw-bolder text-decoration-none"
                style={{ display: "block" }}
              >
                Locations
              </a>
            </div>
          </div>
        </address>
      </div>
      <div className="ms-auto m-4 p-4">
        <h2 className="text-success">Connect with us via:</h2>
        <div className="svg m-4 d-flex gap-5 ms-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            color="white"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            color="white"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-instagram"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            color="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
