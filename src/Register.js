import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:3002/register", values);
      navigate("/");
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label for="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>

        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg m-3">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
