import React from "react";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <center>
      <button className={"btn btn- " + color} onClick={onClick}>
        {children}
      </button>
    </center>
  );
};

export default Button;
