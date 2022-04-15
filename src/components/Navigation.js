import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import React, { useEffect, useState } from "react";
import ApiCustomerService from "../services/customer/ApiCustomerService";

const Navigation = (props) => {
  const [st, setSt] = useState(false);
  const [category, setCategory] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    getStatus();
    reloadCategoryList();
  }, []);

  const reloadCategoryList = () => {
    ApiCustomerService.fetchAllCategory().then((res) => {
      setCategory(res.data.result);
    });
  };
  const getStatus = () => {
    setSt(window.localStorage.getItem("status") === "true");
  };

  const searchProductByName = (e) => {
    e.preventDefault();
    window.localStorage.setItem("searchProductName", searchProduct);
    window.open("/show-search-product");
  };

  const selectcategory = (id, name) => {
    window.localStorage.setItem("category_id", id);
    window.localStorage.setItem("category_name", name);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "forestgreen" }}
      >
        <div className="container-fluid text-white">
          {window.localStorage.getItem("user_role") !== "DELIVERY_BOY" &&
            window.localStorage.getItem("user_role") !== "ADMIN" &&
            window.localStorage.getItem("user_role") !== "SUPPLIER" && (
              <a href="/home" className="navbar-brand">
                <img src={logo} alt="Logo" width="80px" height="50px" />
              </a>
            )}

          {window.localStorage.getItem("user_role") === "DELIVERY_BOY" && (
            <Link to="/deliveryboyhome">
              <a href="..." className="navbar-brand">
                <img src={logo} alt="Logo" width="80px" height="50px" />
              </a>
            </Link>
          )}

          {window.localStorage.getItem("user_role") === "ADMIN" && (
            <Link to="/adminhome">
              <a href="..." className="navbar-brand">
                <img src={logo} alt="Logo" width="80px" height="50px" />
              </a>
            </Link>
          )}

          {window.localStorage.getItem("user_role") === "SUPPLIER" && (
            <Link to="/supplierhome">
              <a href="..." className="navbar-brand">
                <img src={logo} alt="Logo" width="80px" height="50px" />
              </a>
            </Link>
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {window.localStorage.getItem("user_role") !== "DELIVERY_BOY" &&
                window.localStorage.getItem("user_role") !== "ADMIN" &&
                window.localStorage.getItem("user_role") !== "SUPPLIER" && (
                  <li className="nav-item">
                    <Link to="/home">
                      <a href="..." className="nav-link nameColor2">
                        <h5>Home</h5>
                      </a>
                    </Link>
                  </li>
                )}
              {window.localStorage.getItem("user_role") === "DELIVERY_BOY" && (
                <li className="nav-item">
                  <Link to="/deliveryboyhome">
                    <h5 className="nav-link nameColor2">Home</h5>
                  </Link>
                </li>
              )}
              {window.localStorage.getItem("user_role") === "ADMIN" && (
                <li className="nav-item">
                  <Link to="/adminhome">
                    <h5 className="nav-link nameColor2">Home</h5>
                  </Link>
                </li>
              )}
              {window.localStorage.getItem("user_role") === "SUPPLIER" && (
                <li className="nav-item">
                  <Link to="/supplierhome">
                    <h5 className="nav-link nameColor2">Home</h5>
                  </Link>
                </li>
              )}
              {st && window.localStorage.getItem("user_role") === "CUSTOMER" && (
                <li class="nav-item dropdown">
                  <h5>
                    <a
                      class="nav-link dropdown-toggle nameColor2"
                      href="myaccount"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      My Account
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="/myaccount/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/myaccount/editprofile">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="/myaccount/change-password"
                        >
                          Update Password
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="/myaccount/changeaddress"
                        >
                          Change Address
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/myaccount/orderhistory">
                          Order History
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="/logout">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </h5>
                </li>
              )}

              {window.localStorage.getItem("user_role") !== "DELIVERY_BOY" &&
                window.localStorage.getItem("user_role") !== "SUPPLIER" &&
                window.localStorage.getItem("user_role") !== "ADMIN" && (
                  <li class="nav-item dropdown">
                    <h5>
                      <a
                        class="nav-link dropdown-toggle nameColor2"
                        href="myaccount"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Category
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {category.map((cat) => (
                          <li>
                            <a
                              class="dropdown-item"
                              href="/product-category"
                              onClick={() => {
                                selectcategory(cat.id, cat.categoryName);
                              }}
                            >
                              {cat.categoryName}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </h5>
                  </li>
                )}

              {st &&
                window.localStorage.getItem("user_role") === "DELIVERY_BOY" && (
                  <li class="nav-item dropdown">
                    <h5>
                      <a
                        class="nav-link dropdown-toggle nameColor2"
                        href="myaccount"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        My Account
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="/myaccount/profile">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="/myaccount/editprofile"
                          >
                            Edit Profile
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="/myaccount/change-password"
                          >
                            Change Password
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/pendingorderfordb">
                            Pending Orders
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/deliveredorderfordb">
                            Delivered Orders
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="/logout">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </h5>
                  </li>
                )}

              {st && window.localStorage.getItem("user_role") === "ADMIN" && (
                <li class="nav-item dropdown">
                  <h5>
                    <a
                      class="nav-link dropdown-toggle nameColor2"
                      href="myaccount"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      My Account
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="/myaccount/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/myaccount/editprofile">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="/myaccount/change-password"
                        >
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/pendingorderforadmin">
                          Pending Orders
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/deliveredorderforadmin">
                          Delivered Orders
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/showsupplier">
                          Show Supplier
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/showdeliveryboy">
                          Show Delivery Boy
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="/logout">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </h5>
                </li>
              )}
              {st && window.localStorage.getItem("user_role") === "SUPPLIER" && (
                <li class="nav-item dropdown">
                  <h5>
                    <a
                      class="nav-link dropdown-toggle nameColor2"
                      href="myaccount"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      My Account
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="/myaccount/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/myaccount/editprofile">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="/myaccount/change-password"
                        >
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="/myaccount/changeaddress"
                        >
                          Change Address
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/addproduct">
                          Add Product
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/supplier/showproducts">
                          Product Details
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="/logout">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </h5>
                </li>
              )}
            </ul>

            {window.localStorage.getItem("user_role") !== "DELIVERY_BOY" &&
              window.localStorage.getItem("user_role") !== "ADMIN" &&
              window.localStorage.getItem("user_role") !== "SUPPLIER" && (
                <ul className="nav justify-content-center">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      size="80"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      name="searchProduct"
                      value={searchProduct}
                      onChange={(e) => {
                        setSearchProduct(e.target.value);
                      }}
                    />
                    <button
                      className="btn btn-warning"
                      type="submit"
                      onClick={searchProductByName}
                    >
                      Search
                    </button>
                  </form>
                </ul>
              )}

            <ul className="nav justify-content-end">
              {window.localStorage.getItem("user_role") !== "DELIVERY_BOY" &&
                window.localStorage.getItem("user_role") !== "ADMIN" &&
                window.localStorage.getItem("user_role") !== "SUPPLIER" && (
                  <Link to="/cart">
                    <li class="nav-link">
                      <a
                        href="..."
                        class="cart position-relative d-inline-flex"
                        aria-label="View your shopping cart"
                      >
                        <h5>
                          <i class="fas fa fa-shopping-cart fa-lg"></i>
                        </h5>
                        <span class="cart-basket d-flex align-items-center justify-content-center">
                          {window.localStorage.getItem("cart_size")}
                        </span>
                      </a>
                    </li>
                  </Link>
                )}
              {!st && (
                <li className="nav-item">
                  <Link to="/create-account">
                    <h5 className="nameColor2 nav-link">Create Account</h5>
                  </Link>
                </li>
              )}
              {!st && (
                <li className="nav-item">
                  <Link to="/login">
                    <h5 className="nameColor2 nav-link">Login</h5>
                  </Link>
                </li>
              )}
              {st && (
                <li className="nav-item">
                  <Link to="/myaccount/profile">
                    <h5 className="nameColor2 nav-link">
                      Hello, {window.localStorage.getItem("user_fname")}
                    </h5>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default Navigation;
