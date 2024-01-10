const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("hello from middleware");
  next();
});

app.get("/", function (req, res) {
  res.send("Linkedin");
});

app.get("/profile", function (req, res) {
  res.send("Harsh Singh Mumbai");
});
app.listen(3000);
