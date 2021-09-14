require("dotenv").config({ path: "./config.env" });

exports.searchVideos = async (req, res) => {
  const searchTerm = req.params.searchtext;
  const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${process.env.YOUTUBE_API_KEY}`;
  console.log(url);

  try {
    const res = await fetch(url);
    console.log(res);
  } catch (err) {
    res.json(err);
  }
};
