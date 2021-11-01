require("dotenv").config({ path: "./config.env" });
const fetch = require("node-fetch");

exports.searchVideos = async (req, res) => {
  const searchtext = req.params.searchtext;
  const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchtext}&part=snippet&key=${process.env.YOUTUBE_API_KEY}&maxResults=50`;

  try {
    const videosInfo = await fetch(url);
    const videosJson = await videosInfo.json();
    console.log(videosInfo);
    res.json(videosJson);
  } catch (err) {
    console.log("err: ", err.stack);
  }
};
