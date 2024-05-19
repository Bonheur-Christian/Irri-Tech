import { ReactNode } from "react";
import RegisterBtn from "../components/Registerbtn";

interface Props {
  children: ReactNode;
  className: string;
}

function Intro({ children}: Props) {
  return (
    <div className="bg-black intro">
      <div className="fs-1 fw-bolder text-center container  text-white">
        {children}
      </div>
      <RegisterBtn>Register</RegisterBtn>
    </div>
  );
}

export default Intro;
