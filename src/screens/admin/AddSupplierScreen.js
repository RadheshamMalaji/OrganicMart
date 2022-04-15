import "../../App.css";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useState } from "react";
import Swal from "sweetalert2";

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
        Swal.fire("Email Addreess Already Registered", "", "error");
        // alert("Email Addreess Already Registered");
      }
      if (res.data.result !== null) {
        Swal.fire("Supplier Add successfully", "", "success");
        setMessage("Supplier Add successfully.");
        props.history.push("/addaddress/" + res.data.result);
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
          {/* <i class="fa fa-plus-square fs-1 " aria-hidden="true">
            &nbsp;
          </i> */}

          <div title="Add Supplier Account" class="fs-1 fw-bold text-light">
            Add Supplier Account
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

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Category Name
            </label>
            <div className="col-sm-8">
              <div>
                {/* <label htmlFor="role" className="formFieldLabel"></label> */}
                <select
                  id="category"
                  name="category"
                  placeholder="Choose a Category"
                  className="form-control form-control-md mb-2"
                  value={categoryName}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled>
                    Select your Category
                  </option>

                  <option value="Fruits">Fruits</option>
                  <option value="Cerealsandpulses">Cereals and Pulses</option>
                  <option value="DryFruits">DryFruits</option>
                  <option value="Vegetable">Vegetable</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <button
              className="btn4 btn-success float-end fw-bold"
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
