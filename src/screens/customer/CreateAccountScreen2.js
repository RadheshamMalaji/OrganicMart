import "../../App.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
//import Swal from "sweetalert2";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import validator from "validator";
import axios from "axios";

function CreateAccountScreen() {
  return (
    <div>
      <Navigation></Navigation>
      <RegisterUser></RegisterUser>
    </div>
  );
}

function RegisterUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [validation, setValidation] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const takefirstName = (e) => {
    setFirstName(e.target.value);
  };
  const takelastName = (e) => {
    setLastName(e.target.value);
  };
  const takeemail = (e) => {
    setEmail(e.target.value);
  };
  const takephone = (e) => {
    setPhone(e.target.value);
  };
  const takepassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = async () => {
    if (firstName === "") {
      document.getElementById("firstname").innerHTML =
        "* First Name is mandatory";
      return false;
    }
    if (!isNaN(firstName)) {
      document.getElementById("firstname").innerHTML =
        " ** only characters are allowed";
      return false;
    }
    if (lastName === "") {
      document.getElementById("lastname").innerHTML =
        "* Last Name is mandatory";
      return false;
    }
    if (!isNaN(lastName)) {
      document.getElementById("lastname").innerHTML =
        " ** only characters are allowed";
      return false;
    }
    if (validator.isEmail(email)) {
      setValidation({ email: "" });
    } else {
      setValidation({ email: "Enter valid Email!" });
      return false;
    }
    if (phone === "") {
      document.getElementById("contactno").innerHTML =
        "* Contact Number  is mandatory";
      return false;
    }
    if (isNaN(phone)) {
      document.getElementById("contactno").innerHTML =
        " * User must write digits only not characters ";
      return false;
    }
    if (phone.length !== 10) {
      document.getElementById("contactno").innerHTML =
        " * Contact number must be 10 digits only ";
      return false;
    }
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setValidation({ password: "" });
    } else {
      setValidation({ password: "Is Not Strong Password" });
      return false;
      //  setErrorMessage('Is Not Strong Password')
    }

    // if (password === "") {
    //   document.getElementById("pass").innerHTML = "* Password is mandatory";
    //   return false;
    // }
    // if (password.length <= 8 || password.length > 20) {
    //   document.getElementById("pass").innerHTML =
    //     "Password length must be between 8 and 20 characters";
    //   return false;
    // }

    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      role: role,
    };

    const url = "http://localhost:8080/customers/signup";
    axios.post(url, user).then((response) => {
      let msg = response.data;
      if ((msg = "cutomer added succesfully")) {
        window.location.href = "/login";
        alert("You have successfully registered");
      } else {
        alert("Customer not added");
      }
    });
  };

  return (
    <div>
      <div className="vh-100 d-flex reg">
        <div className="m-auto w-50 pt-2 ps-5 pe-5 pb-2  align-self-center text-white reg-form">
          <h1 className="text-center fw-bold mb-3" style={{ color: "green" }}>
            Organic Mart
          </h1>
          <h1 className="text-center display-4 reg-feild">Register</h1>

          <form className="row g-3 mt-1 reg-feild">
            <div className="col-md-6">
              <label for="firstName" className="form-label fs-5">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                onChange={takefirstName}
                value={firstName}
                required
              />
              <div id="firstName" class="fs-6 text-danger"></div>
            </div>
            <div className="col-md-6">
              <label for="lastName" className="form-label fs-5">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                onChange={takelastName}
                value={lastName}
                required
              />
              <div id="lastName" class="fs-6 text-danger"></div>
            </div>

            <div className="col-md-6">
              <label for="phone" className="form-label fs-5">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="contactno"
                placeholder="Without +91"
                onChange={takephone}
                value={phone}
                required
              />
              <div id="contactno" class="fs-6 text-danger"></div>
            </div>
            <div className="col-md-6">
              <label for="email" className="form-label fs-5">
                Email-ID
              </label>
              <input
                type="email"
                className="form-control"
                name="emailId"
                placeholder="Eg:-abc@gmail.com"
                onChange={takeemail}
                value={email}
                required
              />
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {validation.email}
              </span>
            </div>

            <div className="col-md-6">
              <label for="password" className="form-label fs-5">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="pass"
                name="pass"
                placeholder="Enter a strong password"
                onChange={takepassword}
                value={password}
                required
              />
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {validation.password}
              </span>
              <div id="pass" class="fs-6 text-danger"></div>
            </div>

            <div className="col-md-12 text-center">
              <h4 className="fs-4">
                Already Registered?
                <Link
                  to="/login"
                  href="src\screens\common\LoginScreen.js"
                  className="text-decoration-none"
                >
                  Login here
                </Link>
              </h4>
            </div>

            <div className="col-md-12 text-center">
              <input
                type="button"
                className="btn btn-lg btn-primary"
                value="Register"
                onClick={submit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreateAccountScreen;
