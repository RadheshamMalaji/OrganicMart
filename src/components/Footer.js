import React from "react";
export default function Footer(props) {
  //selectcategory = selectcategory.bind();

  const selectcategory = (id, name) => {
    window.localStorage.setItem("category_id", id);
    window.localStorage.setItem("category_name", name);
    props.history.push("/product-category");
  };
  return (
    <div className="">
      <div className="footer" onClick={selectcategory}>
        <div>
          <table width="90%" style={{ marginLeft: "16px" }}>
            <br></br>
            <tr>
              <td>
                <tr>
                  <a href="/aboutus" className="nav-link">
                    <h6 className="nameColor">About Us</h6>
                  </a>
                </tr>
                <tr>
                  <a href="/contactus" className="nav-link">
                    <h6 className="nameColor">Contact Us</h6>
                  </a>
                </tr>
                <tr>
                  <a href="/termsnconditions" className="nav-link">
                    <h6 className="nameColor">Terms & Conditions</h6>
                  </a>
                </tr>

                <tr>
                  <a href="/privacypolicy" className="nav-link">
                    <h6 className="nameColor">Privacy Policy</h6>
                  </a>
                </tr>

                <tr>
                  <a href="/faqs" className="nav-link">
                    <h6 className="nameColor">FAQs</h6>
                  </a>
                </tr>
              </td>

              <td className="float-end">
                <div className="nameColor">
                  {" "}
                  <h2>Contact Us</h2> WhatsApp us :{" "}
                  <span
                    style={{ display: "inline-block;", marginBottom: "1rem;" }}
                  >
                    <p>9272062628 & 8766828353</p>
                  </span>
                  <br />
                  <br /> <h2>Download App</h2> <br />
                  <a href="..." style={{ marginRight: "16px" }}>
                    <img
                      src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                      alt="Download OrganicMart App for Android from Play Store"
                    />
                  </a>
                  <a href="...">
                    <img
                      src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                      alt="Download OrganicMart App for iOs from App Store"
                    />
                  </a>
                </div>{" "}
              </td>
            </tr>
          </table>

          <div class="copyright">
            <div>© By 2021, Organic Mart CDAC Project, INDIA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
