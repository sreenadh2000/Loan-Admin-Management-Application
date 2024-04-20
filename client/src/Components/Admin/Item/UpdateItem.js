import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
// Toastify Usage imports
import { toast } from "react-toastify";

function UpdateItem({ tdItemData }) {
  const [itemDescription, setItemDescription] = useState(
    tdItemData.item_description
  );
  const [itemMake, setItemMake] = useState(tdItemData.item_make);
  const [itemCategory, setItemCategory] = useState(tdItemData.item_category);
  const [itemValue, setItemValue] = useState(tdItemData.item_value);
  const [issueStatus, setIssueStatus] = useState(tdItemData.issue_status);
  // useEffect(() => {
  //   console.log(loanId);
  // }, [loanId, loanType, duration]);
  const AddEditItemData = (data) => {
    axios
      .put("http://localhost:5000/item/" + data.item_id, { ...data })
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
      item_id: tdItemData.item_id,
      item_description: itemDescription,
      item_category: itemCategory,
      item_value: itemValue,
      issue_status: issueStatus,
      item_make: itemMake,
    };
    AddEditItemData(editData);
  };
  //////////////////////////// return Section //////////////////////
  return (
    <>
      <Modal.Body>
        <div className="row g-3">
          {/* Item Id */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Item ID *</Form.Label>
            <Form.Control
              className="first-Control"
              type="text"
              name="item_id"
              value={tdItemData.item_id}
              readOnly
            />
          </Form.Group>
          {/* Item Category */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Item Category</Form.Label>
            <Form.Select
              name="item_category"
              value={itemCategory}
              onChange={(e) => {
                setItemCategory(e.target.value);
              }}
            >
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
              value={itemDescription}
              onChange={(e) => {
                setItemDescription(e.target.value);
              }}
            />
          </Form.Group>
          {/* Item Value */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Item Value</Form.Label>
            <Form.Control
              type="number"
              name="item_value"
              placeholder="Item Value"
              value={itemValue}
              onChange={(e) => {
                setItemValue(e.target.value);
              }}
            />
          </Form.Group>
          {/* Issue Status */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Issue Status</Form.Label>
            <Form.Select
              name="issue_status"
              value={issueStatus}
              onChange={(e) => {
                setIssueStatus(e.target.value);
              }}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Select>
          </Form.Group>
          {/* Item Make */}
          <Form.Group className="col-md-6 text-start">
            <Form.Label className="fw-bold">Item Make</Form.Label>
            <Form.Select
              name="item_make"
              value={itemMake}
              onChange={(e) => {
                setItemMake(e.target.value);
              }}
            >
              <option>Wooden</option>
              <option>Glass</option>
              <option>Plastic</option>
              <option>Steel</option>
            </Form.Select>
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

export default UpdateItem;
