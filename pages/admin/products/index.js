import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../adminLayout/adminLayout";
import Link from "next/link";
import { toast } from "react-toastify";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("/api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  };

  const onDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const res = await axios.delete(`/api/product/${id}`);
        if (res.status === 200) {
          toast.success(res.data.message);
          getProducts();
        }
      } catch (error) {
        console.log("Error deleting product:", error);
      }
    }
  };
  return (
    <AdminLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <ul className="grid grid-cols-1  gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between bg-white rounded-md shadow-md p-4 mb-4"
            >
              <div className="flex items-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
              </div>
              <div>
                <button
                  className="bg-red text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => onDelete(product._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-primary text-white px-4 py-2 rounded-md"
                  //  onClick={() => onUpdate(product.id)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </ul>
        <Link
          href="/admin/products/createProduct"
          className="bg-primary text-white px-4 py-2 rounded-md"
          //  onClick={() => onUpdate(product.id)}
        >
          Add Product
        </Link>
      </div>
    </AdminLayout>
  );
};

export default ProductListPage;
