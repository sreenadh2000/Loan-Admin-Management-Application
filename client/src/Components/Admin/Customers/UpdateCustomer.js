import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

// Toastify Usage imports
import { toast } from "react-toastify";

function EditForm({ tdEmpData }) {
  const getDate = (d) => {
    const date = d.slice(0, 10);
    return date;
  };

  const [empName, setEmpName] = useState(tdEmpData.employee_name);
  const [empGender, setEmpGender] = useState(tdEmpData.gender);
  const [empDesignation, setEmpDesignation] = useState(tdEmpData.designation);
  const [empDepartment, setEmpDepartment] = useState(tdEmpData.department);
  const [empDOB, setEmpDOB] = useState(getDate(tdEmpData.date_of_birth));
  const [empDOJ, setEmpDOJ] = useState(getDate(tdEmpData.date_of_joining));

  const AddEditCustomerData = (data) => {
    axios
      .put("http://localhost:5000/customer/" + data.emp_id, { ...data })
      .then((res) => {
        console.log(res.data);
        toast.info("Successfully Edited", { theme: "colored" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hadleEditSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    const initialEditState = {
      emp_id: tdEmpData.employee_id,
      emp_name: empName,
      gender: empGender,
      department: empDepartment,
      designation: empDesignation,
      dob: empDOB,
      doj: empDOJ,
    };
    AddEditCustomerData(initialEditState);
  };

  return (
    <Form onSubmit={hadleEditSubmit}>
      <Modal.Body>
        <div className="row g-3">
          {/* Employee Id */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Employee ID *</Form.Label>
            <Form.Control
              className="first-Control"
              type="text"
              placeholder="Employee ID"
              value={tdEmpData.employee_id}
              readOnly
            />
          </Form.Group>
          {/* Employee Name */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Employee Name"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
            />
          </Form.Group>
          {/* Gender */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Gender</Form.Label>
            <Form.Select
              name="gender"
              value={empGender}
              onChange={(e) => setEmpGender(e.target.value)}
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </Form.Select>
          </Form.Group>
          {/* Department */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Department</Form.Label>
            <Form.Select
              name="department"
              value={empDepartment}
              onChange={(e) => setEmpDepartment(e.target.value)}
            >
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
            <Form.Select
              name="designation"
              value={empDesignation}
              onChange={(e) => setEmpDesignation(e.target.value)}
            >
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
              value={empDOB}
              onChange={(e) => setEmpDOB(e.target.value)}
            />
          </Form.Group>
          {/* Date of Joining */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Date of Joining</Form.Label>
            <Form.Control
              type="date"
              name="doj"
              placeholder="Date of Joining"
              value={empDOJ}
              onChange={(e) => setEmpDOJ(e.target.value)}
            />
          </Form.Group>
        </div>
      </Modal.Body>
      <Modal.Footer className="Footer">
        <Button type="reset" variant="secondary">
          Reset
        </Button>
        <Button type="submit" className="lastButton">
          Save Changes
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default EditForm;
