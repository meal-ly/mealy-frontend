import * as React from "react";
import "./styles.scss";
import { ILoginRequest } from "./types";
import { Formik } from "formik";
import Button from "../Common/Button/";
import { useDispatch } from "react-redux";
import { login } from "../../store/profile/actions";

const dispatcher = (dispatch: React.Dispatch<any>) => ({
  loginAction: () =>
    dispatch(login()),
});

const LoginForm = () => {
  const { loginAction } = dispatcher(useDispatch());

  const handleLogin = (values: ILoginRequest) => {
    // TODO: Wire up Login
    loginAction();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: ILoginRequest ) => {
          handleLogin(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="column">
            <div className="input-container column">
              <label className="form-label">
                Ingresa tu correo electrónico
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="example@mail.com"
              />
              {errors.email && touched.email &&
                <label className="form-label">
                  {errors.email}
                </label>
              }
            </div>
            <label className="form-label">
              Ingresa tu contraseña
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="***********"
            />
            <p className="form-label">
              ¿Olvidaste tu contraseña?
            </p>
            <Button variant="rounded" onClick={() => handleSubmit()}>
              Inicia sesión
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
