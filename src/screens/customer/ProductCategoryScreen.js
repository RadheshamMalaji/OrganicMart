import Navigation from "../../components/Navigation";
import React, { useEffect, useState } from "react";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
const ProductCategoryScreen = (props) => {
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    reloadProductsList();
  }, []);

  const reloadProductsList = () => {
    ApiCustomerService.fetchProductsByCategoryId(
      window.localStorage.getItem("category_id")
    ).then((res) => {
      window.localStorage.setItem("msg", res.data.message);
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
    props.history.push("/product-category");
  };

  const productDetails = (product) => {
    window.localStorage.setItem("product_id", product.id);
    props.history.push("/product-details");
  };

  const selectProductsByLowtoHigh = () => {
    ApiCustomerService.sortProductsByLowToHigh(
      window.localStorage.getItem("category_id")
    ).then((res) => {
      setProducts(res.data.result);
      console.log(products);
    });
  };

  const selectProductsByHightoLow = () => {
    ApiCustomerService.sortProductsByHighToLow(
      window.localStorage.getItem("category_id")
    ).then((res) => {
      setProducts(res.data.result);
      console.log(products);
    });
  };

  return (
    <div>
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container">
        <div className="container">
          <h4>!!! {window.localStorage.getItem("category_name")} !!!</h4>
          <div className="position">
            <div className="dropdown">
              <a
                className="btn btn-light dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      selectProductsByLowtoHigh();
                    }}
                  >
                    Sort By Price : Low to High
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      selectProductsByHightoLow();
                    }}
                  >
                    Sort By Price : High to Low
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div className="container">
            <div className="row row-center">
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
                    className="btn btn-sm btn-success btn-add-to-cart"
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
export default ProductCategoryScreen;
