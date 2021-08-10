const express = require("express");
const path = require("path");
const app = express();
const parseUrl = require("parseurl");
const session = require("express-session");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use(express.urlencoded({ extended: true }));
//session
app.use(
  session({ secret: "salt for cookie signing",
   saveUninitialized: true
  })
);

const getHour = () => {
  return new Date().getHours();
};

app.use((req, res, next) => {
  if (!req.session.userInfo) {
    req.session.userInfo = {};
  }
  next();
});

app.get("/", (req, res) => {
  res.render("form", {
    css: getHour() > 6 && getHour() < 18 ? "day.css" : "night.css",
  });
});

app.post("/result", (req, res) => {
  req.session.userInfo["name"] = req.body.name;
  req.session.userInfo["age"] = req.body.age;
  res.redirect(`/output`);
});

app.get("/output", (req, res) => {
  res.send(
    `The sumitted name is ${req.session.userInfo["name"]} and age is ${req.session.userInfo["age"]}`
  );
});

app.listen(3000);
