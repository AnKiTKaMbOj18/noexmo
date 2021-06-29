const path = require("path");
const express = require("express");

const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

const publicDirPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("/hbs", (req, res) => {
  res.render("index");
});

// app.get("", (req, res) => {
//   res.send("Hello Express!");
// });

// app.get("/help", (req, res) => {
//   res.send("<h1>Help Page!</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send({
//     name: "test",
//     location: "undefined",
//   });
// });

app.get("/contact", (req, res) => {
  res.send("Contact page!");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
