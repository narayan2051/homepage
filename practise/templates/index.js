const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "views"));

app.get("/",(req, res)=>{
    res.render('login')
})

app.listen(3000, () => {
  console.log("server running at port 3000");
});
