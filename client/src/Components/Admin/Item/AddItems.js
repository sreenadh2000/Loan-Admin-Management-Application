import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

function AddItems() {
  ////////////// Add Model Show ////////////////////
  const [addShow, setAddShow] = useState(false);
  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);
  /////////////// End Add Model Show ////////
  const initialState = {
    item_id: "",
    item_description: "",
    item_category: "",
    item_value: "",
    issue_status: "",
    item_make: "",
  };

  const [state, setState] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const addItemToServer = (data) => {
    axios
      .post("http://localhost:5000/item", data)
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

    addItemToServer(state);
  };
  ///////////////////////////// retuen Statement ////////////////////////
  return (
    <>
      <Button className="btn Sucess-but mb-3" onClick={handleAddShow}>
        Add New Item +
      </Button>

      <Modal size="xl" show={addShow} onHide={handleAddClose}>
        <Modal.Header closeButton className="Add-Header">
          <Modal.Title>Add New Item Details</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="row g-3">
              {/* Item Id */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Item ID *</Form.Label>
                <Form.Control
                  className="first-Control"
                  type="text"
                  placeholder="Item ID"
                  name="item_id"
                  value={state.item_id}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {/* Item Category */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Item Category</Form.Label>
                <Form.Select name="item_category" onChange={handleInputChange}>
                  <option>Choose...</option>
                  <option>Furniture</option>
                  <option>Stationary</option>
                  <option>Crockery</option>
                </Form.Select>
              </Form.Group>
              {/* Item Description */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Item Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Item Description"
                  name="item_description"
                  value={state.item_description}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {/* Item Value */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Item Value</Form.Label>
                <Form.Control
                  type="number"
                  name="item_value"
                  placeholder="Item Value"
                  value={state.item_value}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {/* Issue Status */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Issue Status</Form.Label>
                <Form.Select name="issue_status" onChange={handleInputChange}>
                  <option>Choose...</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
              {/* Item Make */}
              <Form.Group className="col-md-6 text-start">
                <Form.Label className="fw-bold">Item Make</Form.Label>
                <Form.Select name="item_make" onChange={handleInputChange}>
                  <option>Choose...</option>
                  <option>Wooden</option>
                  <option>Glass</option>
                  <option>Plastic</option>
                  <option>Steel</option>
                </Form.Select>
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

export default AddItems;
