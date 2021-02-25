const express = require('express');
const { rawListeners } = require('../app');
const router = express.Router();

const Week = require('../models/Week');

router.post("/", async (req, res) => {
  try {
    const week = new Week({
      name: req.body.name,
      days: req.body.days
    });
    const newWeek = await week.save();
    return res.status(200).json(newWeek);
  } catch (err) {
    console.log(err);
  }
});
  
router.get("/all", async (req, res) => {
  try {
    const weeks = await Week.find({});
    return res.status(200).json(weeks);
  } catch (err) {
    console.log(err);
  }
});


// Create week first and put(update) days. 


// Find a week by week id
router.get("/get/:id", async (req, res) => {
  try {
    const week = await Week.findOne({ _id: req.params.id});
    return res.status(200).json(week);
  } catch (err) {
    console.log(err);
  }
})

// Delete week
router.delete("/delete/:id", async (req, res) => {
  try {
    const week = await Week.findOne({ _id: req.params.id});
    await week.remove();
    return res.status(200).json({ "message": "Succeccfully deleted"});
  } catch (err) {
    console.log(err);
  }
});
  
  module.exports = router;