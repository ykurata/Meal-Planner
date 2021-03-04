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
router.get("/all", (req, res) => {
  Week.find({})
    .populate({path: "days", populate: {
      path: "_id",
      model: "Day"
    }})
    .exec(function (err, weeks) {
      if (err) return next(err);
      res.json(weeks);
    });
});


// Find a week by id and put(update) days. 
router.put("/update/:id", async (req, res) => {
  try {
    const week = await Week.findOne({ _id: req.params.id});
    week.days.push(req.body.days);
    const updatedWeek = await week.save();
    return res.status(200).json(updatedWeek);
  } catch (err) {
    console.log(err);
  }
});


// Find a week by week id
router.get("/get/:id",(req, res) => {
  Week.findOne({_id: req.params.id})
    .populate({path: "days", populate: {
      path: "_id",
      model: "Day"
    }})
    .exec(function (err, week) {
      if (err) return next(err);
      res.json(week);
    });
});

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