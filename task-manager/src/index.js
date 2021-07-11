const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/userRouter");
const taskRouter = require("./routers/taskRouter");

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up n running on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("60eab4ddab943294a8c36b10");
//   // const user = await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("60eaae5a6a67728aedde4f6c");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();

// middleware
// without middleware : new request -> new route handler
//
// with middleware: new request -> do something -> run new handler

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET request are disabled!");
//   } else {
//     next();
//   }
//   // console.log(req.method, req.path);
//   // next();
// });

// middleware for maintainance
// app.use((req, res, next) => {
//     res.status(503).send("Website is under maintainance, please try after sometime!");
//   // console.log(req.method, req.path);
//   // next();
// });

// demo example for toJSON function
// toJSON function gets called when we do JSON.stringify on any object
// In express as well when we send response back it first calls JSON.stringfy internally
// on the return object and calls toJSON method.

// const pet = {
//   name: "jim"
// }
// pet.toJSON=function() {
//   console.log(this);
//   return {};
// }
// console.log(JSON.stringify(pet));

// testing jwt token functionality
// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const authToken =jwt.sign({ _id: "abc123!" },"thisismynewsecret",{expiresIn: '7 days'});
//   console.log(authToken);

//   const verifiedToken = jwt.verify(authToken,"thisismynewsecret");
//   console.log(verifiedToken);
// };

// myFunction();

// testing bcrypt hash functionality
// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "test12345!";

//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch);
// };

// myFunction();
