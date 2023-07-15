import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AdminLayout from "../adminLayout/adminLayout";
import Link from "next/link";

const OrderListPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend API
    getOrders();
  }, []);

  const getOrders = () => {
    axios
      .get("/api/admin/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log("Error fetching orders:", error);
      });
  };

  const onDelete = async (orderId) => {
    try {
      const res = await axios.delete(`/api/orders/${orderId}`);
      if (res.status === 200) {
        toast.success(res.data.message);
        getOrders();
      }
    } catch (error) {
      console.log("Error deleting order:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Order List</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link href={`/admin/orders/${order._id}`}>{order._id}</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.shippingAddress.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${order.totalPrice}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="text-red hover:text-red-900"
                    onClick={() => onDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default OrderListPage;
