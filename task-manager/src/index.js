const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users/:id", async (req, res) => {
  console.log(req.params);
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      return res.status(404).send();
    }
    return res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/tasks", async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);

  try {
    const result = await task.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/tasks/:id", async (req, res) => {
  console.log(req.params);

  try {
    const task = await Task.findById({ _id: req.params.id });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log("Server is up n running on port " + port);
});
