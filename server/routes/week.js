const express = require('express');
const { rawListeners } = require('../app');
const router = express.Router();

const Week = require('../models/Week');


// Create a new week
router.post("/", async (req, res) => {
  try {
    const week = new Week({
      name: req.body.name
    });
    const newWeek = await week.save();
    return res.status(200).json(newWeek);
  } catch (err) {
    console.log(err);
  }
});
  
// Get all weeks 
router.get("/all", async (req, res) => {
  try {
    const weeks = await Week.find({});
    return res.status(200).json(weeks);
  } catch (err) {
    console.log(err);
  }
});

// Find a week by id and put(update) days. 
router.put("/update/:id", async (req, res) => {
  try {
    const week = await Week.findOne({ _id: req.params.id});
    week.days.push({days: req.body.days});
    const updatedWeek = await week.save();
    return res.status(200).json(updatedWeek);
  } catch (err) {
    console.log(err);
  }
});


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