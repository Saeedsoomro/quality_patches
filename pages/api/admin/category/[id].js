import ProductCategory from "@/models/productCategory";
import db from "@/utils/db";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    const { id } = req.query;
    await db.connect();
    const category = await ProductCategory.findOneAndDelete(id);
    if (!category) {
      await db.disconnect();
      return res.status(404).send({ message: "Category not found" });
    }
    return res.status(200).send({ message: "category deleted !" });
  }
  if (req.method == "UPDATE") {
    await db.connect();
    const categories = await ProductCategory.findByIdAndUpdate({});
    if (categories) {
      await db.disconnect();
      return res.status(200).send(categories);
    }
  }
}
