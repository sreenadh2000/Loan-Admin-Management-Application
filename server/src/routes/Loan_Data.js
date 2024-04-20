const express = require("express");
const router = express.Router();
const Loan = require("../model/Loan"); // importing loan model
// get all the customer Data
router.get("/", async (req, res) => {
  try {
    const posts = await Loan.find();
    res.send(posts);
  } catch (e) {
    res.json({ message: e });
  }
});
////// post the Data
router.post("/", async (req, res) => {
  const data = {
    loan_id: req.body.loan_id,
    loan_type: req.body.loan_type,
    duration: req.body.duration,
  };
  try {
    const loan = await Loan.create(data);
    res.send(data);
  } catch (error) {
    res.send("Error: " + error);
  }
});
/////// get the data by PostId
router.get("/:id", (req, res) => {
  res.send(req.params);
});

// //// Delete By Using Customer_ID
router.delete("/:loanID", async (req, res) => {
  try {
    await Loan.deleteOne({
      loan_id: req.params.loanID,
    });
    res.send("Successfully deleted ");
  } catch (error) {
    console.log("Error: " + error);
  }
});
// //// Update the customer Data by using Employee ID
router.put("/:loanID", async (req, res) => {
  const loanID = req.params.loanID;
  try {
    await Loan.updateOne({ loan_id: loanID }, req.body);
    res.send("Updated Successfully");
  } catch (error) {
    console.log("Error: " + error);
  }
});
// export default router;
module.exports = router;
