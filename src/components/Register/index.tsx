import * as React from "react";
import "./styles.scss";
import LoginForm from "./RegisterForm";

const Login = () => {
  return (
    <div className="login-container">
      <div className="register-card column">
        <img
          src="/assets/dummy3.png"
          alt="login_img"
          width="96"
        />
        <p className="login-welcome">
          ¡Bienvenido!
        </p>
        <LoginForm />
        <p className="login-create">
          Ya tienes una cuenta?&nbsp;
          <span>
            <strong>Entra aquí</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
