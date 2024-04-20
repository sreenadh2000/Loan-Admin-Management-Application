import Footer from "../Footer";
import Nav from "../Header";
import NavLinks from "../NavLinks";
import "../admin.css";
import ItemListing from "./ItemListing";

function LoansMain() {
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
      <div className="Items">
        <ItemListing />
      </div>
      <Footer />
    </div>
  );
}

export default LoansMain;
