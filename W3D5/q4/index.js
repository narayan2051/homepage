const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "css")));

const getHour = () => {
  const date = new Date();
  return date.getHours();
};
app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8"/>
    <link href="css/${
      getHour() > 6 && getHour() < 18 ? "day.css" : "night.css"
    }" rel="stylesheet"/>
    <title> Form </title>
    </head>
    <form method="POST" action="/output">
        <label> Name</label>
        <input type="text" name="name"/>
        <label> Age</label>
        <input type="text" name="age"/>
        <input type="submit" id="submit" value="Submit Query"/>
    </form>
    </html>`
  );
});
app.post("/output", (req, res) => {
  res.send(`The sumitted name is ${req.body.name} and age is ${req.body.age}`);
});

app.get("/output", (req, res) => {
  res.send(`The sumitted name is ${req.query.name} and age is ${req.query.age}`);
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
