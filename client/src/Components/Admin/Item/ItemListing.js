import EditIcon from "../../../Images/pencil-simple-line-fill.svg";
import DeleteIcon from "../../../Images/trash-fill.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";
import AddItems from "./AddItems";
import UpdateItem from "./UpdateItem";

function ItemListing() {
  ////// Edit Model Show ////////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /////////////// End Edit Model Show ////////
  const [itemData, setItemData] = useState([]);
  const [editItem, setEditItem] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/item")
      .then((res) => {
        setItemData(res.data);
      })
      .catch((err) => console.log(err));
  }, [itemData]);
  ////////////////////////// Delete Button Handler///////////////////
  const deleteHandler = (id) => {
    axios
      .delete("http://localhost:5000/item/" + id)
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
      <AddItems />
      <table className="table">
        <thead>
          <tr className="tr-Head">
            <th>S.no</th>
            <th>Item ID</th>
            <th>Item Description</th>
            <th>Issue Status</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemData.map((Item, index) => {
            return (
              <tr key={Item.item_id}>
                <td>{index + 1}</td>
                <td>{Item.item_id}</td>
                <td>{Item.item_description}</td>
                <td>{Item.issue_status}</td>
                <td>{Item.item_make}</td>
                <td>{Item.item_category}</td>
                <td>{Item.item_value}</td>

                <td className="actions">
                  <Button
                    variant=""
                    className="btn-edit"
                    onClick={() => {
                      handleShow();
                      setEditItem(Item);
                    }}
                  >
                    <img src={EditIcon} alt="Edit-Icon" className="icons" />
                  </Button>

                  <Button
                    variant=""
                    className="btn-dlt"
                    onClick={() => deleteHandler(Item.item_id)}
                  >
                    <img src={DeleteIcon} alt="delete-Icon" className="icons" />
                  </Button>
                </td>
                <Modal size="lg" show={show} onHide={handleClose}>
                  <Modal.Header closeButton className="Add-Header">
                    <Modal.Title>Edit Item Details</Modal.Title>
                  </Modal.Header>
                  {/* Edit Details */}
                  <UpdateItem tdItemData={editItem} />
                </Modal>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemListing;
