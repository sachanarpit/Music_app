const express = require("express");
const axios = require("axios");

const Artist = require("../model/artist.model");

const router = express.Router();

async function fetchData(name) {
  const response = await axios.get(`https://saavn.me/search?album=${name}`);
  return response.data;
}

//signup

router.post("/signup", async (req, res) => {
  try {
    let data = req.body;
    let ans = await Artist.create(data);
    res.status(201).send(ans);
  } catch (err) {
    res.status(500).send(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    let data = req.body;
    let user = await Artist.find({
      email: data.email,
      password: data.password,
    })
      .lean()
      .exec();
    if (!user) {
      res.status(402).send("email /password is incorrect");
    } else {
      res.status(200).send(user[0]._id);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//get user
router.get("/get", async (req, res) => {
  try {
    let id = req.query.id;
    let user = await Artist.find({ _id: id }).lean().exec();
    let fetchDa = await fetchData(user[0].name);
    let newData = [...user, { output: [...fetchDa] }];
    res.status(200).send(newData);
  } catch (e) {
    res.status(500).send(err);
  }
});

module.exports = router;
