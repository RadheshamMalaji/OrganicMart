import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const AddressDetailsScreen1 = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const [orderAdd, setOredrAdd] = useState([]);

  const backToOrderHistory = () => {
    props.history.push("/deliveredorderfordb");
  };

  useEffect(() => {
    ApiCustomerService.getUserDetails(
      window.localStorage.getItem("orderIdForDetails")
    ).then((res) => {
      JSON.stringify(window.localStorage.setItem("u", res.data.result));
      //let user = res.data.result;
      console.log("Oder ID : ");
      console.log(window.localStorage.getItem("orderIdForDetails"));
      console.log(res.data.result);
      setUserDetails(res.data.result);
    });

    ApiCustomerService.getOrderAddress(
      window.localStorage.getItem("orderIdForDetails") - 1
    ).then((res) => {
      // let address = res.data.result;
      console.log(res.data.result);
      console.log(window.localStorage.getItem("orderIdForDetails") - 1);
      setOredrAdd(res.data.result);
    });
  }, []);

  return (
    <div className="com-bgimg1 ">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div
        className="main vh-90"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <ul class="d-flex justify-content-center">
          <i class="fa fa-map-marker fs-1 text-light " aria-hidden="true">
            Delivery Address
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
                value={userDetails.firstName}
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
                value={userDetails.lastName}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Email
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Phone
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Flat No
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Society Name{" "}
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Area
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              City
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              pincode
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              state
            </label>
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
              className="btn btn-success float-end fw-bold"
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
export default AddressDetailsScreen1;
