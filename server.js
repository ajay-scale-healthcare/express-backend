const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"), (err) => {
    console.trace("error serving the file", err);
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
