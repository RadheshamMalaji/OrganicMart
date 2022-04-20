import "../../App.css";
import Navigation from "../../components/Navigation";
import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import Swal from "sweetalert2";

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
    name: "",
    lname: "",
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
      setValidation({ name: "First Name is mandatory" });
      return false;
    }
    if (!isNaN(firstName)) {
      setValidation({ name: "only characters are allowed" });
      return false;
    }
    if (lastName === "") {
      setValidation({ lname: " Last Name is mandatory" });
      return false;
    }
    if (!isNaN(lastName)) {
      setValidation({ lname: " only characters are allowed" });

      return false;
    }
    if (validator.isEmail(email)) {
      setValidation({ email: "" });
    } else {
      setValidation({ email: "Enter valid Email!" });
      return false;
    }
    if (phone === "") {
      setValidation({ phone: "Contact Number  is mandatory" });
      return false;
    }
    if (isNaN(phone)) {
      setValidation({ phone: "User must write digits only not characters" });
      return false;
    }
    if (phone.length !== 10) {
      setValidation({ phone: " Contact number must be 10 digits only" });

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
        Swal.fire("You have successfully registered", "", "success");
      } else {
        Swal.fire("Customer not added", "", "error");
        //alert("Customer not added");
      }
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <form className="bg-light px-5 p-4 my-4 mx-0 reg-feild">
            <h1 className="text-center fw-bold mb-3">Organic Mart</h1>
            <div className="d-flex flex-row align-items-center mt-5 mb-4 fs-4">
              <i className="fa fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0 ">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="form-control fs-4"
                  name="firstname"
                  value={firstName}
                  onChange={takefirstName}
                  required
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {validation.name}
                </span>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 fs-4">
              <i className="fa fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="form-control fs-4"
                  name="lastname"
                  value={lastName}
                  onChange={takelastName}
                  required
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {validation.lname}
                </span>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4 fs-4">
              <i class="fa fa-envelope fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control fs-4"
                  placeholder="Email"
                  value={email}
                  onChange={takeemail}
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
            </div>

            <div className="d-flex flex-row align-items-center mb-4 fs-4">
              <i class="fa fa-phone-square fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="number"
                  placeholder="Mobile no"
                  className="form-control fs-4"
                  name="phone"
                  value={phone}
                  onChange={takephone}
                  required
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {validation.phone}
                </span>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4 fs-4">
              <i class="fa fa-unlock-alt fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control fs-4 "
                  placeholder="Password"
                  value={password}
                  onChange={takepassword}
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
              </div>
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
          <div className="col-md-10 py-4 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
            <img
              src="https://img.freepik.com/free-vector/online-registration-concept-with-isometric-view_23-2147976707.jpg"
              className="img-fluid "
              alt="Sample image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateAccountScreen;
