const mongoose = require("mongoose");

const itemsShema = mongoose.Schema({
  item_id: { type: String, uppercase: true, unique: true, required: true },
  item_description: { type: String },
  item_category: { type: String },
  item_value: { type: String },
  issue_status: { type: String },
  item_make: { type: String },
});

const Items = mongoose.model("items", itemsShema);
// ready to go!

module.exports = Items;
