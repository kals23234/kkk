const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public")); // optional if you serve frontend files

app.get("/", (req, res) => {
  res.send("MaxMind is working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
