import Product from "@/models/product";
import db from "@/utils/db";

export default async function handler(req, res) {
  const { productId } = req.query;
  if (req.method == "GET") {
    db.connect();
    const product = await Product.findById(productId);
    if (product) {
      db.disconnect();
      return res.status(200).json(product);
    }
    db.disconnect();
    return;
  }
  if (req.method == "DELETE") {
    db.connect();
    const product = await Product.findByIdAndDelete(productId);
    db.disconnect();
    return res.status(200).send({ message: "Product has been deleted" });
  }
  res.status(200).json({ name: "John Doe" });
  return;
}
