import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Intro({children}:Props) {
  return <div className="display-1 p-2 fw-bolder text-center container">{children}</div>

}

export default Intro;
