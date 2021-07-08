const express = require("express");
const User = require("../models/user");

const router = new express.Router();

// router.get("/test", (req, res) => {
//   res.send("this is from my other router!");
// });

router.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/users/:id", async (req, res) => {
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

router.patch("/users/:id", async (req, res) => {
  const allowedList = ["name", "email", "password", "age"];
  const updateData = Object.keys(req.body);

  const isValidUpdateEntry = updateData.every((update) =>
    allowedList.includes(update)
  );

  if (!isValidUpdateEntry) {
    return res.status(400).send({ error: "Invalid keys for update!" });
  }

  try {
    const user = await User.findById(req.params.id);

    updateData.forEach((update) => {
      user[update] = req.body[update];
    });

    await user.save();

    // const user = await User.findByIdAndUpdate(
    //   { _id: req.params.id },
    //   req.body,
    //   { new: true, runValidators: true }
    // );
    if (!user) {
      return res.status(404).send();
    }
    return res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  console.log(req.params);
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).send();
    }
    return res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
