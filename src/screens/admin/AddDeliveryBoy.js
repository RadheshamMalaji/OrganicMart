import "../../App.css";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddDeliveryBoyScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("DELIVERY_BOY");
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
        Swal.fire("DELIVERY_BOY Add successfully", "", "success");
        setMessage("DELIVERY_BOY Add successfully.");
        props.history.push("/showdeliveryboy");
      }
    });
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <ul class="d-flex justify-content-center">
          <div
            title="Add Delivery Boy Account "
            className="fs-1 fa fa-plus-square fw-bold text-light"
          >
            Add Delivery Boy
          </div>
        </ul>
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label fw-bold text-light">
              First Name
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Last Name
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Email
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Password
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Phone
            </label>
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

          <div className="mb-3 d-flex justify-content-end">
            <button
              className="btn btn-success float-start fw-bold"
              onClick={registerUser}
            >
              Add Delivery Boy
            </button>

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDeliveryBoyScreen;
