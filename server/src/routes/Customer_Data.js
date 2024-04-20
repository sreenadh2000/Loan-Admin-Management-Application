const express = require("express");
const router = express.Router();
const Customer = require("../model/Customer.js"); // getting the model Schema

// get all the customer Data
router.get("/", async (req, res) => {
  try {
    const posts = await Customer.find();
    res.send(posts);
  } catch (e) {
    res.json({ message: e });
  }
});

// post Customer Details
router.post("/", async (req, res) => {
  //   const customer = new Customer({
  //     employee_id: req.body.employee_id,
  //     employee_name: req.body.employee_name,
  //     designation: req.body.designation,
  //     department: req.body.department,
  //     gender: req.body.gender,
  //     date_of_birth: req.body.date_of_birth,
  //     date_of_joining: req.body.date_of_joining,
  //   });
  //   customer
  //     .save()
  //     .then((data) => {
  //       res.json(data);
  //       console.log("Inserted Successfully");
  //     })
  //     .catch((e) => {
  //       res.json({ message: e });
  //     });
  // });

  const data = {
    employee_id: req.body.emp_id,
    employee_name: req.body.emp_name,
    designation: req.body.designation,
    department: req.body.department,
    gender: req.body.gender,
    date_of_birth: req.body.dob,
    date_of_joining: req.body.doj,
  };
  try {
    const customer = await Customer.create(data);
    res.send(data);
  } catch (error) {
    res.send("Error: " + error);
  }
});
// find the Customed details by id
router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findOne({ employee_id: req.params.id });
    res.send(customer);
  } catch (error) {
    res.send("Error: " + error);
  }
});

// //// Delete By Using Customer_ID
router.delete("/:customerID", async (req, res) => {
  try {
    await Customer.deleteOne({
      employee_id: req.params.customerID,
    });
    res.send("Successfully deleted ");
  } catch (error) {
    console.log("Error: " + error);
  }
});

// //// Update the customer Data by using Employee ID
router.put("/:customerID", async (req, res) => {
  const customerID = req.params.customerID;

  await Customer.updateOne({ employee_id: customerID }, req.body);

  res.send("Updated Successfully");
});
// export default router;
module.exports = router;
