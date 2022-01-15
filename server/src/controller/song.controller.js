//import
const express = require("express");
const axios = require("axios");

const router = express.Router();

// const getReq = async (url) => {
//   try {
//     const data = await axios.get(url);
//     const jsonData = data.data;
//     return jsonData;
//   } catch (err) {
//     return err;
//   }
// };
// console.log(
//   getReq(`https://saavn.me
// /search?album=rockstar`)
// );

// //routes
// router.get("", async (req, res) => {
//   return res.status(200).send("hello");
// });

async function fetchData(name) {
  const response = await axios.get(`https://saavn.me/search?album=${name}`);
  return response.data;
}

router.get("/", async (req, res) => {
  try {
    const arrOfArtist = [
      "Badshah",
      "arijit",
      "pritam",
      "Vishal",
      "Shaan",
      "Jubin",
      "Jasleen",
      "Various Artists",
    ];

    const response1 = await fetchData(arrOfArtist[0]);
    const response2 = await fetchData(arrOfArtist[1]);
    const response3 = await fetchData(arrOfArtist[2]);
    const response4 = await fetchData(arrOfArtist[3]);
    const response5 = await fetchData(arrOfArtist[4]);
    const response6 = await fetchData(arrOfArtist[5]);
    const response7 = await fetchData(arrOfArtist[6]);
    let output = [
      { artist: arrOfArtist },
      {
        output: [
          ...response1,
          ...response2,
          ...response3,
          ...response4,
          ...response5,
          ...response6,
          ...response7,
        ],
      },
    ];
    res.status(200).json(output);
    console.log("succesfully req complete");
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
