import AddCustomer from "./AddCustomer";
import { useState, useEffect } from "react";
import axios from "axios";

import EditIcon from "../../../Images/pencil-simple-line-fill.svg";
import DeleteIcon from "../../../Images/trash-fill.svg";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateCustomer from "./UpdateCustomer";

// Toastify Usage imports
import { toast } from "react-toastify";

function Customer() {
  // get the date
  const getDate = (d) => {
    const date = d.slice(0, 10);
    return date;
  };
  ////// Edit Model Show ////////////////////
  const [show, setShow] = useState(false);
  const [editEmp, setEditEmp] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /////////////// End Edit Model Show ////////

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/customer")
      .then((res) => {
        setCustomerData(res.data);
      })
      .catch((err) => console.log(err));
  }, [customerData]);

  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:5000/customer/" + id)
      .then((res) => {
        console.log("user Deleted Successfully");
        toast.info("Successfully Deleted", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Listing">
      <AddCustomer />
      <table className="table">
        <thead>
          <tr className="tr-Head">
            <th>S.no</th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Designation</th>
            <th>DOB</th>
            <th>DO Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((emp, index) => {
            return (
              <tr key={emp.employee_id}>
                <td>{index + 1}</td>
                <td>{emp.employee_id}</td>
                <td>{emp.employee_name}</td>
                <td>{emp.gender}</td>
                <td>{emp.designation}</td>
                <td>{emp.department}</td>
                <td>{getDate(emp.date_of_birth)}</td>
                <td>{getDate(emp.date_of_joining)}</td>
                <td className="actions">
                  <Button
                    variant=""
                    className="btn-edit"
                    onClick={() => {
                      handleShow();
                      setEditEmp(emp);
                    }}
                  >
                    <img src={EditIcon} alt="Edit-Icon" className="icons" />
                  </Button>

                  <Button
                    variant=""
                    className="btn-dlt"
                    onClick={() => deleteHandler(emp.employee_id)}
                  >
                    <img src={DeleteIcon} alt="delete-Icon" className="icons" />
                  </Button>
                </td>
                <Modal size="lg" show={show} onHide={handleClose}>
                  <Modal.Header closeButton className="Add-Header">
                    <Modal.Title>Edit Customer Details</Modal.Title>
                  </Modal.Header>
                  <UpdateCustomer tdEmpData={editEmp} />
                </Modal>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Customer;
