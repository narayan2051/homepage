const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "sehfihiew89234hjwhfki32", resave: true }));

app.use((req, res, next) => {
  if (!req.session.itemlist) {
    req.session.itemlist = [];
  }
  next();
});

app.get("/", (req, res) => {
  res.render("homepage", { list: req.session.itemlist });
});

app.get("/add", (req, res) => {
  res.render("form");
});

app.post("/add", (req, res) => {
  req.session.itemlist.push(req.body.item);
  res.redirect(303, "/");
});

app.listen(3000);
