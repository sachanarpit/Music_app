const mongoose = require("mongoose");

const artistSchama = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
});

const Artist = mongoose.model("artists", artistSchama);

module.exports = Artist;
