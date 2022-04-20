import "../../App.css";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";
import Swal from "sweetalert2";
const UpdateProductScreen = (props) => {
  const [updateProducts, setUpdateProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [qty, setQty] = useState("");
  const [grams, setGrams] = useState("");

  useEffect(() => {
    const productId = props.match.params.id;
    if (productId) {
      findProductById(productId);
      console.log(productId);
    }
  }, []);

  const findProductById = (productId) => {
    ApiSupplierService.fetchProductsById(productId).then((response) => {
      if (response != null) {
        setUpdateProducts(response.data.result);
      }
    });
  };

  const updateProduct = (e) => {
    e.preventDefault();

    const product = {
      id: updateProducts.id,
      productName: productName,
      description: description,
      price: price,
      discount: discount,
      finalPrice: price - (discount * price) / 100,
      qty: qty,
      grams: grams,
    };

    ApiSupplierService.updateProduct(product).then((res) => {
      Swal.fire("Product Updates successfully", "", "success");
      //alert("Product Updates successfully");
      props.history.push("/supplier/showproducts");
    });
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="main" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <ul class="d-flex justify-content-center">
          <i class="fa fa-pencil-square fs-1 text-light" aria-hidden="true">
            Update product
          </i>
        </ul>
        <div className="form">
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold text-light">
              Product Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                required
                autoComplete="off"
                class="form-control"
                name="productName"
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold text-light">
              Product Description
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                name="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold text-light">
              MRP
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold text-light">
              Discount %
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                name="discount"
                value={discount}
                onChange={(e) => {
                  setDiscount(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold text-light">
              Quantity
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                name="qty"
                value={qty}
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold text-light">
              Grams
            </label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                name="grams"
                value={grams}
                onChange={(e) => {
                  setGrams(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="float-start">
              <Link to="/supplierhome" className="btn btn-warning fw-bold text">
                Home Page
              </Link>
            </div>
            <button
              className="btn btn-success float-end fw-bold"
              onClick={updateProduct}
            >
              Update Product
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductScreen;
