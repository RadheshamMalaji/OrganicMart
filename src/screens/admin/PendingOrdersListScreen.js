import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

const PendingOrdersListScreen = (props) => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("No Pending Orders");

  useEffect(() => {
    getOrdersList();
  }, []);

  const getOrdersList = () => {
    ApiCustomerService.fetchOrdersListAdmin().then((res) => {
      setOrders(res.data.result);
    });
  };

  const orderDetails = (orderId) => {
    window.localStorage.setItem("orderIdForDetails", orderId);
    props.history.push("/adminorderdetailspending");
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <h2 className="text-center">Pending Orders History</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Orders Amount</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Delivery Date</th>
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
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.orderDate}</td>
                    <td className="nameColor1">
                      <h5>{order.orderDeliveryStatus}</h5>
                    </td>
                    <td>{order.deliveryDate}</td>
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
export default PendingOrdersListScreen;
