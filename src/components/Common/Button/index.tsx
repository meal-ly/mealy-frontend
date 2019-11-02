import * as React from "react";
import "./styles.scss";

interface IButtonProps {
  children: string;
  variant: string;
  onClick?: () => void;
}

const Button = ({ children, variant, onClick }: IButtonProps) =>
  <button className={variant} type="button" onClick={onClick}>
    {children}
  </button>;

export default Button;
