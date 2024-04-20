import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div id="links">
      <ul className="nav nav-pills nav-fill fs-5">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/admin/customer"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "#37879A" : "#8FCED6",
                padding: isActive ? "3% 0 3% 0" : "auto",
              };
            }}
          >
            Customers
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink
            className="nav-link"
            to="/admin/loans"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "#37879A" : "#8FCED6",
                padding: isActive ? "3% 0 3% 0" : "auto",
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
                fontWeight: isActive ? "bold" : "normal",
                backgroundColor: isActive ? "#37879A" : "#8FCED6",
                padding: isActive ? "3% 0 3% 0" : "auto",
              };
            }}
          >
            Items
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
