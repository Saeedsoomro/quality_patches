import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import AdminLayout from "../adminLayout/adminLayout";
import { toast } from "react-toastify";
// import { CloudinaryContext, Image } from 'cloudinary-react';

const CreateProduct = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: "",
    countInStock: "",
    category: "",
    features: [],
    min_quantity: "",
    colors: ["red", "blue"],
    dimensions: {
      min: ["10", "15"],
      max: ["40", "80"],
    },
    fabric: {
      fabric: "cotton",
      thread: "cotton",
    },
    production_time: "",
    images: [],
  });

  useEffect(() => {
    // Fetch categories from the backend
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/admin/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const uploadImageToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "nzh3tsei");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/saeed123/image/upload",
        formData
      );

      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    const uploadedImages = [];

    for (const file of files) {
      const imageUrl = await uploadImageToCloudinary(file);
      console.log(imageUrl);
      uploadedImages.push(imageUrl);
    }

    setProduct((prevProduct) => ({
      ...prevProduct,
      images: [...prevProduct.images, ...uploadedImages],
    }));
    console.log(product);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Check if the field is nested (e.g., dimensions.min or fabric.fabric)
    const nestedField = value.split(",");

    if (nestedField.length > 1) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [nestedField[0]]: {
          ...prevProduct[nestedField[0]],
          [nestedField[1]]: value,
        },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
    console.log(product);
  };
  const handleFeaturesChange = (event) => {
    const { value } = event.target;
    let featuresValue = value;

    if (typeof value === "string") {
      featuresValue = value.split(",").map((item) => item.trim());
    }

    setProduct((prevProduct) => ({
      ...prevProduct,
      features: featuresValue,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform product submission or API call here
    onSubmit(product);
    // Reset the form
    setProduct({
      title: "",
      desc: "",
      price: "",
      countInStock: "",
      category: "",
      features: [],
      min_quantity: "",

      production_time: "",
      images: [],
    });
  };
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/product", data);
      if (res.status == 200) {
        toast.success("Product has been created!");
        router.push("/admin/products");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  // const handleImageUpload = (e) => {
  //   const files = Array.from(e.target.files);

  //   const formData = new FormData();
  //   files.forEach((file, index) => {
  //     formData.append(index, file);
  //   });

  //   axios
  //     .post("/api/upload", formData)
  //     .then((response) => {
  //       const uploadedImages = response.data.map((image) => image.url);
  //       setValue("images", uploadedImages);
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading images:", error);
  //     });
  // };

  return (
    <AdminLayout>
      <div className="max-w-full mx-auto mt-8 p-4 border border-gray-300 rounded">
        <h2 className="text-2xl font-bold mb-4">Create Product</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <label className="block mb-4">
            <span className="text-gray-700">Title:</span>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Description:</span>
            <textarea
              name="desc"
              value={product.desc}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Category:</span>
            <select
              name="category"
              onChange={handleChange}
              className="block py-2 w-full mt-1 border p-2  outline-none ring-indigo-300  focus:ring rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Price:</span>
            <textarea
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">countInStock:</span>
            <textarea
              name="countInStock"
              value={product.countInStock}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Features (comma-separated):</span>
            <input
              type="text"
              name="features"
              value={
                Array.isArray(product.features)
                  ? product.features.join(", ")
                  : ""
              }
              onChange={handleFeaturesChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Minimum Quantity:</span>
            <input
              type="text"
              name="min_quantity"
              value={product.min_quantity}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          {/* <label className="block mb-4">
            <span className="text-gray-700">Colors (comma-separated):</span>
            <input
              type="text"
              name="colors"
              value={product.colors}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label> */}
          {/* <label className="block mb-4">
            <span className="text-gray-700">
              Dimensions - Min (comma-separated):
            </span>
            <input
              type="text"
              name="dimensions.min"
              value={product.dimensions.min}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label> */}
          {/* <label className="block mb-4">
            <span className="text-gray-700">
              Dimensions - Max (comma-separated):
            </span>
            <input
              type="text"
              name="dimensions.max"
              value={product.dimensions.max}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label> */}
          {/* <label className="block mb-4">
            <span className="text-gray-700">Fabric:</span>
            <input
              type="text"
              name="fabric.fabric"
              value={product.fabric.fabric}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Thread:</span>
            <input
              type="text"
              name="fabric.thread"
              value={product.fabric.thread}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label> */}
          <label className="block mb-4">
            <span className="text-gray-700">Production Time:</span>
            <input
              type="text"
              name="production_time"
              value={product.production_time}
              onChange={handleChange}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Images:</span>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleImageUpload}
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-primary rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateProduct;
