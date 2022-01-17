const mongoose = require("mongoose");

const artistSchama = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const Artist = mongoose.model("artists", artistSchama);

module.exports = Artist;
