import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

const AdminOrderDetailsForPendingScreen = (props) => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    getOrdersDetails();
  }, []);

  const getOrdersDetails = () => {
    ApiCustomerService.fetchOrdersdetails(
      window.localStorage.getItem("orderIdForDetails")
    ).then((res) => {
      setOrderDetails(res.data.result);
    });
  };

  const backToOrderHistory = () => {
    props.history.push("/pendingorderforadmin");
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <h2 className="text-center">Orders Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>QTY</th>
              <th>Grams</th>
              <th>Final Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order) => (
              <tr>
                <td>{order.productName}</td>
                <td>{order.qty}</td>
                <td>{order.grams}</td>
                <td>{order.finalPrice}</td>
              </tr>
            ))}
          </tbody>
          <td>
            <button
              className="btn4 btn-success"
              onClick={() => backToOrderHistory()}
            >
              Back
            </button>
          </td>
        </table>
      </div>
    </div>
  );
};
export default AdminOrderDetailsForPendingScreen;
