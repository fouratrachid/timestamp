// init project
var express = require("express");
var app = express();
const port = process.env.PORT || 8080;

//  first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});
// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api", (req, res) => {
  let date = new Date();

  let result = {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };
  console.log(result);
  res.send(result);
});

app.get("/api/:time", (req, res) => {
  let time = req.params.time;
  console.log(time);
  let result = {};
  if (!/[-]/.test(time) && Number(time)) {
    let date = new Date(Number(time));
    result = {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
  } else if (!Date.parse(time) && !Number(time)) {
    result = { error: "Invalid Date" };
  } else {
    let date = new Date(time);
    result = {
      unix: date.getTime(),
      utc: date.toUTCString(),
    };
  }
  console.log(result);
  res.send(result);
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
