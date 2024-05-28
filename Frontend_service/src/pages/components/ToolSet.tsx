import { useState } from "react";

export const imageUrls = [
  {
    image: "images/Tools/pipesGlue.jpeg",
    Tool: "Pipe Glue",
    category: "Installation",
  },
  {
    image: "images/Tools/punchTool.jpeg",
    Tool: "Punch Tool",
    category: "Installation",
  },
  {
    image: "images/Tools/pipeFittings.jpeg",
    Tool: "Pipe Fittings",
    category: "Installation",
  },
  {
    image: "images/Tools/emitterInsertionTool.png",
    Tool: "Emitter Insertion Tool",
    category: "Installation",
  },
  {
    image: "images/Tools/handPruner.png",
    Tool: "Hand Pruner",
    category: "Installation",
  },
  {
    image: "images/Tools/trenchingTool.jpeg",
    Tool: "Trenching Tool",
    category: "Measurement",
  },
  {
    image: "images/Tools/Taps.jpeg",
    Tool: "Taps",
    category: "water delivery",
  },
  {
    image: "images/Tools/pipeConnectors.jpeg",
    Tool: "Pipes Connectors",
    category: "Installation",
  },
  {
    image: "images/Tools/waterMeter.png",
    Tool: "Water Meter",
    category: "Measurement",
  },
  {
    image: "images/Tools/waterPipes.png",
    Tool: "Water Pipes",
    category: "water delivery",
  },
  {
    image: "images/Tools/irrigationController.jpeg",
    Tool: "Irrigation Controller",
    category: "Measurement",
  },
  {
    image: "images/Tools/waterPump.jpeg",
    Tool: "Water Pump",
    category: "water delivery",
  },
  {
    image: "images/Tools/sprinkler.png",
    Tool: "Sprinkler",
    category: "water delivery",
  },

  {
    image: "images/Tools/sprinklerStand.png",
    Tool: "Sprinkler Stand Tool",
    category: "water delivery",
  },
  {
    image: "images/Tools/soilMoistureSensor.png",
    Tool: "Moisture Sensor",
    category: "Measurement",
  },
];

interface props {
  data: {
    image: string;
    Tool: string;
    category: string;
  }[];
}

function ToolSet({ data }: props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    filterData(value)
  };


 
  const filterData = (value: string) => {
    const filtered = data.filter((item) =>
      item.Tool.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };



  const InstallationTools = filteredData.filter(
    (tool) => tool.category === "Installation"
  );

  const WaterDeliveryTools = filteredData.filter(
    (tool) => tool.category === "water delivery"
  );

  const MeasurementTools = filteredData.filter(
    (tool) => tool.category === "Measurement"
  );
  console.log(filteredData);

  return (
    <>
      <div className="search-bar-wrapper d-flex justify-content-center">
        <input
          type="text"
          className="d-flex justify-content-center border border-none outline-success rounded ps-4 fs-4 fw-bold shadow-sm search-input"
          placeholder="search tool..."
          style={{ height: "4rem", width: "40rem" }}
          value={searchQuery}
          onChange={handleChange}
        />
        <button className="btn btn-success btn-lg m-2 ms-4 mb-3 fw-bold">
          Search
        </button>
      </div>
      <div className="col-lg-12 d-flex gap-4 flex-wrap justify-content-center p-5">
        {filteredData.length > 0 ? (
          <>
            {InstallationTools.map((url, index) => (
              <div
                className="w-25 h-25 bg-white card tool border border-success tool-card"
                id="installationTools"
              >
                <h1 className="card-text text-secondary fs-5 ms-auto p-2">
                  Installation
                </h1>
                <img
                  src={url.image}
                  alt={`Image ${index + 1}`}
                  className="flex-wrap h-25 w-75"
                />
                <label className="card-text text-center fw-bold fs-3">
                  {url.Tool}
                </label>
                <div className="card-body ms-auto">
                  <button className="btn bg-success text-white fw-bold text-center me-auto">
                    Usage
                  </button>
                </div>
              </div>
            ))}
            {WaterDeliveryTools.map((url, index) => (
              <div
                className="w-25 h-25 bg-white card tool border border-success"
                id="waterDelivery"
              >
                <h1 className="card-text text-secondary fs-5 ms-auto p-2">
                  Water delivery
                </h1>
                <img
                  src={url.image}
                  alt={`Image ${index + 1}`}
                  className="flex-wrap h-50 w-50"
                />
                <label className="card-text text-center fw-bold fs-3">
                  {url.Tool}
                </label>
                <div className="card-body ms-auto">
                  <button className="btn bg-success text-white fw-bold text-center mb-auto">
                    Usage
                  </button>
                </div>
              </div>
            ))}
            {MeasurementTools.map((url, index) => (
              <div
                className="w-25 h-25 bg-white card tool border border-success"
                id="measurementTools"
              >
                <h1 className="card-text text-secondary fs-5 ms-auto p-2">
                  Measurement
                </h1>
                <img
                  src={url.image}
                  alt={`Image ${index + 1}`}
                  className="flex-wrap h-50 w-50"
                />
                <label className="card-text text-center fw-bold fs-3">
                  {url.Tool}
                </label>
                <div className="card-body ms-auto">
                  <button className="btn bg-success text-white fw-bold text-center ms-auto">
                    Usage
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-danger fs-2 fw-bold vh-100 ">No Tool found!</p>
        )}
      </div>
    </>
  );
}

export default ToolSet;
