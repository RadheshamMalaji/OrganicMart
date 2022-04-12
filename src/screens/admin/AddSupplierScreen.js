import "../../App.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useState } from "react";
const AddSupplierScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("SUPPLIER");
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      role: role,
    };
    ApiCustomerService.addSupplier(categoryName, user).then((res) => {
      if (res.data.result === null) {
        alert("Email Addreess Already Registered");
      }
      if (res.data.result !== null) {
        setMessage("Supplier Add successfully.");
        props.history.push("/addaddress/" + res.data.result);
      }
    });
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Add Supplier Account" />
        <br />
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

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Category Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="categoryName"
                value={categoryName}
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="mb-3">
            <button
              className="btn4 btn-success float-end"
              onClick={registerUser}
            >
              Add Address
            </button>

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddSupplierScreen;
