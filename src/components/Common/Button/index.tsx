import * as React from "react";
import "./styles.scss";

interface IButtonProps {
  children: string;
}

const Button = ({ children }: IButtonProps) =>
  <button className="button" type="button">
    {children}
  </button>;

export default Button;
