import Navigation from "../../components/Navigation";
import React from "react";

const SupplierHomeScreen = (props) => {
  const showProfile = () => {
    props.history.push("/myaccount/profile");
  };

  const editProfile = () => {
    props.history.push("/myaccount/editprofile");
  };

  const changePassword = () => {
    props.history.push("/myaccount/change-password");
  };

  const changeAddress = () => {
    props.history.push("/myaccount/changeaddress");
  };

  const addProduct = () => {
    props.history.push("/addproduct");
  };

  const productDetails = () => {
    props.history.push("/supplier/showproducts");
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
            <button className="btn4 btn-danger" onClick={() => changeAddress()}>
              Change Address
            </button>
          </td>
          <td>
            <button className="btn4 btn-success" onClick={() => addProduct()}>
              Add Product
            </button>
          </td>
          <td>
            <button
              className="btn4 btn-danger"
              onClick={() => productDetails()}
            >
              Product List
            </button>
          </td>
          <td>
            <button className="btn4 btn-success" onClick={() => logout()}>
              Logout
            </button>
          </td>
        </table>
      </div>
    </div>
  );
};
export default SupplierHomeScreen;
