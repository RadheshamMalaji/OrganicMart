import Navigation from "../../components/Navigation";

import React, { Component } from "react";

const DeliveryBoyHomeScreen = (props) => {
  const showProfile = () => {
    props.history.push("/myaccount/profile");
  };
  const editProfile = () => {
    props.history.push("/myaccount/editprofile");
  };
  const changePassword = () => {
    props.history.push("/myaccount/change-password");
  };
  const showPendingOrders = () => {
    props.history.push("/pendingorderfordb");
  };
  const showdeliveredOrders = () => {
    props.history.push("/deliveredorderfordb");
  };
  const logout = () => {
    props.history.push("/logout");
  };

  return (
    <div>
      <Navigation />
      <div className="main1">
        <table>
          <td>
            <button className="btn4 btn-success" onClick={() => showProfile()}>
              Profile
            </button>
          </td>
          <td>
            <button className="btn4 btn-success" onClick={() => editProfile()}>
              Edit Profile
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-success"
              onClick={() => changePassword()}
            >
              Change Password
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-danger"
              onClick={() => showPendingOrders()}
            >
              Pending Orders
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-danger"
              onClick={() => showdeliveredOrders()}
            >
              Delivered Orders
            </button>
          </td>
          <td>
            <button className="btn4 btn-success" onClick={() => logout()}>
              Logout
            </button>
          </td>
        </table>
      </div>
    </div>
  );
};

export default DeliveryBoyHomeScreen;
