import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import Swal from "sweetalert2";
import axios from "axios";

const CartScreen = (props) => {
  const [cart, setCart] = useState([]);
  const [st, setSt] = useState(false);
  const [tamt, setTamt] = useState(0);
  const [samt, setSamt] = useState(0);
  const [sts, setSts] = useState("Cart Is Empty");

  useEffect(() => {
    getStatus();
    let size = JSON.parse(window.localStorage.getItem("cart_size"));
    if (size !== 0) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      ApiCustomerService.getCartByUserId(
        JSON.parse(window.localStorage.getItem("user_id"))
      ).then((res) => {
        setCart(res.data.result);
      });

      ApiCustomerService.getTAmtUserId(
        JSON.parse(window.localStorage.getItem("user_id"))
      ).then((res) => {
        setTamt(res.data.result);
      });

      ApiCustomerService.getSAmtByUserId(
        JSON.parse(window.localStorage.getItem("user_id"))
      ).then((res) => {
        setSamt(res.data.result);
      });
    }
  }, []);

  const getStatus = () => {
    setSt(window.localStorage.getItem("status") === "true");
  };

  const placeOrder = () => {
    let size = JSON.parse(window.localStorage.getItem("cart_size"));
    if (size === 0) {
      alert(" !!! Cart Is Empty !!!");
    }
    if (size !== 0) {
      // window.localStorage.setItem("add", state.pinCode);
      if (st && window.localStorage.getItem("addressStatus") === "false") {
        alert(" !!! Enter Valid Address !!!");
      }
      !st && props.history.push("/login");
      if (window.localStorage.getItem("addressStatus") === "true") {
        window.localStorage.setItem("addressStatus", false);
        st && props.history.push("/payment");
        !st && props.history.push("/login");
        window.localStorage.setItem("total_price", tamt);
      }
    }
  };

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

  const displayRazorpay = () => {
    let size = JSON.parse(window.localStorage.getItem("cart_size"));
    if (size === 0) {
      alert(" !!! Cart Is Empty !!!");
    }
    if (size !== 0) {
      // window.localStorage.setItem("add", state.pinCode);
      if (st && window.localStorage.getItem("addressStatus") === "false") {
        alert(" !!! Enter Valid Address !!!");
      }
      !st && props.history.push("/login");
      if (window.localStorage.getItem("addressStatus") === "true") {
        const res = loadScript;
        if (!res) {
          alert("you are offline !!!");
        }

        axios
          .post("http://localhost:8080/customers/create_order", {
            amount: tamt,
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
                // setPayment({...payment, cardno:response.razorpay_payment_id})
                // handleSubmit();
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
                console.log("Payment successful !!");
                //alert("congrates!! Payment successful !!");
                Swal.fire(
                  "Good job!",
                  "Congrates!! Payment successful !!",
                  "success"
                );
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
      }
    }
  };

  const addAddress = () => {
    let size = JSON.parse(window.localStorage.getItem("cart_size"));
    if (size === 0) {
      alert(" !!! Cart Is Empty !!!");
    }
    if (size !== 0) {
      st && window.localStorage.setItem("addressStatus", true);
      !st && props.history.push("/login");
      st && props.history.push("/orderaddress");
    }
  };

  const deleteProduct = (cartId, qty) => {
    ApiCustomerService.deleteCartByUserId(cartId).then((res) => {
      window.location.reload();
      JSON.stringify(
        window.localStorage.setItem(
          "cart_size",
          JSON.parse(window.localStorage.getItem("cart_size")) - qty
        )
      );
    });
  };

  return (
    <div className=" com-bgimg1 vh-100">
      <Navigation />
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <h2 className="text-center fa fa-cart-arrow-down fs-1">Cart Details</h2>
        {cart.length === 0 && (
          <div className="container">
            <h5 className="nameColor1">
              {JSON.parse(window.localStorage.getItem("cart_size")) === 0 &&
                sts}
            </h5>
          </div>
        )}
        {cart.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr className="float-center">
                <th>Product Name</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Grams</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr
                  key={product.id}
                  className="fw-bold"
                  style={{ color: "#E8E3E1FC" }}
                >
                  <td>{product.productName}</td>
                  <td>{product.finalPrice}</td>
                  <td>{product.qty}</td>
                  <td>{product.grams}</td>
                  <td>
                    <button
                      className="btn4 btn-danger"
                      onClick={() => deleteProduct(product.id, product.qty)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <br />

        <div className="float-end">
          <h5>Total Price : {tamt}</h5>
          <h5>Savings Amount : {samt}</h5>
          <button
            className="btn4 btn-primary"
            style={{ width: "200px" }}
            onClick={() => addAddress()}
          >
            Add Address
          </button>
          <br />
          <br />
          <button
            className="btn4 btn-primary"
            style={{ width: "200px" }}
            onClick={() => displayRazorpay()}
          >
            Place Order
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default CartScreen;
