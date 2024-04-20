import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

function AddLoanData(params) {
  ////////////// Add Model Show ////////////////////
  const [addShow, setAddShow] = useState(false);
  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);
  /////////////// End Add Model Show ////////
  const initialState = {
    loan_id: "",
    loan_type: "",
    duration: "",
  };

  const [state, setState] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const addLoanToServer = (data) => {
    axios
      .post("http://localhost:5000/loan", data)
      .then((res) => {
        console.log("Successfully Added");
        // setBoolTest(!boolTest);
        toast.success("Successfully Added Data", { theme: "colored" });
        handleAddClose();
      })
      .catch((e) => console.log(e));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    addLoanToServer(state);
  };

  ///////////////////////////// retuen Statement ////////////////////////
  return (
    <>
      <Button className="btn Sucess-but mb-3" onClick={handleAddShow}>
        Add New Loan +
      </Button>

      <Modal size="xl" show={addShow} onHide={handleAddClose}>
        <Modal.Header closeButton className="Add-Header">
          <Modal.Title>Add New Loan Details</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
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
                  value={state.loan_id}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {/* Loan Type */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Loan Type</Form.Label>
                <Form.Select name="loan_type" onChange={handleInputChange}>
                  <option>Choose...</option>
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
                  value={state.duration}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className="Footer">
            <Button variant="secondary" type="reset" onClick={handleAddClose}>
              Close
            </Button>
            <Button type="submit" className="lastButton">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddLoanData;
