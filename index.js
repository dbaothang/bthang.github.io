const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/product-test");

const Products = mongoose.model("Products", {
  tiltle: String,
  price: Number,
  thumnail: String,
});

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("index", { title: "trang chu", message: "Hello there!" });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "trang lien he",
    message: "xin chao cac ban",
  });
});

app.get("/product", async (req, res) => {
  const products = await Products.find({});
  console.log(products);
  res.render("products", {
    title: "trang hang hoa",
    products: products,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
