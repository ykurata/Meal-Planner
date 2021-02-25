const express = require('express');
const router = express.Router();

const Week = require('../models/Week');

router.post("/", async (req, res) => {
  try {
    const week = new Week({
      name: req.body.name,
      days: req.body.days
    });
    const newWeek = await WeakSet.save();
    return res.status(200).json(newWeek);
  } catch (err) {
    console.log(err);
  }
});
  
router.get("/all", async (req, res) => {
  try {
    const weeks = await Week.find({});
    return res.status(200).json(week);
  } catch (err) {
    console.log(err);
  }
});
  
  module.exports = router;