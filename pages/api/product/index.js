import Product from "@/models/product";
import db from "@/utils/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    db.connect();
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    if (product) {
      db.disconnect();
      return res
        .status(200)
        .json({ message: "Prodcut created successfully !", product });
    }
    db.disconnect();
    return;
  }
  if (req.method == "GET") {
    db.connect();
    const products = await Product.find({});
    if (products) {
      db.disconnect();
      return res.status(200).json(products);
    }
    db.disconnect();
    return;
  }
  res.status(200).json({ name: "John Doe" });
  return;
}
