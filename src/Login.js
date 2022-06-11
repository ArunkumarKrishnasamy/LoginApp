import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      inputEmail: "",
      inputPassword: "",
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post("http://localhost:3002/login", values);
        window.localStorage.setItem("myapptoken", loginData.data.token);
        navigate("/users");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label for="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            value={formik.values.inputEmail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="inputPassword" className="form-label">
            Password
          </label>
          <input
            type={"text"}
            className="form-control"
            id="inputPassword"
            onChange={formik.handleChange}
            value={formik.values.inputPassword}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg mb-3">
          Login
        </button>{" "}
        <br />
        <Link to={"/register"}>
          {" "}
          <button className="btn btn-outline-secondary ">Register</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
