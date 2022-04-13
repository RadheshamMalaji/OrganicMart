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
    <div className="container-fluid com-bgimg1 p-0">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="d-flex justify-content-evenly ">
        <div>
          <div className="card imgbox" style={{ width: "15rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUncw5PB5syw9BIoymTrwyOjAqRlTZC1Rkew&usqp=CAU"
              class="card-img-top rounded"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-primary btn-lg"
                onClick={() => showProfile()}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-vJ07Repan238qwOLHGf1vsdK5Mjr-IyBA&usqp=CAU"
              class="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg"
                onClick={() => editProfile()}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhyUtru2WMqir-nRD9GrbEJSXHpRQ9aLrOg&usqp=CAU"
              class="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <h5 className="card-title"></h5>
              <button
                type="button"
                class="btn btn-outline-danger btn-lg"
                onClick={() => changePassword()}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-warning btn-lg"
                onClick={() => changeAddress()}
              >
                change Address
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br></br>
      </div>
      <div className="d-flex justify-content-evenly">
        <div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="data:image/webp;base64,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"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-success btn-lg"
                onClick={() => addProduct()}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://5.imimg.com/data5/ZC/LU/UQ/SELLER-92830157/digital-signature-certificate-500x500.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg"
                onClick={() => productDetails()}
              >
                Product List
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-danger btn-lg"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SupplierHomeScreen;
