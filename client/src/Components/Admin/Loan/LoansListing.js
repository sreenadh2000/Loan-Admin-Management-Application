import EditIcon from "../../../Images/pencil-simple-line-fill.svg";
import DeleteIcon from "../../../Images/trash-fill.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import AddLoanData from "./AddLoanData";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";
import UpdatedLoans from "./UpdateLoans";

// import EditForm from "./EditForm";
function LoansListing() {
  ////// Edit Model Show ////////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /////////////// End Edit Model Show ////////
  const [loanData, setLoanData] = useState([]);
  const [editLoan, setEditLoan] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/loan")
      .then((res) => {
        setLoanData(res.data);
      })
      .catch((err) => console.log(err));
  }, [loanData]);
  ////////////////////////// Delete Button Handler///////////////////
  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:5000/loan/" + id)
      .then((res) => {
        console.log("loan Deleted Successfully");
        toast.info("Successfully Deleted", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ////////////////////////////////// Return Section ///////////////////////////
  return (
    <div className="Listing">
      <AddLoanData />
      <table className="table">
        <thead>
          <tr className="tr-Head">
            <th>S.no</th>
            <th>Loan ID</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((person, index) => {
            return (
              <tr key={person.loan_id}>
                <td>{index + 1}</td>
                <td>{person.loan_id}</td>
                <td>{person.loan_type}</td>
                <td>{person.duration}</td>
                <td className="actions">
                  <Button
                    variant=""
                    className="btn-edit"
                    onClick={() => {
                      handleShow();
                      setEditLoan(person);
                    }}
                  >
                    <img src={EditIcon} alt="Edit-Icon" className="icons" />
                  </Button>

                  <Button
                    variant=""
                    className="btn-dlt"
                    onClick={() => deleteHandler(person.loan_id)}
                  >
                    <img src={DeleteIcon} alt="delete-Icon" className="icons" />
                  </Button>
                </td>
                <Modal size="lg" show={show} onHide={handleClose}>
                  <Modal.Header closeButton className="Add-Header">
                    <Modal.Title>Edit Customer Details</Modal.Title>
                  </Modal.Header>
                  {/* Edit Details */}
                  <UpdatedLoans tdLoanData={editLoan} />
                </Modal>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LoansListing;
