import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

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
                value={supplierAdd.flatNo}
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
                value={supplierAdd.societyName}
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
                value={supplierAdd.area}
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
                value={supplierAdd.city}
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
                value={supplierAdd.pinCode}
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
                value={supplierAdd.state}
                readOnly
              />
            </div>
          </div>
          <div className="mb-3">
            <Link to="/showsupplier" className="btn btn-success float-end">
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
