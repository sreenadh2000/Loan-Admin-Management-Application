const mongoose = require("mongoose");

const adminLogSchema = mongoose.Schema({
  admin_id: { type: String },
  password: { type: String },
});

const AdminLog = mongoose.model("adminLog", adminLogSchema);
// ready to go!

module.exports = AdminLog;
