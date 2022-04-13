import Navigation from "../../components/Navigation";
//import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

const AddAddressScreen = (props) => {
  const [flatNo, setflatNo] = useState("");
  const [societyName, setsocietyName] = useState("");
  const [area, setarea] = useState("");
  const [city, setcity] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [state, setstate] = useState("");
  const [message, setmessage] = useState("");
  const [id, setid] = useState("");

  useEffect(() => {
    setid(window.localStorage.getItem("user_id"));
  }, []);

  const addAddress = () => {
    const supplierId = id;
    console.log(supplierId);
    let addr = {
      flatNo: flatNo,
      societyName: societyName,
      area: area,
      city: city,
      pinCode: pinCode,
      state: state,
    };
    ApiSupplierService.addAddress(supplierId, addr).then((res) => {
      let message = res.data.result;
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
                  setflatNo(e.target.value);
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
                  setsocietyName(e.target.value);
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
                  setarea(e.target.value);
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
                  setcity(e.target.value);
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
                  setpinCode(e.target.value);
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
                  setstate(e.target.value);
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
