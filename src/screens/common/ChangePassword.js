import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const ChangePasswordScreen = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setId(window.localStorage.getItem("user_id"));
  }, []);

  const changePassword = (e) => {
    e.preventDefault();
    ApiCustomerService.editUserPassword(id, password).then((res) => {
      alert("Password Changed successfully");
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
    <div>
      <Navigation />
      <div className="main">
        <Header title="Change Password" />
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">
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
              className="btn4 btn-success float-end"
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
