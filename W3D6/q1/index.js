const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));
app.use("/css", express.static(path.join(__dirname, "public", "css")));

app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", {
    css: date.getHours() > 6 && date.getHours() < 18 ? "day.css" : "night.css",
    time: date.toTimeString(),
  });
});

app.listen(3000);
