require("../src/db/mongoose");
const User = require("../src/models/user");

// 60e35ceb398ca183decd1174

User.findByIdAndUpdate("60e35ceb398ca183decd1174", { age: 10 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 10 });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
