import Navigation from "../../components/Navigation";

import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";

const ShowOrderAddress = (props) => {
  const [state, setState] = useState({
    flatNo: "",
    societyName: "",
    area: "",
    city: "",
    pinCode: "",
    state: "",
    message: "",
  });

  useEffect(() => {
    ApiCustomerService.getOrderAddress(
      window.localStorage.getItem("orderIdForDetails")
    ).then((res) => {
      let address = res.data.result;
      address !== null &&
        setState({
          flatNo: address.flatNo,
          societyName: address.societyName,
          area: address.area,
          city: address.city,
          pinCode: address.pinCode,
          state: address.state,
        });
    });
  }, []);

  const backToOrderHistory = () => {
    props.history.push("/myaccount/orderhistory");
  };

  return (
    <div className=" com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <ul class="d-flex justify-content-center">
          <i class="fa fa-map-marker fs-1 text-light" aria-hidden="true">
            Delivery Address
          </i>
        </ul>
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Flat No
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="flatNo"
                value={state.flatNo}
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
                value={state.societyName}
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
                value={state.area}
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
                value={state.city}
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
                value={state.pinCode}
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
                value={state.state}
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
export default ShowOrderAddress;
