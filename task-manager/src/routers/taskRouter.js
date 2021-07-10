const express = require("express");
const Task = require("../models/task");

const taskRouter = new express.Router();

taskRouter.post("/tasks", async (req, res) => {
  // console.log(req.body);
  const task = new Task(req.body);

  try {
    const result = await task.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

taskRouter.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

taskRouter.get("/tasks/:id", async (req, res) => {
  // console.log(req.params);

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

taskRouter.patch("/tasks/:id", async (req, res) => {
  const allowedList = ["completed", "description"];
  const updateData = Object.keys(req.body);

  const isValidUpdateEntry = updateData.every((update) =>
    allowedList.includes(update)
  );

  if (!isValidUpdateEntry) {
    return res.status(400).send({ error: "Invalid keys for update!" });
  }

  try {
    const task = await Task.findById(req.params.id);
    updateData.forEach((update) => {
      task[update] = req.body[update];
    });
    await task.save();
    // const task = await Task.findByIdAndUpdate(
    //   { _id: req.params.id },
    //   req.body,
    //   { new: true, runValidators: true }
    // );
    if (!task) {
      return res.status(404).send();
    }
    return res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

taskRouter.delete("/tasks/:id", async (req, res) => {
  // console.log(req.params);

  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = taskRouter;
