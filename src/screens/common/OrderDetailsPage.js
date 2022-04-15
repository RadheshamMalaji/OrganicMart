import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

const OrderDetailsPageScreen = (props) => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    getOrdersDetails();
  }, []);

  const getOrdersDetails = async () => {
    ApiCustomerService.fetchOrdersdetails(
      window.localStorage.getItem("orderIdForDetails")
    ).then((res) => {
      setOrderDetails(res.data.result);
    });
  };

  const backToOrderHistory = () => {
    props.history.push("/myaccount/orderhistory");
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <h2 className="text-center fa fa-info-circle fs-1 text-light ">
          Orders Details
        </h2>
        <table className="table table-striped text-light">
          <thead>
            <tr className="text-light">
              <th>Product Name</th>
              <th>QTY</th>
              <th>Grams</th>
              <th>Final Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order) => (
              <tr className="fw-bold text-light">
                <td>{order.productName}</td>
                <td>{order.qty}</td>
                <td>{order.grams}</td>
                <td>{order.finalPrice}</td>
              </tr>
            ))}
          </tbody>
          <td>
            <button
              className="btn4 btn-success fw-bold"
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
export default OrderDetailsPageScreen;
