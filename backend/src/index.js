require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const youtubeRouter = require("./routers/youtube");

app.use(express.json());
app.use(cors());
app.use("/api/youtube", youtubeRouter);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../../client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
