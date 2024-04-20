import "../admin.css";

import Footer from "../Footer";
import Nav from "../Header";
import NavLinks from "../NavLinks";
import CustomerListing from "./CustomerListing";

function CustomerMain() {
  return (
    <div>
      <Nav />
      <div className="position-relative">
        <div
          id="navLink"
          className="my-5 position-absolute top-0 start-50 translate-middle"
        >
          <NavLinks />
        </div>
      </div>
      <div className="customer">
        <CustomerListing />
      </div>
      <Footer />
    </div>
  );
}

export default CustomerMain;
