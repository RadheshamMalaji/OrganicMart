import "../../App.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

const AddProductScreen = (props) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  // const [finalPrice, setFinalPrice] = useState("");
  const [qty, setQty] = useState("");
  const [grams, setGrams] = useState("");
  const [categoryName, setCategoryName] = useState("");
  // const [id, setId] = useState("");
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
      // id: ,
      productName: productName,
      description: description,
      rating: rating,
      price: price,
      discount: discount,
      finalPrice: price - (discount * price) / 100,
      qty: qty,
      grams: grams,
    };

    ApiSupplierService.addProductBySupplier(categoryName, product).then(
      (res) => {
        alert("Product Added successfully");
        props.history.push("/supplierhome");
      }
    );
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Add Product" />
        <div className="form">
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Product Name</label>
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
            <label class="col-sm-2 col-form-label">Product Description</label>
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
            <label class="col-sm-2 col-form-label">MRP</label>
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
            <label class="col-sm-2 col-form-label">Discount %</label>
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
            <label class="col-sm-2 col-form-label">Quantity</label>
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
            <label class="col-sm-2 col-form-label">Grams</label>
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
            <label class="col-sm-2 col-form-label">Category name</label>
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
                className="btn4 btn-success"
                onClick={() => backToOrderHistory()}
              >
                Home
              </button>
            </div>
            <button className="btn4 btn-success float-end" onClick={addProduct}>
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
