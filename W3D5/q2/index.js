const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    `<form method="POST" action="/result">
        <label> Name</label>
        <input type="text" name="name"/>
        <label> Age</label>
        <input type="text" name="age"/>
        <input type="submit" id="submit" value="Submit Query"/>
    </form>`
  );
});
app.post("/result", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.age);
  res.send(`The sumitted name is ${req.body.name} and age is ${req.body.age}`);
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
