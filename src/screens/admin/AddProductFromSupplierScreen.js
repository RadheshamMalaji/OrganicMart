import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";
import Swal from "sweetalert2";

const AddProductFromSupplierScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    const supplierId = props.match.params.id;
    console.log(supplierId);
    ApiSupplierService.fetchSuppliedProducts(supplierId).then((res) => {
      setProducts(res.data.result);
    });

    ApiSupplierService.fetchProductCategoryName(supplierId) //Hard Coded Make Sure if the category id and supplier id is same
      .then((res) => {
        setCategoryName(res.data.result);
      });
  }, []);

  const addProductFromSupplier = (p) => {
    const product = {
      productName: p.productName,
      description: p.description,
      rating: 4,
      price: p.price,
      discount: p.discount,
      finalPrice: p.finalPrice,
      qty: p.qty,
      grams: p.grams,
    };

    ApiSupplierService.addProduct(categoryName, product).then((res) => {
      Swal.fire("Product Added successfully", "", "success");
      //alert("Product Added successfully");
    });

    ApiSupplierService.deleteFromSuppliedProducts(p.id).then((res) => {
      // Swal.fire("Product Added successfully", "", "success");
      // alert("Product Added successfully");
      window.location.reload();
    });
  };

  return (
    <div className="com-bgimg1 vh-100">
      <div className="sticky-top">
        <Navigation />
      </div>
      <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <table class="table table-striped text-light">
          <thead>
            <tr>
              <th scope="col">Product id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Final Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Grams</th>
              <th scope="col">Add Product</th>
            </tr>
          </thead>
          <tbody>
            {products === null ? (
              <tr align="center">
                <td colSpan="6">Products Not Available.</td>
              </tr>
            ) : (
              products !== null &&
              products.map((product) => (
                <tr className="fw-bold" style={{ color: "#E8E3E1FC" }}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.suppliedCategory.categoryName}</td>
                  <td>{product.price}</td>
                  <td>{product.discount}</td>
                  <td>{product.finalPrice}</td>
                  <td>{product.qty}</td>
                  <td>{product.grams}</td>
                  <td>
                    <button
                      className="btn btn-success fw-bold"
                      onClick={() => addProductFromSupplier(product)}
                    >
                      Add Product
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProductFromSupplierScreen;
