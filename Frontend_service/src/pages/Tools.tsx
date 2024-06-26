import ToolSet, { imageUrls } from "./components/ToolSet";
import Button from "./components/Button";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import MyDropdown from "./components/DropDown";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Dropdown } from "react-bootstrap";

function Tools() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="bg-success-subtle">
      <NavBar />
      <Button
        color="success text-white border-success"
        type="lg"
        padding="p-2"
        margin="mt-5 m-4"
        onClick={() => {
          handleShow();
        }}
      >
        Categories
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-light-subtle"
        backdrop={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title m-0 p-0 text-success fw-bolder display-6">
            Tool Set
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1 className="text-success fw-bolder fs-4">All</h1>
          <MyDropdown
            title="All"
            items={[
              "Pipe Glue",
              "Pipes cutter",
              "Sprinkler stand",
              "Trenching tool",
              "Pipe connectors",
              "Water pump",
              "Pipes fittings",
              "Pipes",
              "Sprinklers",
              "Water tank",
              "Tank tap",
              "Drainage tiles",
              "Filters",
              "Data Logger",
              "Water Pressure meter",
              "Water meter",
              "Water pressure regulator",
            ]}
          ></MyDropdown>

          <h1 className="text-success fw-bolder fs-4">Categories</h1>
          <MyDropdown
            title="Installation Tools"
            items={[
              "Pipe Glue",
              "Pipes cutter",
              "Sprinkler stand",
              "Trenching tool",
              "Pipe connectors",
              "Water pump",
              "Pipes fittings",
            ]}
          ></MyDropdown>
          <MyDropdown
            title="Water Delivery tools"
            items={[
              "Pipes",
              "Sprinklers",
              "Water tank",
              "Tank tap",
              "Drainage tiles",
              "Filters",
            ]}
          ></MyDropdown>
          <MyDropdown
            title="Measurement and Control tools"
            items={[
              "Data Logger",
              "Water Pressure meter",
              "Water meter",
              "Water pressure regulator",
            ]}
          ></MyDropdown>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="d-flex justify-content-end p-4 filter">
        <Dropdown>
          <Dropdown.Toggle className="bg-white border-success text-success fw-bold ">
            Filter_by Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <ul className="list-unstyled">
              <li className="p-2 text-decoration-none">
                <a
                  href="#installationTools"
                  className="text-decoration-none fw-bold text-secondary"
                >
                  Installation Tools
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#waterDelivery"
                  className="text-decoration-none fw-bold text-secondary"
                >
                  Water Delivery Tools
                </a>
              </li>
              <li className="p-2">
                <a
                  href="#measurementTools"
                  className="text-decoration-none fw-bold text-secondary"
                >
                  Measurement Tools
                </a>{" "}
              </li>
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* <SearchBar data={imageUrls} /> */}
      {/* <h1 className="m-4 p-4 text-center">
        Tools used in our Irrigation System.
      </h1> */}
      <ToolSet data={imageUrls} />
      <Footer />
    </div>
  );
}

export default Tools;
