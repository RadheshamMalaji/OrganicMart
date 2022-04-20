import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Form.css";
import swal from "sweetalert2";
const ForgotPassword = (e) => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [otp, setotp] = useState("");
  const [confirmOtp, setConfirmotp] = useState("");
  const GenerateAndSendOTP = () => {
    console.log(email);
    axios
      .get(`http://localhost:8080/customers/generateotp/${email}`)
      .then((Response) => {
        console.log(Response.data);
        setConfirmotp(Response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const HandleOtp = () => {
    if (confirmOtp == otp) {
      if (password === cpassword) {
        const Credential = { email, password };
        axios
          .put("http://localhost:8080/customers/changepassword", Credential)
          .then((Response) => {
            console.log(Response.data);
          });
        history.push("/");
      } else {
        swal.fire({
          icon: "error",
          title: "Password Not Match",
          text: "Please fill correct Credentials",
        });
      }
    } else {
      swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please fill correct Credentials",
      });
    }
  };
  return (
    <div className="d-flex justify-content-center  loginback">
      <div className=" m-5 loginform">
        <div className="p-5 text-black">
          <h1>ForgotPassword</h1>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-success" onClick={GenerateAndSendOTP}>
              Get otp
            </button>
          </div>
          <h1>Change Password</h1>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control "
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              value={cpassword}
              onChange={(e) => {
                setcPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              OTP
            </label>
            <input
              type="text"
              className="form-control"
              id="otp"
              value={otp}
              onChange={(e) => {
                setotp(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={HandleOtp}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
