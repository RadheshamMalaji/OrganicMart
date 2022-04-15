import Navigation from "../../components/Navigation";

import React, { useEffect, useState } from "react";
import ApiCustomerService from "../../services/customer/ApiCustomerService";

const ShowSearchProductScreen = (props) => {
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [st, setSt] = useState("Product Not Found");

  useEffect(() => {
    reloadProductsList();
  }, []);

  const reloadProductsList = () => {
    ApiCustomerService.fetchProductsByName(
      window.localStorage.getItem("searchProductName")
    ).then((res) => {
      setProducts(res.data.result);
    });
  };

  const addProductToCart = (product) => {
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
    window.localStorage.setItem("addressStatus", false);
    props.history.push("/home");
  };

  const productDetails = (product) => {
    window.localStorage.setItem("product_id", product.id);
    props.history.push("/product-details");
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="container">
          <div className="container">
            <div className="row row-center">
              <h5 className="nameColor1">{products.length === 0 && st}</h5>

              {products.map((product) => (
                <div className="product col-md-3" key={product.id}>
                  <div className="title">
                    <img
                      src={"/images/" + product.productName + ".jpg"}
                      className="d-block w-100 "
                      alt="image"
                      height="150px"
                      width="50px"
                    />
                    <a
                      className="nav-link"
                      onClick={() => {
                        productDetails(product);
                      }}
                    >
                      <h5 className="nameColor">{product.productName}</h5>
                    </a>
                    <h5 className="nameColor">Rs. {product.finalPrice}</h5>
                    <h5 className="nameColor">
                      Rs. <strike>{product.price}</strike>
                      <span className="nameColor1">
                        &nbsp; {product.discount}% off
                      </span>
                    </h5>
                    <h5 className="nameColor">{product.grams}gms</h5>
                  </div>
                  <button
                    onClick={() => {
                      addProductToCart(product);
                    }}
                    className="btn4 btn-sm btn-success btn-add-to-cart"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowSearchProductScreen;
