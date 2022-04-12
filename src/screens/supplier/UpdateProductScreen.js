import "../../App.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

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
        // this.setState({
        //   id: response.data.result.id,
        //   productName: response.data.result.productName,
        //   description: response.data.result.description,
        //   rating: response.data.result.rating,
        //   price: response.data.result.price,
        //   discount: response.data.result.discount,
        //   finalPrice: response.data.result.finalPrice,
        //   qty: response.data.result.qty,
        //   grams: response.data.result.grams,
        // });
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
      alert("Product Updates successfully");
      props.history.push("/supplier/showproducts");
    });
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <Header title="Update Product" />
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
          {/* 
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Final Price</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="finalPrice" value={this.state.finalPrice} onChange={this.onChange} />
                </div>
            </div>
*/}
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
          <div className="mb-3">
            <div className="float-start">
              <Link to="/supplierhome">Home Page</Link>
            </div>
            <button
              className="btn4 btn-success float-end"
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
