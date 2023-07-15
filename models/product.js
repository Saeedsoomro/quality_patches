const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  features: [{ type: String, required: true }],
  min_quantity: { type: String, required: true },
  countInStock: { type: Number, required: true },
  colors: [{ type: String, required: true }],
  dimensions: {
    min: [{ type: Number, required: true }],
    max: [{ type: Number, required: true }],
  },
  fabric: {
    fabric: { type: String, required: true },
    thread: { type: String, required: true },
  },
  production_time: { type: String, required: true },
  images: [{ type: String, required: true }],
});

// Create the Product model
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
