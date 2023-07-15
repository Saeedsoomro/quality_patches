import ProductCategory from "@/models/productCategory";
import db from "@/utils/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { name } = req.body;
    await db.connect();
    const existingCategory = await ProductCategory.findOne({ name });
    if (existingCategory) {
      await db.disconnect();
      return res.status(409).send({ message: "category is already existed" });
    }
    const newCategory = new ProductCategory({
      name,
    });

    const category = await newCategory.save();
    await db.disconnect();
    res.status(201).send({
      message: "Created category!",
      category,
    });
    return;
  }
  if (req.method == "GET") {
    await db.connect();
    const categories = await ProductCategory.find({});
    if (categories) {
      await db.disconnect();
      return res.status(200).send(categories);
    }
  }
}
