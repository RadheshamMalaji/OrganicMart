import Navigation from "../../components/Navigation";

import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

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
    <div>
      <Navigation />
      <div className="main">
        <Header title="Delivery Address" />
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Flat No</label>
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
            <label className="col-sm-4 col-form-label">Society Name </label>
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
            <label className="col-sm-4 col-form-label">Area</label>
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
            <label className="col-sm-4 col-form-label">City</label>
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
            <label className="col-sm-4 col-form-label">pincode</label>
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
            <label className="col-sm-4 col-form-label">state</label>
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
export default ShowOrderAddress;
