import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
// Toastify Usage imports
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCustomer() {
  ////////////// Add Model Show ////////////////////
  const [addShow, setAddShow] = useState(false);
  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);
  /////////////// End Add Model Show ////////

  const initialState = {
    emp_id: "",
    emp_name: "",
    gender: "",
    department: "",
    designation: "",
    dob: "",
    doj: "",
  };

  const [state, setState] = useState(initialState);
  // const [boolTest, setBoolTest] = useState(false);
  // useEffect(() => {
  //   console.log(boolTest);
  // }, [boolTest]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const AddedCustomer = (data) => {
    axios
      .post("http://localhost:5000/customer", data)
      .then((res) => {
        console.log("Successfully Added");
        toast.success("Successfully Added Data", { theme: "colored" });
        handleAddClose();
      })
      .catch((e) => console.log(e));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddedCustomer(state);
  };
  return (
    <>
      <Button className="btn Sucess-but mb-3" onClick={handleAddShow}>
        Add New Customer +
      </Button>

      <Modal size="xl" show={addShow} onHide={handleAddClose}>
        <Modal.Header closeButton className="Add-Header">
          <Modal.Title>Add New Customer Details</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="row g-3">
              {/* Employee Id */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Employee ID *</Form.Label>
                <Form.Control
                  className="first-Control"
                  type="text"
                  placeholder="Employee ID"
                  name="emp_id"
                  value={state.emp_id}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {/* Employee Name */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Employee Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Employee Name"
                  name="emp_name"
                  value={state.emp_name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Gender */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Gender</Form.Label>
                <Form.Select name="gender" onChange={handleInputChange}>
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Form.Select>
              </Form.Group>
              {/* Department */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Department</Form.Label>
                <Form.Select name="department" onChange={handleInputChange}>
                  <option>Choose...</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Sales</option>
                  <option>HR</option>
                </Form.Select>
              </Form.Group>
              {/* Designation */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Designation</Form.Label>
                <Form.Select name="designation" onChange={handleInputChange}>
                  <option>Choose...</option>
                  <option>Manager</option>
                  <option>Excutive</option>
                  <option>Sr.Excutive</option>
                  <option>Clerk</option>
                </Form.Select>
              </Form.Group>
              {/* Date Of Birth */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={state.dob}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {/* Date of Joining */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Date of Joining</Form.Label>
                <Form.Control
                  type="date"
                  name="doj"
                  placeholder="Date of Joining"
                  value={state.doj}
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
            {/* TosatyContainer Usage Start*/}
            {/* <ToastContainer></ToastContainer> */}
            {/* TosatyContainer Usage End*/}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddCustomer;
