import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// Toastify Usage imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserLanding from "./Components/User/UserLanding";
import LoansMain from "./Components/Admin/Loan/LoansMain";

import ItemsMain from "./Components/Admin/Item/ItemMain";
import AdminLog from "./Components/AdminLog";

import CustomerMain from "./Components/Admin/Customers/CustomerMain";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        index: true,
        element: <AdminLog />,
      },
    ],
  },
  {
    path: "/admin",
    children: [
      { path: "customer", element: <CustomerMain /> },
      { path: "loans", element: <LoansMain /> },
      { path: "items", element: <ItemsMain /> },
    ],
  },
  {
    path: "/user",
    children: [
      { path: "", index: true, element: <UserLanding /> },
      { path: "loans", element: <LoansMain /> },
      { path: "items", element: <ItemsMain /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* TosatyContainer Usage Start*/}
      <ToastContainer></ToastContainer>
      {/* TosatyContainer Usage End*/}
    </div>
  );
}

export default App;
