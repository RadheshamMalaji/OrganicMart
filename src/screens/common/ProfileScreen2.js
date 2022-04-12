import Navigation from "../../components/Navigation";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
const ProfileScreen = (props) => {
  const [id, setid] = useState("");
  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    setid(window.localStorage.getItem("user_id")),
      setfirstName(window.localStorage.getItem("user_fname")),
      setlastName(window.localStorage.getItem("user_lname")),
      setemail(window.localStorage.getItem("user_email")),
      setphone(window.localStorage.getItem("user_phone"));
  }, []);

  return (
    <div>
      <Navigation />

      <div className="main">
        <Header title="!!! User Details !!!" />
        <br />

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label">First Name</label>
          <div className="col-sm-8">{firstName}</div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Last Name</label>
          <div className="col-sm-8">{lastName}</div>
        </div>

        <div class="row mb-3">
          <label className="col-sm-4 col-form-label">Email</label>
          <div className="col-sm-8">{email}</div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Phone</label>
          <div className="col-sm-8 bg-info">
            <p class="text-right">Left.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileScreen;
