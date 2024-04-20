const express = require("express");
const router = express.Router();
const Items = require("../model/Items"); // importing Item Model

/// Get the data
router.get("/", async (req, res) => {
  // res.send("Items Calling");
  try {
    const posts = await Items.find();
    res.send(posts);
  } catch (e) {
    res.json({ message: e });
  }
});
/// post the data
router.post("/", async (req, res) => {
  const data = {
    item_id: req.body.item_id,
    item_description: req.body.item_description,
    item_category: req.body.item_category,
    item_value: req.body.item_value,
    issue_status: req.body.issue_status,
    item_make: req.body.item_make,
  };

  try {
    const loan = await Items.create(data);
    res.send(data);
  } catch (error) {
    res.send("Error: " + error);
  }
});
/// get by item_ID
router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

//// delete by id
router.delete("/:itemID", async (req, res) => {
  try {
    await Items.deleteOne({
      item_id: req.params.itemID,
    });
    res.send("Successfully deleted ");
  } catch (error) {
    console.log("Error: " + error);
  }
});

// //// Update the customer Data by using Employee ID
router.put("/:itemID", async (req, res) => {
  const ItemId = req.params.itemID;
  try {
    await Items.updateOne({ item_id: ItemId }, req.body);
    res.send("Updated Successfully");
  } catch (error) {
    console.log("Error: " + error);
  }
});
module.exports = router;
