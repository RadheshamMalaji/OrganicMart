import "../../App.css";
//import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useState } from "react";
import validator from "validator";
import axios from "axios";

export default function Registration() {
  // let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [validation, setValidation] = useState({
    nameErr: false,
    lnameErr: false,
    emailErr: false,
    phoneErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
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
    setPassword({ pass: e.target.value });
  };

  const takeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const register = async () => {
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
    }

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
    <>
      <div>
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-8 col-xl-9 ">
              <div
                className="card text-black bg-white"
                style={{ borderRadius: "25px", opacity: "0.8" }}
              >
                <div className="card-body p-md-5 ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registration
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              placeholder="enter First Name"
                              className="form-control"
                              name="firstname"
                              value={firstName}
                              onChange={takefirstName}
                            />
                            {validation.nameErr ? (
                              <span className="text-danger">
                                Enter Valid first name..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              placeholder="enter Last Name"
                              className="form-control"
                              name="lastname"
                              value={lastName}
                              onChange={takelastName}
                            />
                            {validation.lnameErr ? (
                              <span className="text-danger">
                                Enter Valid Last name..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="Email"
                              value={email}
                              onChange={takeemail}
                            />
                            {validation.emailErr ? (
                              <span className="text-danger">
                                Enter Valid email..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa fa-phone-square fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              placeholder="phone or mobile no"
                              className="form-control"
                              name="phone"
                              value={phone}
                              onChange={takephone}
                            />
                            {validation.phoneErr ? (
                              <span className="text-danger">
                                Enter Valid phone no..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa fa-unlock-alt fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={password}
                              onChange={takepassword}
                            />
                            {validation.passwordErr ? (
                              <span className="text-danger">
                                Enter Valid password..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa fa-unlock-alt fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="confirm password"
                              placeholder="confirm password"
                              className="form-control "
                              name="confirm password"
                              value={confirmPassword}
                              onChange={takeConfirmPassword}
                            />
                            {validation.confirmPasswordErr ? (
                              <span className="text-danger">
                                Enter Valid password..
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-3">
                          <button
                            type="submit"
                            className="btn btn-outline-primary p-3"
                            onSubmit={register}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="./images/Symbol.jpg"
                        className="img-fluid "
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
