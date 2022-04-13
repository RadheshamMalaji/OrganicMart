import "../../App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import loginimg from "../../components/logo.jpg";
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
    <div className="login-bg">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div
        className=" vh-100 d-flex"
        style={{ backgroundColor: "rgba(245, 0, 220,0)" }}
      >
        <div className="container w-50 m-auto log  ">
          <div className="row ">
            <div className="col-lg p-0">
              <img src={loginimg} className="w-100 log-img" />
            </div>
            <div className="col-lg-6 p-0">
              <div className="m-auto w-75 pt-5 pb-5 align-self-center ">
                {/* <h1
                  className="text-center fw-bold mb-3"
                  style={{ color: "green" }}
                >
                  Organic Mart
                </h1> */}
                <h1 className="text-center display-4">Login</h1>

                <form className="row g-3 mt-3">
                  <div className="col-md-12">
                    <label for="email" class="form-label fs-5">
                      Email-ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@gmail.com"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <label for="password" className="form-label fs-5">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="***"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col-md-12 mt-5 text-center">
                    <h5 className="fs-6">
                      Forgot Password?
                      <Link
                        to="/forget-password"
                        className="text-decoration-none fs-6"
                      >
                        &nbsp; &nbsp;Click Here
                      </Link>
                    </h5>
                    <h5 className="fs-6">
                      New User?
                      <Link
                        to="/create-account"
                        className="text-decoration-none fs-6"
                      >
                        &nbsp; &nbsp;Register Here
                      </Link>
                    </h5>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="d-grid gap-2 col-6 mx-auto">
                      <button
                        className="btn btn-outline-success fw-bold btn-lg float-end"
                        onClick={authenticateUser}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
