import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  margin: string;
  padding: string;
  color: string;
  type: string;
  alignment?: string;
  onClick?: () => void;
}

function Button({
  children,
  margin,
  padding,
  color,
  type,
  alignment,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`btn ${margin} ${padding} btn-outline-${color} btn-${type} btn-${alignment}border-light shadow-sm`}
    >
      {children}
    </button>
  );
}

export default Button;
