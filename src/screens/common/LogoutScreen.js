import "../../App.css";
import React, { useEffect } from "react";

const LogoutScreen = (props) => {
  useEffect(() => {
    changeStatus();
  }, []);

  const changeStatus = (st) => {
    window.localStorage.removeItem("status");
    window.localStorage.removeItem("category_id");
    window.localStorage.removeItem("category_name");
    window.localStorage.removeItem("user_fname");
    window.localStorage.removeItem("user_lname");
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_phone");
    window.localStorage.removeItem("user_role");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("msg");
    window.localStorage.removeItem("cart_size");
    window.localStorage.removeItem("product_id");
    window.localStorage.removeItem("searchProductName");
    window.localStorage.removeItem("deliveryBoyId");
    window.localStorage.removeItem("orderId");
    window.localStorage.removeItem("orderIdForDetails");
    window.localStorage.removeItem("total_price");
    window.localStorage.removeItem("add");
    props.history.push("/home");
  };
  return (
    <div>
      <h5>!!! Successfully Logout !!!</h5>
    </div>
  );
};
export default LogoutScreen;
