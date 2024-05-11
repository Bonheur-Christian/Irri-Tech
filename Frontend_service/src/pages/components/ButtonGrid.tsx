// function GridButtons() {
//   return (
//     <>
//       <div className="d-flex text-center gap-4 justify-content-center m-4">
//         <div>
//           <button className="btn btn-outline-success col-12 btn-block">Techniques</button>
//         </div>
//         <div>
//           <button className="btn btn-outline-success col-12 btn-block">Tools</button>
//         </div>
//         <div>
//           <button className="btn btn-outline-success col-12 btn-block">Efficiency</button>
//         </div>
//         <div>
//           <button className="btn btn-outline-success col-12 btn-block">Performance</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default GridButtons;


// ButtonGrid.tsx
function GridButtons() {
  return (
    <>
      <div className="container-fluid m-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="d-flex text-center gap-4 justify-content-center m-4">
              <div>
                <button className="btn btn-outline-success btn-block w-auto">Techniques</button>
              </div>
              <div>
                <button className="btn btn-outline-success btn-block">Tools</button>
              </div>
              <div>
                <button className="btn btn-outline-success btn-block">Efficiency</button>
              </div>
              <div>
                <button className="btn btn-outline-success btn-block">Performance</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridButtons;
