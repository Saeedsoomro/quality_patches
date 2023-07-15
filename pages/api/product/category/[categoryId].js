import Product from "@/models/product";
import db from "@/utils/db";

export default async function handler(req, res) {
  const { categoryId } = req.query;
  try {
    await db.connect();
    const products = await Product.find({ category: categoryId });
    await db.disconnect();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Error retrieving products" });
  }
}
