const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.listen(8080);
app.listen(8080, function() {
  // require("dns").lookup(require("os").hostname(), function(err, add, fam) {
  // document.getElementById("ip").innerHTML = add + ":8080";
  // });
});

module.exports = app;
