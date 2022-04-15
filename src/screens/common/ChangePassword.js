import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const ChangePasswordScreen = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setId(window.localStorage.getItem("user_id"));
  }, []);

  const changePassword = (e) => {
    e.preventDefault();
    ApiCustomerService.editUserPassword(id, password).then((res) => {
      Swal.fire("Password Changed successfully", "", "success");
      //alert("Password Changed successfully");
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
          <div class="fa fa-unlock fs-1 text-light" aria-hidden="true">
            ChangePassword
          </div>
        </ul>
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Enter New Password
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
          <div className="mb-3">
            <button
              className="btn btn-success float-end fw-bold"
              onClick={changePassword}
            >
              Change Password
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordScreen;
