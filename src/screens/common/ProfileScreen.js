import Navigation from "../../components/Navigation";
import React, { useEffect, useState } from "react";
const ProfileScreen = (props) => {
  const [state, setState] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setState({
      id: window.localStorage.getItem("user_id"),
      firstName: window.localStorage.getItem("user_fname"),
      lastName: window.localStorage.getItem("user_lname"),
      email: window.localStorage.getItem("user_email"),
      phone: window.localStorage.getItem("user_phone"),
    });
  }, []);

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main " style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <ul class="d-flex justify-content-center">
          <i class="fa fa-user-circle fs-1 text-light" aria-hidden="true">
            User Details
          </i>
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
                value={state.firstName}
                readOnly
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
                value={state.lastName}
                readOnly
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
                value={state.phone}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
