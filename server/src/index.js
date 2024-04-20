const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const AdminLogModel = require("./model/AdminLog");

const CustomerRoutes = require("./routes/Customer_Data.js"); /// import the routes
const loanRoutes = require("./routes/Loan_Data.js"); // import the route
const itemsRoute = require("./routes/Items_Data.js"); // import the route

const dotEnv = require("dotenv");
//////////////////////////////////////////////////////////////////////
/////////////////////// . env file grabbing and Usage /////////////////
///////////////////////////////////////////////////////////////////////
let dotenv = dotEnv.config();
const app = express();
const port = 5000;
/////////////////////////////////////////////////////////////////////////
//////////////////////// Express Usage //////////////////////////////////
/////////////////////////////////////////////////////////////////////////

/// middlewares
app.use(bodyParser.json());
app.use(cors());
/////////////////////////////////////////////////////////////////////////
//////////////////////// Mongoose Connection //////////////////////////////////
/////////////////////////////////////////////////////////////////////////
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_CONNECTION, options).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    console.log("Connected Mogo Atlash");
  },
  (err) => {
    console.log("Error: " + err);
  }
);

/////////////////////////////////////////////////////////////////////////
//////////////////////// Routes of Pages //////////////////////////////////
/////////////////////////////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("Home Page");
});

////////////////// HAndling the "./CustomerRoutes" ///////////////////////////////
app.use("/customer", CustomerRoutes);
app.use("/loan", loanRoutes); // Fetched the Loan route
app.use("/item", itemsRoute); /// Fetched the Item Route
//////////////////// Admin Log Credentials Getting ////////////////
app.get("/adminLog", async (req, res) => {
  try {
    const admin = await AdminLogModel.find();
    res.send(admin);
  } catch (error) {
    console.log("Err" + error);
  }
});
///////////////////////////////// listening Port ////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.post("/adminLog", async (req, res) => {
//   const data = { admin_id: req.body.admin_id, password: req.body.password };
//   try {
//     const admin = await AdminLogModel.create(data);
//     res.send(admin);
//   } catch (error) {
//     console.log(error);
//   }
// });
