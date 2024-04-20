import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
// Toastify Usage imports
import { toast } from "react-toastify";
function UpdatedLoans({ tdLoanData }) {
  ///////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// this is the edit Loanb Details Section //////////////////
  /////////////////////////////////////////////////////////////////////////////////////
  // const [loanId, setLoanId] = useState(tdLoanData.loan_id);
  const [loanType, setLoanType] = useState(tdLoanData.loan_type);
  const [duration, setDuration] = useState(tdLoanData.duration);
  // useEffect(() => {
  //   console.log(loanId);
  // }, [loanId, loanType, duration]);
  const AddEditLoanData = (data) => {
    axios
      .put("http://localhost:5000/loan/" + data.loan_id, { ...data })
      .then((res) => {
        console.log(res.data);
        toast.info("Successfully Edited", { theme: "colored" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editSubmitHandler = (e) => {
    const editData = {
      loan_id: tdLoanData.loan_id,
      loan_type: loanType,
      duration: duration,
    };
    AddEditLoanData(editData);
  };
  return (
    <>
      <Modal.Body>
        <div className="row g-3">
          {/* Loan Id */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Loan ID *</Form.Label>
            <Form.Control
              className="first-Control"
              type="text"
              placeholder="Employee ID"
              name="loan_id"
              value={tdLoanData.loan_id}
              readOnly
            />
          </Form.Group>
          {/* Loan Type */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Loan Type</Form.Label>
            <Form.Select
              name="loan_type"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option>Furniture</option>
              <option>Stationary</option>
              <option>Crackery</option>
            </Form.Select>
          </Form.Group>

          {/* Duration */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Duration</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
        </div>
      </Modal.Body>
      <Modal.Footer className="Footer">
        <Button type="reset" variant="secondary">
          Reset
        </Button>
        <Button
          type="submit"
          className="lastButton"
          onClick={editSubmitHandler}
        >
          Save Changes
        </Button>
      </Modal.Footer>
      {/* Edit Details End */}
    </>
  );
}

export default UpdatedLoans;
