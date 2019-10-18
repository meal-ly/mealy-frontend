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
        <p className="login-welcome">
          ¡Bienvenido!
        </p>
        <LoginForm />
        <p className="login-new">
          ¿Eres nuevo? ¡No te preocupes!
        </p>
        <p className="login-create">
          Crea tu cuenta&nbsp;
          <span>
            <strong>aquí</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
