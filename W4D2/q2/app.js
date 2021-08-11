const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use("/js", express.static(path.join(__dirname, "view", "js")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const answer = [
  "It is Certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/8ball", (req, res) => {
  res.send(answer[Math.floor(Math.random() * answer.length)]);
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
