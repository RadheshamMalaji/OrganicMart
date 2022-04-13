import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

const ShowProductsBySupplierScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    console.log("HI I Am Show Product");
    console.log(props.match.params.id);
    ApiSupplierService.fetchProductsBySupplierId(props.match.params.id).then(
      (res) => {
        setProducts(res.data.result);
      }
    );

    ApiSupplierService.fetchProductCategoryName(props.match.params.id).then(
      (res) => {
        setCategoryName(res.data.result);
      }
    );
  }, []);

  const deleteProduct = (productId) => {
    ApiSupplierService.deleteProduct(productId).then((res) => {
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
              <th scope="col" width="10%">
                Product id
              </th>
              <th scope="col" width="20%">
                Product Name
              </th>
              <th scope="col" width="20%">
                Category
              </th>
              <th scope="col" width="10%">
                Rating
              </th>
              <th scope="col" width="10%">
                Quantity
              </th>
              <th scope="col" width="9%">
                Delete Product
              </th>
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
                <tr className="text-light">
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{categoryName}</td>
                  <td>{product.rating}</td>
                  <td>{product.qty}</td>
                  <td>
                    <button
                      className="btn4 btn-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete Product
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
export default ShowProductsBySupplierScreen;
