import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";

import ApiCustomerService from "../../services/customer/ApiCustomerService";

const DeliveredOrdersScreen = (props) => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("No Delivered Orders");

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
    props.history.push("/orderdetailsdelivered");
  };

  const addressDetails = (orderId) => {
    window.localStorage.setItem("orderIdForDetails", orderId);
    props.history.push("/addressdetails1");
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <h2 className="text-center">Delivered Orders History</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Orders Amount</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Delivery Date</th>
              <th>Delivery Address</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <div className="container">
              <h5 className="nameColor1">
                {orders.filter(
                  (order) => order.orderDeliveryStatus === "DELIVERED"
                ).length === 0 && message}
              </h5>
            </div>
            {orders.map(
              (order) =>
                order.orderDeliveryStatus === "DELIVERED" && (
                  <tr key={order.id}>
                    <td>{order.totalPrice}</td>
                    <td>{order.orderDate}</td>
                    <td className="nameColor1">
                      <h5>{order.orderDeliveryStatus}</h5>
                    </td>
                    <td>{order.deliveryDate}</td>
                    <td>
                      <button
                        className="btn4 btn-success"
                        onClick={() => addressDetails(order.id)}
                      >
                        Address
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn4 btn-success"
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
export default DeliveredOrdersScreen;
