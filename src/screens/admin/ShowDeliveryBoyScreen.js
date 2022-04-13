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
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <h2 className="text-center fa fa-th-list fs-1 text-light">
          Delivery Boy List
        </h2>
        <table className="table table-striped text-light">
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
              <tr
                key={boy.id}
                className="fw-bold"
                style={{ color: "#E8E3E1FC" }}
              >
                <td>{boy.firstName}</td>
                <td>{boy.lastName}</td>
                <td>{boy.email}</td>
                <td>{boy.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end m-3 pb-3">
          <button
            className="btn4 btn-success float-end fw-bold"
            onClick={() => addDeliveryBoy()}
          >
            Add Delivery Boy
          </button>

          <br></br>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBoyListScreen;
