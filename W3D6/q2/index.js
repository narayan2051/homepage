const express = require("express");
const path = require("path");
const app = new express();
app.use(express.urlencoded({ extends: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));

app.get("/", (req, res) => {
  res.render("form");
});
app.post("/result", (req, res) => {
  res.render("output", {
    name: req.body.name,
    age: req.body.name,
  });
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
