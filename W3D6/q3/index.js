const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "view"));
app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "public", "css")));

const productList = [
  {
    id: 1,
    name: "MacBook Pro",
    description: "MacBook Pro 13'' M1",
    price: 1200,
  },
  { id: 2, name: "Keyboard", description: "Keyboard Macally", price: 20 },
  { id: 3, name: "Mouse", description: "Mouse Azzor", price: 22 },
  { id: 4, name: "Laptop Cover", description: "Cover of Laptop", price: 17 },
  { id: 5, name: "Ethernet Cable", description: "Ethernet cable", price: 7 },
  { id: 6, name: "Monitor", description: "Monitor Dell", price: 150 },
  { id: 7, name: "VGA Cable", description: "VGA Cable", price: 20 },
  { id: 8, name: "Type C Convertor", description: "Convertor", price: 10 },
];

app.get("/", (req, res) => {
  res.render("product", { products: productList, css: "product.css" });
});

app.post("/addToCart/", (req, res) => {
  console.log(req.body.id);
  res.redirect(303, "/");
});

app.listen(3000, () => {
  console.log("Server is running at 3000 port.");
});
