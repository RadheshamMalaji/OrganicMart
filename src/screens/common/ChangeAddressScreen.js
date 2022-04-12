import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const ChangeAddressScreen = (props) => {
  const [changeAdd, setChangeAdd] = useState([]);
  const [id, setId] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    setId(window.localStorage.getItem("user_id"));
    ApiCustomerService.getUserAddress(
      window.localStorage.getItem("user_id")
    ).then((res) => {
      let address = res.data.result;

      address !== null && setChangeAdd(res.data.result);
    });
  }, []);

  const editAddress = (e) => {
    e.preventDefault();
    let addr = {
      flatNo: flatNo,
      societyName: societyName,
      area: area,
      city: city,
      pinCode: pinCode,
      state: state,
    };
    ApiCustomerService.editUserAddress(id, addr).then((res) => {
      let message = res.data.result;
      alert("Address Update successfully");
      window.localStorage.getItem("user_role") === "CUSTOMER" &&
        props.history.push("/home");
      window.localStorage.getItem("user_role") === "SUPPLIER" &&
        props.history.push("/supplierhome");
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
                value={changeAdd.city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
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
                readOnly
              />
            </div>
          </div>
          <div className="mb-3">
            <button
              className="btn4 btn-success float-end"
              onClick={editAddress}
            >
              Update Address
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangeAddressScreen;
