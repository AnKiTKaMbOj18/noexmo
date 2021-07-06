require("../src/db/mongoose");
const Task = require("../src/models/task");

// 60e35ceb398ca183decd1174

Task.findByIdAndDelete("60e35ceb398ca183decd1174")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
