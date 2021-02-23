const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  // userId: {
  //   type: mongoose.Schema.types.objectId,
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  breakfast: [{
    item: {
      type: String,
    }
  }],
  lunch: [{
    item: {
      type: String
    }
  }],
  dinner: [{
    item: {
      type: String
    } 
  }]
});

module.exports = Day = mongoose.model("Day", DaySchema);