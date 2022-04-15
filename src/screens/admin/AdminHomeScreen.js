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
                className="btn btn-outline-primary btn-lg "
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
                className="btn btn-outline-success btn-lg"
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
                className="btn btn-outline-danger btn-lg"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1idp7FpJAGThKl2SkMYFX__sHXRmsBJp7Nw&usqp=CAU"
              class="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-warning btn-lg"
                onClick={() => showPendingOrders()}
              >
                Pending Orders
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
              src="data:image/jpeg;base64,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"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-success btn-lg"
                onClick={() => showdeliveredOrders()}
              >
                Delivered Orders
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
                class="btn btn-outline-secondary btn-lg"
                onClick={() => showDeliveryBoy()}
              >
                Delivery Boy
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0zkv2bCjEeE0jD60GmfuHompj43T03dOFg&usqp=CAU"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-success btn-lg"
                onClick={() => showSupplier()}
              >
                Supplier
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

export default AdminHomeScreen;
