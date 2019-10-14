import * as React from "react";
import "./styles.scss";

interface IButtonProps {
  children: string;
  variant: string;
}

const Button = ({ children, variant }: IButtonProps) =>
  <button className={variant} type="button">
    {children}
  </button>;

export default Button;
