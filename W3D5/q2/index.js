const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));


app.get("/", getLastName, (req, res) => {
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
  res.send(`The sumitted name is ${req.body.name} and age is ${req.body.age}`);
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});
