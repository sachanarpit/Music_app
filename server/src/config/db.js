const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://arpit:arpit987@cluster0.fcpui.mongodb.net/musicApp?retryWrites=true&w=majority`
  );
};

module.exports = connect;
