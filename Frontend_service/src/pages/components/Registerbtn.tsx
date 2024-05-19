import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

function RegisterBtn({ children }: Props) {
  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <Link to="/signup" className="btn btn-success btn-lg m-4 text-decoration-none text-white">{children}</Link>
      </div>
    </div>
  );
}

export default RegisterBtn;
