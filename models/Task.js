const mongoose = require("mongoose");

const taskModel = mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
});

const Task = mongoose.model("Tasks", taskModel);

module.exports = Task;
