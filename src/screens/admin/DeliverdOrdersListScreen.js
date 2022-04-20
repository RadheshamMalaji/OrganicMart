import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

const DeliveredOrdersListScreen = (props) => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("No Delivered Orders");
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
    props.history.push("/adminorderdetailsdelivered");
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <h2 className="text-center fa fa-list-ul fs-1 text-light">
          Delivered Orders History
        </h2>
        <table className="table table-striped text-light">
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
                  (order) => order.orderDeliveryStatus === "DELIVERED"
                ).length == 0 && message}
              </h5>
            </div>
            {orders.map(
              (order) =>
                order.orderDeliveryStatus === "DELIVERED" && (
                  <tr key={order.id} className="fw-bold text-light">
                    <td>{order.id}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.orderDate}</td>
                    <td className="nameColor1">
                      <h5>{order.orderDeliveryStatus}</h5>
                    </td>
                    <td>{order.deliveryDate}</td>
                    <td>
                      <button
                        className="btn btn-success fw-bold"
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
export default DeliveredOrdersListScreen;
