//import
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

require("dotenv").config();
const songcontroller = require("./controller/song.controller");
const artistController = require("./controller/artist.controller");
const app = express();
const port = process.env.PORT;

//middleware
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/song", songcontroller);
app.use("/artist", artistController);

//server
const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listing to port " + port);
  });
};

module.exports = start;
