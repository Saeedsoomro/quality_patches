import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "./adminLayout/adminLayout";
import { toast } from "react-toastify";
import { getError } from "@/utils/error";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    // Fetch categories from backend on component mount
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/admin/category"); // Replace with your backend API endpoint
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDeleteCategory = (categoryId) => {
    console.log(categoryId);
    setDeleteCategoryId(categoryId);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteCategory = async () => {
    try {
      await axios.delete(`/api/admin/category/${deleteCategoryId}`); // Replace with your backend API endpoint for deleting a category
      setDeleteCategoryId(null);
      setShowDeleteConfirmation(false);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleEditCategory = (categoryId) => {
    setEditCategoryId(categoryId);
  };

  const handleSaveCategory = async () => {
    try {
      const { data } = await axios.post("/api/admin/category", {
        name: newCategoryName,
      }); // Replace with your backend API endpoint for adding a category
      setNewCategoryName("");
      setShowAddPopup(false);
      fetchCategories();
      if (data.message) {
        console.log(data.message);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(getError(error));
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Categories</h1>

        {categories.length === 0 ? (
          <div className="mt-4">
            <p>No categories found.</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => setShowAddPopup(true)}
            >
              Add Category
            </button>
          </div>
        ) : (
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category._id}
                className="flex items-center justify-between bg-white rounded-md p-2 shadow-md"
              >
                <span>{category.name}</span>
                <div className="flex space-x-2">
                  <button
                    className="text-blue"
                    onClick={() => handleEditCategory(category._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red"
                    onClick={() => handleDeleteCategory(category._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <button
            className="bg-primary text-white py-2 px-4 rounded-md"
            onClick={() => setShowAddPopup(true)}
          >
            Add Category
          </button>
        </div>

        {showAddPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2 text-blue-500">
                Add Category
              </h2>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Category Name"
                className="border p-2 mb-2 rounded-md"
              />
              <div className="flex justify-end">
                <button
                  className="bg-blue text-white py-2 px-4 rounded-md mr-2"
                  onClick={handleSaveCategory}
                >
                  Save
                </button>
                <button
                  className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md"
                  onClick={() => setShowAddPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2 text-blue-500">
                Confirm Delete
              </h2>
              <p>Are you sure you want to delete this category?</p>
              <div className="flex justify-end">
                <button
                  className="bg-blue text-white py-2 px-4 rounded-md mr-2"
                  onClick={confirmDeleteCategory}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md"
                  onClick={() => setShowDeleteConfirmation(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default CategoriesPage;
