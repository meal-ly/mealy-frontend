import * as React from "react";
import "./styles.scss";
import { Formik } from "formik";
import Button from "../Common/Button/";

const initialValues = {
  email: "",
  password: "",
  name: "",
  lastName: "",
  address: "",
};

const LoginForm = () => (
  <div>
    <Formik
      initialValues={initialValues}
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
        <form onSubmit={handleSubmit} className="column">
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
          <div className="input-container column">
            <label className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="John"
            />
            {errors.name && touched.name &&
              <label className="form-label">
                {errors.name}
              </label>
            }
          </div>
          <div className="input-container column">
            <label className="form-label">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder="John"
            />
            {errors.lastName && touched.lastName &&
              <label className="form-label">
                {errors.lastName}
              </label>
            }
          </div>

          <Button variant="rounded">
            Crear Cuenta
          </Button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
