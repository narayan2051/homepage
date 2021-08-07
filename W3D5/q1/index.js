const express = require("express");
const app = express();
app.get("/", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) {
    name = "person";
  }
  res.send(`Welcome ${name} and your age is ${age ? age : 0}`);
});
app.listen(3000);
