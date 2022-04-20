import "../../App.css";
import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";
import Swal from "sweetalert2";
const AddProductScreen = (props) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [qty, setQty] = useState("");
  const [grams, setGrams] = useState("");
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    ApiSupplierService.fetchProductCategoryName(
      window.localStorage.getItem("user_id")
    ) //Hard Coded Make Sure if the category id and supplier id is same
      .then((res) => {
        setCategoryName(res.data.result);
      });
  }, []);

  const backToOrderHistory = () => {
    props.history.push("/supplierhome");
  };

  const addProduct = (e) => {
    e.preventDefault();

    const product = {
      productName: productName,
      description: description,
      rating: rating,
      price: price,
      discount: discount,
      finalPrice: price - (discount * price) / 100,
      qty: qty,
      grams: grams,
      suppliedid: window.localStorage.getItem("user_id"),
    };

    ApiSupplierService.addProductBySupplier(categoryName, product).then(
      (res) => {
        Swal.fire("Product Added successfully", "", "success");
        //alert("Product Added successfully");
        props.history.push("/supplierhome");
      }
    );
  };

  return (
    <div className="com-bgimg1">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div
        className="main vh-90"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <ul class="d-flex justify-content-center">
          <i class="fa fa-plus-circle fs-1 text-light" aria-hidden="true">
            Add Product
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
          {}
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
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label fw-bold text-light">
              Category name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                name="CategoryName"
                value={categoryName}
                readOnly
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="float-start">
              <button
                className="btn btn-warning fw-bold"
                onClick={() => backToOrderHistory()}
              >
                Home
              </button>
            </div>
            <button
              className="btn btn-success float-end fw-bold"
              onClick={addProduct}
            >
              Add Product
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductScreen;
