import ToolSet from "./components/ToolSet";
import Button from "./components/Button";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import MyDropdown from "./components/DropDown";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Tools() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <NavBar />
      <Button
        color="success"
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
          <h1 className="text-primary fw-bolder fs-4">All</h1>
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

          <h1 className="text-primary fw-bolder fs-4">Categories</h1>
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
      <h1 className="m-4 p-4 text-center">
        Tools used in our Irrigation System.
      </h1>
      <ToolSet
        title=""
        backgroundColor=""
        tool1="Pipe Glue"
        image1="pipe glue.png"
        tool2="Pipes Cutter"
        image2="pipe cutters.png"
        tool3="Sprinkler stand"
        image3="Sprinkler stand.png"
        tool4="Trenching tool"
        image4="trenching tool.png"
        tool5="Pipe Connectors"
        image5="connectors.png"
        tool6="Water Pump"
        image6="pump.png"
        tool7="Pipes"
        image7="Pipes.png"
        tool8="Sprinklers"
        image8="Sprinkler.png"
        tool9="Water tank"
        image9="water tank.png"
        tool10="Tank Tap"
        image10="tank tap.png"
      />
      <ToolSet
        title=""
        backgroundColor=""
        tool1="Drainage Tiles"
        image1="Drainage tiles.png"
        tool2="Filters"
        image2="Filters.png"
        tool3="Hole Punch"
        image3="drip line hole punch.png"
        tool4="Water Meter"
        image4="water meter.png"
        tool5="Irrigation Controller"
        image5="irrigation controller.png"
        tool6="Water Pressure Regulator"
        image6="water pressure regulators.png"
        tool7="Hand Pruner"
        image7="Hand pruner.png"
        tool8="Pipe Fittings"
        image8="pipe fittings.png"
        tool9="Data Logger"
        image9="data logger.png"
        tool10="Emmiter Insertion"
        image10="Emmitter insertion.png"
      />
      <Footer/>
    </>
  );
}

export default Tools;
