function Body() {
  return (
    <>
      <div className=" bg-success-subtle p-5">
        <div className="d-flex">
          <div className="p-2 fs-3">
            <h1 className="m-4 mt-5">SMART FARMS.</h1>
            <p className="m-4 fade show">
              Smart farms utilize technology like IoT, drones, AI, and data
              analytics to optimize agricultural processes. By monitoring crop
              health, soil conditions, and weather in real-time, they improve
              resource management and increase efficiency, leading to higher
              yields. These farms aim to enhance sustainability, reduce resource
              consumption, and boost productivity in agriculture.
            </p>
          </div>
          <div>
            <img
              src={"/images/farm.png"}
              alt="farm illustrating irrigation"
              className="rounded-3 shadow-lg m-5 mt-5"
            />
          </div>
        </div>
        <div className="p-2 fs-3">
          <h1 className="m-4 m-5">IRRIGATION</h1>
          <p className="m-4">
            Irrigation is the artificial provision of water to crops, vital in
            areas with insufficient rainfall. It supports plant growth and
            maximizes yields. Different methods like surface, sprinkler, and
            drip irrigation are used based on factors like soil type and water
            availability, aiming for efficient water use and optimal crop
            health.
          </p>
          <p className="m-4">
            Irrigation helps the plant to grow well with the supply of all the
            nutrients . In addition irrigation provide the plant with water
            which enhance the nutrients flow.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="p-2 fs-3 ">
            <p className="m-4 p-5">
              Smart irrigation is done with the help of sprinklers as shown on
              this picture.
            </p>
          </div>
          <div>
            <img
              src={"./images/farm2.jpg"}
              alt="Sprinkler"
              className="m-4 shadow"
            />
          </div>
        </div>
        <div className="m-4 d-flex">
          <div className="fs-3 p-2">
            <p className="m-4 p-5">
              In Rwanda around  1.345 million hectares (56.6%) dedicated to
              agriculture. According to the results obtained lately around 70%
              of the total population Rwanda are involved in agriculture
              activities.
            </p>
          </div>
          <div className="justify-content-center">
            <img
              src={"./images/field.jpg"}
              alt=" fields"
              className=" m-5 ms-5 mt-5 me--5 rounded-4 shadow justify-content-center"
            />
          </div>
        </div>
      </div>
      <div className="fs-3">
        <p className="m-4 p-5">
          Although many Rwandans are involved in the agriculture activities, few
          of them are aware of practicing irrigation. So, as the innovators we
          developed the platform for which you can obtain the information about
          irrigation. In case you need the establishment of one of the
          technologies explained you can contact us.
        </p>
        <div className="d-flex">
          <p className="m-4 p-5">
            According to the government master plan of enhancing the irrigation
            in the country, all the requirements and needs for the
            implementation are available in our company.
          </p>
          <img
            src={"./images/map.png"}
            alt="Map of Rwanda"
            className="m-4 p-4"
          />
        </div>
      </div>
    </>
  );
}

export default Body;
