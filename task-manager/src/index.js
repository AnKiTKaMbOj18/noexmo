const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/userRouter");
const taskRouter = require("./routers/taskRouter");

const app = express();
const port = process.env.PORT || 3000;

// middleware

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

// app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

// without middleware : new request -> new route handler
//
// with middleware: new request -> do something -> run new handler

app.listen(port, () => {
  console.log("Server is up n running on port " + port);
});

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
