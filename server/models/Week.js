const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeekSchema = new Schema({
  userId: {
    type: mongoose.Schema.types.objectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  days: [
    {
      type: mongoose.Schema.types.objectId,
      required: true
    }
  ]
});

module.exports = Day = mongoose.model("Day", DaySchema);