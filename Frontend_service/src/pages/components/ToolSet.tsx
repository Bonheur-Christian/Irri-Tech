interface Props {
  title: string;
  backgroundColor: string;
  tool1: string;
  tool2: string;
  tool4: string;
  tool3: string;
  tool5: string;
  tool6: string;
  tool7: string;
  tool8: string;
  tool9: string;
  tool10: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7:string;
  image8:string;
  image9:string;
  image10: string;
}

function ToolSet({
  title,
  backgroundColor,
  tool1,
  tool2,
  tool3,
  tool4,
  tool5,
  tool6,
  tool7,
  tool8,
  tool9,
  tool10,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
}: Props) {
  return (
    <div className={`p-4 bg-${backgroundColor}-subtle`}>
      <h2 className="f-2 fw-bolder text-center">{title}</h2>
      <div className="m-4 p-4 d-flex justify-content-center gap-5">
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image1}`}
            alt="Pipe glue"
            className="image-fluid w-100 h-75"
          />
          <label className="d-block fw-bold fs-3 border-top">{tool1}</label>
        </div>
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image2}`}
            alt="Pipe cutter"
            className="image-fluid w-100 h-75"
          />
          <label className="d-block fw-bold fs-3 border-top">{tool2}</label>
        </div>
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image3}`}
            alt=" Sprinkler stand"
            className="image-fluid w-100 h-75"
          />
          <label className="d-block fw-bold fs-3 border-top">{tool3}</label>
        </div>
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image4}`}
            alt="Trenching tool"
            className="image-fluid w-100 h-75"
          />
          <label className="d-block fw-bold fs-3 border-top">{tool4}</label>
        </div>

        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image5}`}
            alt="Connectors"
            className="image-fluid w-100 h-75"
          />
          <label className="d-block fw-bold fs-3 border-top">{tool5}</label>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-5 m-4">
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image6}`}
            alt="Water pump"
            className="image-fluid w-100 h-75 border-bottom"
          />
          <label className="d-block fw-bold fs-3 ps-5">{tool6}</label>
        </div>
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image7}`}
            alt="Pipes"
            className="image-fluid w-100 h-75 border-bottom"
          />
          <label className="d-block fw-bold fs-3 ps-5">{tool7}</label>
        </div>
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image8}`}
            alt="Sprinklers"
            className="image-fluid w-100 h-75 border-bottom"
          />
          <label className="d-block fw-bold fs-3 ps-5">{tool8}</label>
        </div>
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image9}`}
            alt="water tank"
            className="image-fluid w-100 h-75 border-bottom"
          />
          <label className="d-block fw-bold fs-3 ps-5">{tool9}</label>
        </div>
        <div className="shadow-lg w-25 bg-dark-subtle">
          <img
            src={`/images/Tools/${image10}`}
            alt="tank tap"
            className="image-fluid w-100 h-75 border-bottom"
          />
          <label className="d-block fw-bold fs-3 ps-5">{tool10}</label>
        </div>
      </div>
    </div>
  );
}

export default ToolSet;
