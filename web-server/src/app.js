const path = require("path");
const express = require("express");

const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));

// define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

// Setup handlebars engine and views location.
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get("/hbs", (req, res) => {
  res.render("index", {
    title: "Weather App",
    description: "Home page for weather app",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    description: "About Page for weather app",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    description: "Help page content!",
  });
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
