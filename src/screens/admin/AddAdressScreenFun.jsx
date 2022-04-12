import Navigation from "../../components/Navigation";
// import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

const AddAddressScreen = (props) => {
  const [flatNo, setFaltNo] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");

  const addAddress = () => {
    const supplierId = props.match.params.id;
    let addr = {
      flatNo: flatNo,
      societyName: societyName,
      area: area,
      city: city,
      pinCode: pinCode,
      state: state,
    };
    ApiSupplierService.addAddress(supplierId, addr).then((res) => {
      //   let message = res.data.result;
      alert("Supplier Registered Successfully");
      props.history.push("/adminhome");
    });
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Edit Address" />
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Flat No</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="flatNo"
                value={flatNo}
                onChange={(e) => {
                  setFaltNo(e.target.value);
                }}
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
                value={societyName}
                onChange={(e) => {
                  setSocietyName(e.target.value);
                }}
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
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
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
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
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
                value={pinCode}
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
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
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <button className="btn4 btn-success float-end" onClick={addAddress}>
              Register Supplier
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressScreen;
