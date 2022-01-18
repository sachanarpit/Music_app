const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(process.env.URI);
};

module.exports = connect;
