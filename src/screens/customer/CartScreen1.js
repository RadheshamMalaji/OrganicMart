import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

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
    <div>
      <Navigation />
      <div className="container">
        <h2 className="text-center">Cart Details</h2>
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
                <tr key={product.id}>
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
            onClick={() => placeOrder()}
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
