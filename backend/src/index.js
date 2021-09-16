require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const app = express();
const youtubeRouter = require("./routers/youtube");

app.use(express.json());
app.use(cors());
app.use("/api/youtube", youtubeRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
