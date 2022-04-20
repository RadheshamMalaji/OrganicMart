import Navigation from "../../components/Navigation";
import React, { useEffect, useState } from "react";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";
import "../../App.css";
import Swal from "sweetalert2";

const AddAddressScreen = (props) => {
  const [flatNo, setflatNo] = useState("");
  const [societyName, setsocietyName] = useState("");
  const [area, setarea] = useState("");
  const [city, setcity] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [state, setstate] = useState("");
  const [id, setid] = useState("");

  useEffect(() => {
    setid(window.localStorage.getItem("user_id"));
  }, []);

  const addAddress = () => {
    const supplierId = props.match.params.id;
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
      // let message = res.data.result;
      Swal.fire("Supplier Registered Successfully", "", "success");
      props.history.push("/adminhome");
    });
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <div className="text-light fs-1">Edit Address</div>
        <br />
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label fw-bold text-light ">
              Flat No
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Society Name
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              Area
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              City
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              pincode
            </label>
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
            <label className="col-sm-4 col-form-label fw-bold text-light">
              state
            </label>
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
            <button
              className="btn4 btn-success float-end fw-bold"
              onClick={addAddress}
            >
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
