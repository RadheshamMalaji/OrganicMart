import React, { useState } from "react";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import Navigation from "../../components/Navigation";

const PaymentScreen = (props) => {
  const [paymentInfo, setPaymentInfo] = useState("");
  const [message, setMessage] = useState("");

  const addOrder = () => {
    ApiCustomerService.addorders(
      window.localStorage.getItem("total_price"),
      window.localStorage.getItem("user_id")
    ).then((res) => {
      JSON.stringify(window.localStorage.setItem("orderId", res.data.result));
      addOrderDetail();
    });
  };

  const addOrderDetail = () => {
    ApiCustomerService.addDetails(
      window.localStorage.getItem("user_id"),
      JSON.parse(window.localStorage.getItem("orderId"))
    ).then((res) => {
      JSON.stringify(
        window.localStorage.setItem("deliveryBoyId", res.data.result)
      );
      paymentDetails();
    });
  };

  const paymentDetails = () => {
    payment = {
      paymentType: paymentInfo,
      deliveryBoyId: JSON.parse(window.localStorage.getItem("deliveryBoyId")),
      orderId: JSON.parse(window.localStorage.getItem("orderId")),
    };
    ApiCustomerService.addpaymentDetails(payment);
    addOrderIdtoOrderAddress();
  };

  const addOrderIdtoOrderAddress = () => {
    ApiCustomerService.addOrderIdtoOrderAddress(
      window.localStorage.getItem("address_id"),
      window.localStorage.getItem("orderId")
    );
  };

  const payment = () => {
    addOrder();
    alert("Payment Done");
    window.localStorage.removeItem("cart_size");
    window.localStorage.removeItem("deliveryBoyId");
    window.localStorage.removeItem("orderId");

    props.history.push("/home");
  };

  const selectCredit = () => {
    setPaymentInfo("CREDIT");
  };

  const selectDebit = () => {
    setPaymentInfo("DEBIT");
  };

  return (
    <div>
      <Navigation />
      <div className="payment">
        <div>
          <div className="float-center">
            <h5>Total Price : {window.localStorage.getItem("total_price")}</h5>
            <br />
            <div className="position1">
              <div className="dropdown">
                <a
                  className="btn btn-light dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Payment Type
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        selectCredit();
                      }}
                    >
                      CREDIT
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        selectDebit();
                      }}
                    >
                      DEBIT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />

            <button
              className="btn4 btn-primary"
              style={{ width: "150px" }}
              onClick={() => payment()}
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentScreen;
