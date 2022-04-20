import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";

const SupplierAddress = (props) => {
  const [supplierAdd, setSupplierAdd] = useState([]);

  useEffect(() => {
    const supplierId = props.match.params.id;
    ApiCustomerService.getUserAddress(supplierId).then((res) => {
      let address = res.data.result;
      setSupplierAdd(res.data.result);
      console.log(address);
      address !== null && setSupplierAdd(res.data.result);
    });
  }, []);

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <ul class="d-flex justify-content-center">
          <div
            className="fa fa-map-marker fs-1 text-light"
            title="Delivery Address "
            class="fs-4 "
          ></div>
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
                value={supplierAdd.flatNo}
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
                value={supplierAdd.societyName}
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
                value={supplierAdd.area}
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
                value={supplierAdd.city}
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
                value={supplierAdd.pinCode}
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
                value={supplierAdd.state}
                readOnly
              />
            </div>
          </div>
          <div className="mb-3">
            <Link
              to="/showsupplier"
              className="btn btn-success float-end fw-bold "
            >
              Supplier List
            </Link>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SupplierAddress;
