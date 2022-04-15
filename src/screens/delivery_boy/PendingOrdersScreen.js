import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";

import ApiCustomerService from "../../services/customer/ApiCustomerService";

const PendingOrdersScreen = (props) => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("No Pending Orders");

  useEffect(() => {
    getOrdersList();
  }, []);

  const getOrdersList = () => {
    ApiCustomerService.fetchOrdersListDeliveryBoy(
      window.localStorage.getItem("user_id")
    ).then((res) => {
      setOrders(res.data.result);
    });
  };

  const orderDetails = (orderId) => {
    window.localStorage.setItem("orderIdForDetails", orderId);
    props.history.push("/orderdetailspending");
  };

  const addressDetails = (orderId) => {
    window.localStorage.setItem("orderIdForDetails", orderId);
    props.history.push("/addressdetails2");
  };

  const deliveredOrder = (orderId) => {
    ApiCustomerService.deliveredOrder(orderId).then((res) => {
      alert("Order Delivered");
      window.location.reload();
    });
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <h2 className="text-center fa fa-th-list fs-1 text-light">
          Pending Orders History
        </h2>
        <table className="table table-striped text-light">
          <thead>
            <tr>
              <th>Orders Amount</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Delivered Order </th>
              <th>Delivery Date</th>
              <th>Delivery Address</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <div className="container">
              <h5 className="nameColor1">
                {orders.filter(
                  (order) => order.orderDeliveryStatus === "PENDING"
                ).length === 0 && message}
              </h5>
            </div>
            {orders.map(
              (order) =>
                order.orderDeliveryStatus === "PENDING" && (
                  <tr key={order.id} className=" fw-bold text-light">
                    <td>{order.totalPrice}</td>
                    <td>{order.orderDate}</td>
                    <td className="nameColor1">
                      <h5>{order.orderDeliveryStatus}</h5>
                    </td>
                    <td>
                      <button
                        className="btn btn-success fw-bold mt-0"
                        onClick={() => deliveredOrder(order.id)}
                      >
                        Delivered
                      </button>
                    </td>
                    <td>{order.deliveryDate}</td>
                    <td>
                      <button
                        className="btn btn-primary fw-bold mt-0"
                        onClick={() => addressDetails(order.id)}
                      >
                        Address
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning fw-bold mt-0"
                        onClick={() => orderDetails(order.id)}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PendingOrdersScreen;
