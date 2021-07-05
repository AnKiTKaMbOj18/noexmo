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
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      // const isValidPassword = validator.isStrongPassword(value, {
      //   minLength: 6,
      // });
      // if (!isValidPassword) {
      //   throw new Error("Password is not strong! ", isValidPassword);
      // }
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },
});

const Task = mongoose.model("Task", {
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

// const myUser = new User({
//   name: "  Alex  ",
//   age: 22,
//   email: "Alex@test.com  ",
//   password: "alex@test ",
// });

// myUser
//   .save()
//   .then(() => {
//     console.log(myUser);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// const myTask = new Task({
//   description: " Task 2 ",
// });

// myTask
//   .save()
//   .then(() => {
//     console.log(myTask);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });
