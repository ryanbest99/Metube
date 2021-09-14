require("dotenv").config({ path: "./config.env" });
const express = require("express");
const router = new express.Router();
const fetch = require("node-fetch");

// const { searchVideos } = require("../controllers/youtube");
// router.route("/search/:searchtext").get(searchVideos);

router.get("/videos/:searchtext", async (req, res) => {
  const searchtext = req.params.searchtext;
  const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchtext}&part=snippet&key=${process.env.YOUTUBE_API_KEY}`;

  try {
    const videosInfo = await fetch(url);
    const videosJson = await videosInfo.json();
    console.log(videosInfo);
    res.json(videosJson);
  } catch (err) {
    console.log("err: ", err.stack);
  }
});

module.exports = router;
