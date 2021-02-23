const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const dayRoute = require('./routes/day'); 

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Routes
app.use('/day', dayRoute); 

// Set up mondoDB connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/meal-planner",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", function (err) {
  console.error("connection error:", err);
});

db.once("open", function () {
  console.log("db connection successful");
});

app.use("/", (req, res) => {
  return res.json("Hello");
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

module.exports = app;
