import "../../App.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { Component, useState } from "react";

const CreateAccountScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [message, setMessage] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      role: role,
    };
    ApiCustomerService.addUser(user).then((res) => {
      if (res.data.result === null) {
        alert("Email Addreess Already Registered");
      }
      if (res.data.result !== null) {
        alert("SignUp successfully");
        setMessage("SignUp successfully.");
        props.history.push("/login");
      }
    });
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Create Account" />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">First Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Last Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="row mb-3">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Password</label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Phone</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="float-start">
              <br></br>
              Existing User? <Link to="/login">Login here</Link>
            </div>
            <button
              className="btn-hover color-9 float-end"
              onClick={registerUser}
            >
              Register
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccountScreen;
