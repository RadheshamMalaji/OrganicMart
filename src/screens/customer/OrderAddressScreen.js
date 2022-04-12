import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const OrderAddressScreen = (props) => {
  const [id, setId] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    let user_Id = window.localStorage.getItem("user_id");
    setId(user_Id);
  }, []);

  const addAddress = (e) => {
    e.preventDefault();
    let addr = {
      userId: id,
      flatNo: flatNo,
      societyName: societyName,
      area: area,
      city: city,
      pinCode: pinCode,
      state: state,
    };
    ApiCustomerService.addOrderAddress(addr).then((res) => {
      let id1 = res.data.result;
      window.localStorage.setItem("address_id", id1);
      alert("Address added successfully");
      props.history.push("/cart");
    });
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Add Address" />
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
                  setFlatNo(e.target.value);
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
                  setPinCode(e.target.value);
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
              Add Address
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderAddressScreen;
