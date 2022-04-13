import "../../App.css";
//import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useState } from "react";
import validator from "validator";
import axios from "axios";

export default function CreateAccountScreen() {
  // let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [validation, setValidation] = useState({
    nameErr: "",
    lnameErr: "",
    emailErr: "",
    phoneErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
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

  const register = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    var pattern = /^[6-9]\d{9}$/gi;
    if (firstName === "") {
      setValidation({ nameErr: "First Name is mandatory" });
      return false;
    }
    if (!isNaN(firstName)) {
      setValidation({ nameErr: "only characters are allowed" });
      return false;
    }
    if (lastName === "") {
      setValidation({ lnameErr: " Last Name is mandatory" });
      return false;
    }
    if (!isNaN(lastName)) {
      setValidation({ lnameErr: " only characters are allowed" });
      return false;
    }
    if (validator.isEmail(email)) {
      setValidation({ email: "" });
    } else {
      setValidation({ email: "Enter valid Email!" });
      return false;
    }
    if (phone === "") {
      setValidation({ phoneErr: "Please enter Mobile number" });
      return false;
    } else if (
      !pattern.test(phone) ||
      isNaN(phone) ||
      userMobile.length <= 9 ||
      userMobile.length >= 11
    ) {
      setValidation({ phoneErr: "Please enter Mobile number" });
      return false;
    }
    // if (phone === "") {
    //   document.getElementById("contactno").innerHTML =
    //     "* Contact Number  is mandatory";
    //   return false;
    // }
    // if (isNaN(phone)) {
    //   document.getElementById("contactno").innerHTML =
    //     " * User must write digits only not characters ";
    //   return false;
    // }
    // if (phone.length !== 10) {

    //   document.getElementById("contactno").innerHTML =
    //     " * Contact number must be 10 digits only ";
    //   return false;
    // }
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
    if(password !== confirmPassword)
    {
      setValidation({ confirmPasswordErr: "Password Not Match" });
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
                          
                              <span className="text-danger">
                                {validation.nameErr}
                              </span>
                          
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
                           <span className="text-danger">
                                {validation.lnameErr}
                              </span>
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
                           <span className="text-danger">
                                {validation.emailErr}
                              </span>
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
                            <span className="text-danger">
                                {validation.phoneErr}
                              </span>
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
                            <span className="text-danger">
                                {validation.passwordErr}
                              </span>
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
                          <span className="text-danger">
                                {validation.confirmPasswordErr}
                              </span>
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
