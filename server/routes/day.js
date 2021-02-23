const express = require('express');
const router = express.Router();

const Day = require('../models/Day');

router.post("/", async (req, res) => {
  try {
    const day = new Day({
      name: req.body.name,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner
    });
    const newDay = await day.save();
    return res.status(200).json(newDay);
  } catch (err) {
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const days = await Day.findAll({});
    return res.status(200).json(days);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;