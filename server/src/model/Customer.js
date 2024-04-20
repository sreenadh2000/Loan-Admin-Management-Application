const mongoose = require("mongoose");

const customerShema = mongoose.Schema({
  employee_id: { type: String, uppercase: true, unique: true, required: true },
  employee_name: { type: String },
  designation: { type: String },
  department: { type: String },
  gender: { type: String },
  date_of_birth: { type: Date },
  date_of_joining: { type: Date },
});

const Customer = mongoose.model("customer", customerShema);
// ready to go!

module.exports = Customer;
