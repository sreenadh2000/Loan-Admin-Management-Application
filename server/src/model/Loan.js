const mongoose = require("mongoose");

const loanShema = mongoose.Schema({
  loan_id: { type: String, uppercase: true, unique: true, required: true },
  loan_type: { type: String },
  duration: { type: Number },
});

const loan = mongoose.model("loan", loanShema);
// ready to go!

module.exports = loan;
