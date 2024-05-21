function Body() {
  return (
    <>
      <h1 className="m-4 mt-5 text-center">IRRI-TECH</h1>
      <div className="d-flex ps-5">
        <div className="card home-cards m-5 w-25 h-25 m-4">
          <div className="card-image">
            <img
              src="../images/smartFarms.jpg"
              alt="farm"
              className="w-100 rounded pb-4 m-0"
            />
          </div>
          <h1 className="text-center fw-bold fs-3">SMART FARMS.</h1>
          <div className="card-text p-4 fs-4">
            Smart farms utilize technology like IoT, drones, AI, and data
            analytics to optimize agricultural processes.
          </div>
        </div>
        <div className="card home-cards m-5 w-25 h-25">
          <div className="card-image">
            <img
              src="../images/farmIrrigation.jpg"
              alt="farm"
              className="w-100 rounded h-100"
            />
          </div>
          <h1 className="text-center fw-bold fs-3 pt-4">IRRIGATION</h1>

          <div className="card-text p-4 fs-4">
            Irrigation is the artificial provision of water to crops, vital in
            areas with insufficient rainfall.
          </div>
        </div>
        <div className="card home-cards m-5 w-25 h-4 m-4">
          <div className="card-image">
            <img
              src="../images/maize.jpg"
              alt="farm"
              className="w-100 rounded pb-2 m-0"
            />
          </div>
          <h1 className="text-center fw-bold fs-3">COMMUNITY</h1>
          <div className="card-text p-4 pt-1 fs-4">
            According to the results obtained lately around 70% of the total
            population Rwanda are involved in agriculture activities.
          </div>
        </div>

        <div></div>
      </div>
      <h1 className="text-center text-dark mt-5">SERVICE</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex w-50 fs-3 m-5 p-5 justify-content-center align-items-center border border-success rounded">
          Providing sustainable way of maintaining the soil moisture ensuring
          the good health of the plants. Providing the plant with Enough water
          required for either photosynthesis or mineral transport. At, Irri-Tech
          we enhance the water minimal usage, promote healthy landscape and
          deliver long-term savings for our customers.
          <img src="images/bg.png" alt="" className="w-25 m-4 h-50 rounded" />
        </div>
      </div>
    </>
  );
}

export default Body;
