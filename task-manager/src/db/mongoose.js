const mongoose = require("mongoose");
const validator = require("validator");
require("dotenv").config();

const connectionURL = process.env.CONNECTION_URL_M;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number!");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const myUser = new User({
  name: "  Luke  ",
  // age: 22,
  email: "LUKE@test.com  ",
});

myUser
  .save()
  .then(() => {
    console.log(myUser);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// const myTask = new Task({
//   description: "Task 1",
//   completed: true,
// });

// myTask
//   .save()
//   .then(() => {
//     console.log(myTask);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });
