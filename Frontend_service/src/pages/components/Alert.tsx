import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: ()=> void;
  
}

function Alert({ children,onClose }: Props) {
  return (
    <div className="alert alert-dismissible alert-success p-4 m-2 justify-content-center">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
