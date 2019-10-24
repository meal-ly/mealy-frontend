import * as React from "react";
import "./styles.scss";
import { Formik } from "formik";
import Button from "../Common/Button/";

const LoginForm = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {
          email: "",
        };
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
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
          <Button variant="rounded" onClick={handleSubmit}>
            Inicia sesión
          </Button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
