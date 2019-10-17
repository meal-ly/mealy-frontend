import * as React from "react";
import "./styles.scss";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card column">
        <img
          src="/assets/dummy3.png"
          alt="login_img"
          width="96"
        />
        <p>¡Bienvenido!</p>
        <LoginForm />
        <p>¿Eres nuevo? ¡No te preocupes!</p>
        <p>
          Crea tu cuenta
          <span>aquí</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
