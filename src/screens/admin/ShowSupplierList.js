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
    <div>
      <Navigation />
      <div className="container">
        <h2 className="text-center">Supplier List</h2>
        <table className="table table-striped">
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
              <tr key={supplier.id}>
                <td>{supplier.firstName}</td>
                <td>{supplier.lastName}</td>
                <td>{supplier.email}</td>
                <td>{supplier.phone}</td>
                <td>
                  <Link
                    to={"/supplier/showproductsbysupplier/" + supplier.id}
                    className="btn btn-success"
                  >
                    Check Products
                  </Link>
                </td>
                <td>
                  <Link
                    to={"/addproductfromsupplier/" + supplier.id}
                    className="btn btn-success"
                  >
                    Check Available Products
                  </Link>
                </td>
                <td>
                  <Link
                    to={"/supplieraddress/" + supplier.id}
                    className="btn btn-success"
                  >
                    Address
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <br></br>
          <button className="btn4 btn-success" onClick={() => addSupplier()}>
            Add Supplier
          </button>
        </table>
      </div>
    </div>
  );
};

export default SupplierListScreen;
