import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiSupplierService from "../../services/supplier/ApiSupplierService";

const ShowProductsScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    ApiSupplierService.fetchProductsBySupplierId(
      window.localStorage.getItem("user_id")
    ) //Hard Coded Make Sure if the category id and supplier id is same
      .then((res) => {
        setProducts(res.data.result);
      });

    ApiSupplierService.fetchProductCategoryName(
      window.localStorage.getItem("user_id")
    ) //Hard Coded Make Sure if the category id and supplier id is same
      .then((res) => {
        setCategoryName(res.data.result);
      });
  }, []);

  const deleteProduct = (productId) => {
    ApiSupplierService.deleteProduct(productId).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div>
      <Navigation />
      <div className="container">
        <table class="table table-striped">
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
                Update Product
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
                <tr>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{categoryName}</td>
                  <td>{product.rating}</td>
                  <td>
                    <Link
                      to={"/supplier/updateproduct/" + product.id}
                      className="btn4 btn-success"
                    >
                      Update Product
                    </Link>
                  </td>
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

export default ShowProductsScreen;
