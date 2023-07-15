const mongoose = require("mongoose");

// Define the category schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add more fields as needed for your category
});

// Create the Category model
const ProductCategory =
  mongoose.models.ProductCategory ||
  mongoose.model("ProductCategory", categorySchema);
export default ProductCategory;
