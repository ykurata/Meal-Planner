const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeekSchema = new Schema({
  // userId: {
  //   type: mongoose.Schema.types.objectId,
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  days:[
    {
      day: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Day",
      }
    }
  ]
});

module.exports = Week = mongoose.model("Week", WeekSchema);