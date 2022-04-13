import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const EditProfileScreen = (props) => {
  const [state, setState] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setState({
      id: window.localStorage.getItem("user_id"),
      firstName: window.localStorage.getItem("user_fname"),
      lastName: window.localStorage.getItem("user_lname"),
      email: window.localStorage.getItem("user_email"),
      phone: window.localStorage.getItem("user_phone"),
    });
  }, []);

  const editUser = (e) => {
    e.preventDefault();
    let user = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    ApiCustomerService.editUser(user).then((res) => {
      let user = res.data.result;
      user != null && window.localStorage.setItem("user_fname", user.firstName);
      user != null && window.localStorage.setItem("user_lname", user.lastName);
      user != null && window.localStorage.setItem("user_email", user.email);
      user != null && window.localStorage.setItem("user_phone", user.phone);
      alert("Profile Update successfully");
      window.localStorage.getItem("user_role") === "CUSTOMER" &&
        props.history.push("/home");
      window.localStorage.getItem("user_role") === "SUPPLIER" &&
        props.history.push("/supplierhome");
      window.localStorage.getItem("user_role") === "DELIVERY_BOY" &&
        props.history.push("/deliveryboyhome");
      window.localStorage.getItem("user_role") === "ADMIN" &&
        props.history.push("/adminhome");
    });
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <ul class="d-flex justify-content-center">
          <div class="fa fa-pencil-square-o fs-1 text-light" aria-hidden="true">
            Edit Profile
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
                value={state.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                readOnly
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
          <div className="mb-3">
            <button
              className="btn4 btn-success float-end fw-bold"
              onClick={editUser}
            >
              Edit Profile
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileScreen;
