import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";

import ApiCustomerService from "../../services/customer/ApiCustomerService";

const DeliveryBoyListScreen = (props) => {
  const [boys, setBoys] = useState([]);
  const [message, setMessage] = useState("No Delivery Boy Available");

  useEffect(() => {
    getDeliveryBoyList();
  }, []);

  const getDeliveryBoyList = () => {
    ApiCustomerService.fetchDeliveryBoyList().then((res) => {
      setBoys(res.data.result);
    });
  };

  const addDeliveryBoy = () => {
    props.history.push("/adddeliveryboy");
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <h2 className="text-center">Delivery Boy List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <div className="container">
              <h5 className="nameColor1">{boys.length == 0 && message}</h5>
            </div>
            {boys.map((boy) => (
              <tr key={boy.id}>
                <td>{boy.firstName}</td>
                <td>{boy.lastName}</td>
                <td>{boy.email}</td>
                <td>{boy.phone}</td>
              </tr>
            ))}
          </tbody>
          <td>
            <button
              className="btn4 btn-success"
              onClick={() => addDeliveryBoy()}
            >
              Add Delivery Boy
            </button>
          </td>
        </table>
      </div>
    </div>
  );
};

export default DeliveryBoyListScreen;
