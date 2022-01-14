//import
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const songcontroller = require("./controller/song.controller");
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

//server
const start = () => {
  app.listen(port, () => {
    console.log("listing to port " + port);
  });
};

module.exports = start;
