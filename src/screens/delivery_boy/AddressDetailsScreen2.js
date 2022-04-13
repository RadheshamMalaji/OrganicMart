import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const AddressDetailsScreen2 = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const [orderAdd, setOredrAdd] = useState([]);

  const backToOrderHistory = () => {
    props.history.push("/pendingorderfordb");
  };

  useEffect(() => {
    ApiCustomerService.getUserDetails(
      window.localStorage.getItem("orderIdForDetails")
    ).then((res) => {
      JSON.stringify(window.localStorage.setItem("u", res.data.result));
      // let user = res.data.result;
      setUserDetails(res.data.result);
    });

    ApiCustomerService.getOrderAddress(
      window.localStorage.getItem("orderIdForDetails")
    ).then((res) => {
      // let address = res.data.result;
      setOredrAdd(res.data.result);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Delivery Address" />
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">First Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={userDetails.firstName}
                readOnly
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
                value={userDetails.lastName}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="email"
                value={userDetails.email}
                readOnly
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
                value={userDetails.phone}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Flat No</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="flatNo"
                value={orderAdd.flatNo}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Society Name </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="societyName"
                value={orderAdd.societyName}
                readOnly
              />
            </div>
          </div>

          <div class="row mb-3">
            <label className="col-sm-4 col-form-label">Area</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="area"
                value={orderAdd.area}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">City</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="city"
                value={orderAdd.city}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">pincode</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="pinCode"
                value={orderAdd.pinCode}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">state</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="state"
                value={orderAdd.state}
                readOnly
              />
            </div>
          </div>
          <div className="mb-3">
            <button
              className="btn4 btn-success float-end"
              onClick={backToOrderHistory}
            >
              Back
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddressDetailsScreen2;
