function ToolSet() {
  const imageUrls = [
    { image: "images/Tools/pipesGlue.jpeg", Tool: "Tap" },
    { image: "images/Tools/punchTool.jpeg", Tool: "Punch Tool" },
    { image: "images/Tools/pipeFittings.jpeg", Tool: "Pipe Fittings" },
    { image: "images/Tools/emitterInsertionTool.jpeg", Tool: "Emitter Insertion Tool" },
    { image: "images/Tools/handPruner.jpeg", Tool: "Hand Pruner" },
    { image: "images/Tools/trenchingTool.jpeg", Tool: "Data Logger" },
    { image: "images/Tools/Taps.jpeg", Tool: "Taps" },
    { image: "images/Tools/pipeConnectors.jpeg", Tool: "Pipes Connectors" },
    { image: "images/Tools/waterMeter.jpeg", Tool: "Water Meter" },
    { image: "images/Tools/waterPipes.jpeg", Tool: "Water Pipes" },
    { image: "images/Tools/Taps.jpeg", Tool: "Tap" },
    { image: "images/Tools/Taps.jpeg", Tool: "Tap" },

  ];
  return (
    <div className="d-flex ms-5 gap-4 flex-wrap h-25">
      {imageUrls.map((url, index) => (
        <div className="w-25 h-50 bg-white card tool border border-success">
          <img src={url.image} alt={`Image ${index +1}`} className="flex-wrap h-50" />
          <label className="card-text text-center fw-bold fs-3 mt-4">{url.Tool}</label>
          <div className="card-body">
            <button className="btn bg-success text-white fw-bold text-center mb-auto">
              Usage
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToolSet;
