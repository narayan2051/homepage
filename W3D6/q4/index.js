const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));
app.use("/css",express.static(path.join(__dirname, "public", "css")));
const shoppingCarts = [
  { name: "MacBook pro", price: 1200, quantity: 5 },
  { name: "Dell 3468", price: 600, quantity: 10 },
  { name: "keyboard", price: 60, quantity: 20 },
];

app.get("/", (req, res) => {
  res.render("shoppingcart", { cartList: shoppingCarts, css:"shoppingcart.css" });
});

app.listen(3000, () => {
  console.log("Server is running at 3000 port");
});
