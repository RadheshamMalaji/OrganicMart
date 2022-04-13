import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

const SupplierListScreen = (props) => {
  const [suppliers, setSuppliers] = useState([]);
  const [message, setMessage] = useState("No Supplier Available");

  useEffect(() => {
    getSupplierList();
  }, []);

  const getSupplierList = () => {
    ApiCustomerService.fetchSupplierList().then((res) => {
      setSuppliers(res.data.result);
    });
  };

  const addSupplier = () => {
    props.history.push("/addSupplier");
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <h2 className="text-center fa fa-list-ul fs-1 text-light">
          Supplier List
        </h2>
        <table className="table table-striped text-light">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Products</th>
              <th>Check Available Products</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <div className="container">
              <h5 className="nameColor1">{suppliers.length == 0 && message}</h5>
            </div>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="fw-bold text-light">
                <td>{supplier.firstName}</td>
                <td>{supplier.lastName}</td>
                <td>{supplier.email}</td>
                <td>{supplier.phone}</td>
                <td>
                  <Link
                    to={"/supplier/showproductsbysupplier/" + supplier.id}
                    className="btn btn-success fw-bold"
                  >
                    Check Products
                  </Link>
                </td>
                <td>
                  <Link
                    to={"/addproductfromsupplier/" + supplier.id}
                    className="btn btn-success fw-bold"
                  >
                    Check Available Products
                  </Link>
                </td>
                <td>
                  <Link
                    to={"/supplieraddress/" + supplier.id}
                    className="btn btn-success fw-bold"
                  >
                    Address
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <br></br>
        </table>
        <div className="d-flex justify-content-end pb-3">
          <button
            className=" btn4 btn-success fw-bold"
            onClick={() => addSupplier()}
          >
            Add Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierListScreen;
