import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import RegisterPopup from "@/components/registerPopup";
import { getError } from "@/utils/error";
import AdminLayout from "./adminLayout/adminLayout";

const Requests = () => {
  const [requests, setRequets] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    getRequests();
  };

  useEffect(() => {
    getRequests();
  }, []);

  async function getRequests() {
    try {
      const { data } = await axios.get("/api/auth/signup-request");
      setRequets(data);
      console.log(data);
    } catch (error) {
      toast.error(getError(error));
    }
  }

  async function handleDelete(id) {
    try {
      const res = await axios.delete(`/api/user-request/${id}`);
      if (res.status == 200) {
        toast.success(res.data.message);
        getRequests();
      }
    } catch (error) {
      toast.error(getError(err));
    }
  }
  async function handleAccept(id) {
    setId(id);
    openPopup();
  }

  return (
    <AdminLayout>
      {requests && requests.length != 0 ? (
        <div className=" w-full ">
          <h1 className="text-2xl text-primary">Requests</h1>
          {requests.map((user) => (
            <li
              key={user._id}
              className="flex items-center justify-between bg-white rounded-md p-2 shadow-md"
            >
              <span>{user.customerName}</span>
              <div className="flex space-x-2">
                <button
                  className="text-blue"
                  onClick={() => handleAccept(user._id)}
                >
                  Accept
                </button>
                <button
                  className="text-red"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </div>
      ) : (
        <>
          <h1 className="text-2xl text-primary">Requests</h1>
          <div>No Request Found</div>
        </>
      )}
      <RegisterPopup onClose={closePopup} isOpen={isOpen} id={id} />
    </AdminLayout>
  );
};

export default Requests;
// Requests.auth = { adminOnly: true };
