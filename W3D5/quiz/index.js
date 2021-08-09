const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
var list = [];

app.get("/", (req, res) => {
  let html = "<ul>";
  for (let i = 0; i < list.length; i++) {
    html = html + `<li>${list[i]}</li>`;
  }
  html = html + "</ul><a href='/add'>Add</a>";
  res.send(html);
});

app.get("/add", (req, res) => {
  res.send(`<form method="POST" action="/add-item"><input type="text" name="item"/>
    <input type="submit" value="Add"/></form>`);
});

app.post("/add-item", (req, res) => {
  list.push(req.body.item);
  res.redirect("/");
});

app.listen(3000);
