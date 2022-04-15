//import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

const OrderHistoryScreen = (props) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrdersList();
  }, []);

  const getOrdersList = () => {
    ApiCustomerService.fetchOrdersList(
      window.localStorage.getItem("user_id")
    ).then((res) => {
      setOrders(res.data.result);
    });
  };

  const orderDetails = (orderId) => {
    window.localStorage.setItem("orderIdForDetails", orderId);
    props.history.push("/orderDetailsPage");
  };

  const orderDetailsAddress = (orderId) => {
    window.localStorage.setItem("orderIdForDetails", orderId);
    props.history.push("/showorderaddress");
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <h2 className="text-center fa fa-list-alt fs-1 text-light">
          Orders History
        </h2>
        <table className="table table-striped text-light">
          <thead>
            <tr>
              <th>Orders Amount</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Delivery Date</th>
              <th>Address</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="fw-bold text-light">
                <td>{order.totalPrice}</td>
                <td>{order.orderDate}</td>
                <td className="nameColor1">
                  <h5>{order.orderDeliveryStatus}</h5>
                </td>
                <td>{order.deliveryDate}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => orderDetailsAddress(order.id)}
                  >
                    Address
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning fw-bold"
                    onClick={() => orderDetails(order.id)}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistoryScreen;
