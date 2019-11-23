import * as React from "react";
import "./styles.scss";
import LoginForm from "./RegisterForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="register-card column">
        <img
          src="/assets/mealy.png"
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
            <Link to="/login">
              <strong>Entra aquí</strong>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
