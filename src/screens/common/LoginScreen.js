import "../../App.css";
import React, { useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const getCartSize = () => {
    setTimeout(() => {
      ApiCustomerService.getCartByUserId(
        JSON.parse(window.localStorage.getItem("user_id"))
      ).then((res) => {
        JSON.stringify(
          window.localStorage.setItem("cart_size", res.data.result.length)
        );
      });
    }, 1000);
  };

  const updateUserCart = () => {
    let cartUserId = JSON.parse(window.localStorage.getItem("user_id"));
    let cartSize = JSON.parse(window.localStorage.getItem("cart_size"));
    if (cartSize > 0) {
      ApiCustomerService.updateCartUserId(cartUserId);
    }
    getCartSize();
  };
  const authenticateUser = (e) => {
    e.preventDefault();
    let loginRequest = {
      email: email,
      password: password,
    };
    ApiCustomerService.fetchUserByLoginrequest(loginRequest).then((res) => {
      let user = res.data.result;
      user == null && setMessage("Invalid Login Credentials");
      user != null && alert("User Login successfully By " + user.role);
      user != null && setMessage("User Login successfully.");
      user != null && window.localStorage.setItem("status", true);
      user != null && window.localStorage.setItem("user_fname", user.firstName);
      user != null && window.localStorage.setItem("user_lname", user.lastName);
      user != null && window.localStorage.setItem("user_email", user.email);
      user != null && window.localStorage.setItem("user_phone", user.phone);
      user != null && window.localStorage.setItem("user_role", user.role);

      user != null &&
        JSON.stringify(window.localStorage.setItem("user_id", user.id));
      user != null && user.role === "CUSTOMER" && updateUserCart();
      user != null &&
        user.role === "SUPPLIER" &&
        props.history.push("/supplierhome");
      user != null &&
        user.role === "DELIVERY_BOY" &&
        props.history.push("/deliveryboyhome");
      user != null && user.role === "ADMIN" && props.history.push("/adminhome");
      user != null && user.role === "CUSTOMER" && props.history.push("/home");
    });
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Login" />
        <br />
        <h5 className="nameColor1">{message}</h5>
        <form>
          <form className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*****"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <br />
            <div className="float-start">
              <br></br>
              New User? <Link to="/forget-password">Forget</Link>
            </div>
            <div className="float-start">
              <br></br>
              New User? <Link to="/create-account">Create Account here</Link>
            </div>
            <button
              className="btn-hover color-9 float-end"
              onClick={authenticateUser}
            >
              Login
            </button>
            <br></br>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
