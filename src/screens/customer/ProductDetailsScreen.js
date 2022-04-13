import Navigation from "../../components/Navigation";
import React, { useState, useEffect } from "react";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
const ProductDetailsScreen = (props) => {
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    ApiCustomerService.fetchProductsById(
      window.localStorage.getItem("product_id")
    ).then((res) => {
      setProduct(res.data.result);
    });
  }, []);

  const addProductToCart = () => {
    let productCartId = {
      userId: JSON.parse(window.localStorage.getItem("user_id")),
      productId: product.id,
    };
    ApiCustomerService.addProductToCart(productCartId).then((res) => {
      setMessage(res.data.result);
    });
    alert("!!! Items Added to Cart !!!");
    JSON.stringify(
      window.localStorage.setItem(
        "cart_size",
        JSON.parse(window.localStorage.getItem("cart_size")) + 1
      )
    );
    props.history.push("/product-category");
  };

  return (
    <div>
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container">
        <div className="main">
          <h4>!!! {window.localStorage.getItem("category_name")} !!!</h4>
          <img
            src={"/images/" + product.productName + ".jpg"}
            className="center "
            alt="image"
            height="150px"
            width="150px"
          />
          <h5 className="nameColor">{product.productName}</h5>
          <h5 className="nameColor">Rs. {product.finalPrice}</h5>

          <h5 className="nameColor">
            Rs. <strike>{product.price}</strike>
            <span className="nameColor1">&nbsp; {product.discount}% off</span>
          </h5>
          <h5 className="nameColor">{product.grams}gms</h5>
          <h5 className="nameColor">Description : {product.description}</h5>
          <h5 className="nameColor">Rating : {product.rating}</h5>
          <button
            onClick={() => {
              addProductToCart();
            }}
            className="btn4 btn-sm btn-success btn-add-to-cart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsScreen;
