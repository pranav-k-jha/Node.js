const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi from an Express App");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
