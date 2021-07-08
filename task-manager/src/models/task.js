const mongoose = require("mongoose");
const validator = require("validator");

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

taskSchema.pre("save", async function (next) {
  const task = this;

  console.log("from task schema middleware!");

  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
