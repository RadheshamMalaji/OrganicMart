import Navigation from "../../components/Navigation";
import React from "react";

const AdminHomeScreen = (props) => {
  const showProfile = () => {
    props.history.push("/myaccount/profile");
  };
  const editProfile = () => {
    props.history.push("/myaccount/editprofile");
  };
  const changePassword = () => {
    props.history.push("/myaccount/change-password");
  };
  const showPendingOrders = () => {
    props.history.push("/pendingorderforadmin");
  };
  const showdeliveredOrders = () => {
    props.history.push("/deliveredorderforadmin");
  };
  const showSupplier = () => {
    props.history.push("/showsupplier");
  };
  const showDeliveryBoy = () => {
    props.history.push("/showdeliveryboy");
  };
  const logout = () => {
    props.history.push("/logout");
  };

  return (
    <div>
      <Navigation />
      <div className="main1">
        <table>
          <td>
            <button className="btn4 btn-success" onClick={() => showProfile()}>
              Profile
            </button>
          </td>
          <td>
            <button className="btn4 btn-danger" onClick={() => editProfile()}>
              Edit Profile
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-success"
              onClick={() => changePassword()}
            >
              Change Password
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-danger"
              onClick={() => showPendingOrders()}
            >
              Pending Orders
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-success"
              onClick={() => showdeliveredOrders()}
            >
              Delivered Orders
            </button>
          </td>
          <td>
            <button className="btn4 btn-danger" onClick={() => showSupplier()}>
              Show Supplier
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-success"
              onClick={() => showDeliveryBoy()}
            >
              Show Delivery Boy
            </button>
          </td>
          <td>
            <button className="btn4 btn-danger" onClick={() => logout()}>
              Logout
            </button>
          </td>
        </table>
      </div>
    </div>
  );
};

export default AdminHomeScreen;
