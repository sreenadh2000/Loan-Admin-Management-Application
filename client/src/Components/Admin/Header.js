import "./admin.css";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function Nav() {
  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-lg navbar-dark admin-header mb-4">
      {/* <!-- Container wrapper --> */}
      <div className="container-fluid">
        {/* <!-- Navbar brand --> */}
        <Link className="Link" to={"/"}>
          <h5 className="pt-1 mx-2">LAMA</h5>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/admin/customer"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "600" : "normal",
                  };
                }}
              >
                {" "}
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/admin/loans"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "600" : "normal",
                  };
                }}
              >
                Loans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/admin/items"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "600" : "normal",
                  };
                }}
              >
                Items
              </NavLink>
            </li>
          </ul>
          {/* <!-- Left links End--> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center justify-content-start me-5">
            <DropdownButton
              className="Admin-DropDown"
              variant=""
              id="dropdown-item-button"
              title="Admin"
            >
              <Dropdown.Item as="button">View Profile</Dropdown.Item>
              <Dropdown.Item as="button">Take Actions</Dropdown.Item>
              <Dropdown.Item as="button">Log Out</Dropdown.Item>
            </DropdownButton>
          </div>
          {/* <!-- Right elements End --> */}
        </div>
        {/* <!-- Collapsible wrapper End--> */}
      </div>
      {/* <!-- Container wrapper End--> */}
    </nav>
    // <!-- Navbar -->
  );
}

export default Nav;
