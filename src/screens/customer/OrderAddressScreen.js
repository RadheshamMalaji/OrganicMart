import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Swal from "sweetalert2";
import axios from "axios";

const OrderAddressScreen = (props) => {
  const [id, setId] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [orderid, setOrderId] = useState("");

  useEffect(() => {
    let user_Id = window.localStorage.getItem("user_id");
    setId(user_Id);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
  }, []);

  const loadScript = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const payment = (e) => {
    e.preventDefault();

    !window.localStorage.getItem("status") && props.history.push("/login");

    const res = loadScript;
    if (!res) {
      Swal.fire("you are offline !!!", "Check Your Network !!", "error");
    }

    axios
      .post("http://localhost:8080/customers/create_order", {
        amount: window.localStorage.getItem("total_price"),
        info: "order_request",
      })
      .then((resp) => {
        console.log(resp);

        const options = {
          key: "rzp_test_qvOzalgA1CfPgJ", // Enter the Key ID generated from the Dashboard
          amount: resp.data.tamt, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "SuperTail",
          description: "Test Transaction",
          order_id: resp.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (response) {
            console.log(response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
            console.log(response.razorpay_signature);
            setOrderId(response.razorpay_order_id);
            window.localStorage.setItem("order_id", response.razorpay_order_id);

            console.log("Payment successful !!");
            addDetails();

            let addr = {
              userId: id,
              flatNo: flatNo,
              societyName: societyName,
              area: area,
              city: city,
              pinCode: pinCode,
              state: state,
              orderId: response.razorpay_order_id,
            };
            console.log(addr);
            ApiCustomerService.addOrderAddress(addr).then((res) => {
              let id1 = res.data.result;
              window.localStorage.setItem("address_id", id1);
            });

            axios
              .get(
                `http://localhost:8080/customers/paymentemail/${window.localStorage.getItem(
                  "user_email"
                )}/${window.localStorage.getItem("total_price")}`
              )
              .then((Response) => {})
              .catch((error) => {
                console.log("Something went wrong", error);
              });

            props.history.push("/home");
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          notes: {
            address: "Supertail",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
      .catch((error) => {
        console.log("helloo");
        console.log(error);
      });
  };

  const addOrder = () => {
    ApiCustomerService.addorders(
      window.localStorage.getItem("total_price"),
      window.localStorage.getItem("user_id")
    ).then((res) => {
      JSON.stringify(window.localStorage.setItem("orderId", res.data.result));
      addOrderDetail();
    });
  };

  const addOrderDetail = () => {
    ApiCustomerService.addDetails(
      window.localStorage.getItem("user_id"),
      JSON.parse(window.localStorage.getItem("orderId"))
    ).then((res) => {
      JSON.stringify(
        window.localStorage.setItem("deliveryBoyId", res.data.result)
      );
      paymentDetails();
    });
  };

  const paymentDetails = () => {
    const payment1 = {
      paymentType: "UPI",
      deliveryBoyId: JSON.parse(window.localStorage.getItem("deliveryBoyId")),
      orderId: JSON.parse(window.localStorage.getItem("orderId")),
    };
    ApiCustomerService.addpaymentDetails(payment1);
    addOrderIdtoOrderAddress();
  };

  const addOrderIdtoOrderAddress = () => {
    ApiCustomerService.addOrderIdtoOrderAddress(
      window.localStorage.getItem("address_id"),
      window.localStorage.getItem("orderId")
    );
  };

  const addDetails = () => {
    addOrder();
    Swal.fire("Good job!", "Congrates!! Payment successful !!", "success");
    //alert("Payment Done");
    window.localStorage.removeItem("cart_size");
    window.localStorage.removeItem("deliveryBoyId");
    window.localStorage.removeItem("orderId");

    props.history.push("/home");
  };

  return (
    <div className=" com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <ul class="d-flex justify-content-center">
          <i class="fa fa-pencil-square-o fs-1 " aria-hidden="true">
            &nbsp;
          </i>

          <Header title="Add Address " class="fs-4 " />
        </ul>
        <br />
        <div className="form">
          <div className="row mb-3">
            <label
              className="col-sm-4 col-form-label fw-bold"
              style={{ color: "#E8E3E1FC" }}
            >
              Flat No
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="flatNo"
                value={flatNo}
                onChange={(e) => {
                  setFlatNo(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label
              className="col-sm-4 col-form-label fw-bold"
              style={{ color: "#E8E3E1FC" }}
            >
              Society Name{" "}
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="societyName"
                value={societyName}
                onChange={(e) => {
                  setSocietyName(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="row mb-3">
            <label
              className="col-sm-4 col-form-label fw-bold"
              style={{ color: "#E8E3E1FC" }}
            >
              Area
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="area"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label
              className="col-sm-4 col-form-label fw-bold"
              style={{ color: "#E8E3E1FC" }}
            >
              City
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label
              className="col-sm-4 col-form-label fw-bold"
              style={{ color: "#E8E3E1FC" }}
            >
              pincode
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="pinCode"
                value={pinCode}
                onChange={(e) => {
                  setPinCode(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label
              className="col-sm-4 col-form-label fw-bold"
              style={{ color: "#E8E3E1FC" }}
            >
              state
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="state"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <button className="btn4 btn-success float-end" onClick={payment}>
              Payment
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
  //   <div>
  //     <Navigation />
  //     <div className="main">
  //       <Header title="Add Address" />
  //       <br />
  //       <div className="form">
  //         <div className="row mb-3">
  //           <label className="col-sm-4 col-form-label">Flat No</label>
  //           <div className="col-sm-8">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="flatNo"
  //               value={flatNo}
  //               onChange={(e) => {
  //                 setFlatNo(e.target.value);
  //               }}
  //             />
  //           </div>
  //         </div>

  //         <div className="row mb-3">
  //           <label className="col-sm-4 col-form-label">Society Name </label>
  //           <div className="col-sm-8">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="societyName"
  //               value={societyName}
  //               onChange={(e) => {
  //                 setSocietyName(e.target.value);
  //               }}
  //             />
  //           </div>
  //         </div>

  //         <div class="row mb-3">
  //           <label className="col-sm-4 col-form-label">Area</label>
  //           <div className="col-sm-8">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="area"
  //               value={area}
  //               onChange={(e) => {
  //                 setArea(e.target.value);
  //               }}
  //             />
  //           </div>
  //         </div>

  //         <div className="row mb-3">
  //           <label className="col-sm-4 col-form-label">City</label>
  //           <div className="col-sm-8">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="city"
  //               value={city}
  //               onChange={(e) => {
  //                 setCity(e.target.value);
  //               }}
  //             />
  //           </div>
  //         </div>

  //         <div className="row mb-3">
  //           <label className="col-sm-4 col-form-label">pincode</label>
  //           <div className="col-sm-8">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="pinCode"
  //               value={pinCode}
  //               onChange={(e) => {
  //                 setPinCode(e.target.value);
  //               }}
  //             />
  //           </div>
  //         </div>

  //         <div className="row mb-3">
  //           <label className="col-sm-4 col-form-label">state</label>
  //           <div className="col-sm-8">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="state"
  //               value={state}
  //               onChange={(e) => {
  //                 setState(e.target.value);
  //               }}
  //             />
  //           </div>
  //         </div>
  //         <div className="mb-3">
  //           <button className="btn4 btn-success float-end" onClick={payment}>
  //             Payment
  //           </button>
  //           <br></br>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default OrderAddressScreen;
