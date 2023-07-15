import Layout from "@/components/layout/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

function ChangePasswordPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { data: session } = useSession();
  const handlePreviousPasswordChange = (event) => {
    setPreviousPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePasswordChange = async () => {
    try {
      if (session.user) {
        const email = session?.user.email;
        const res = await axios.post("/api/auth/changepassword", {
          email,
          previousPassword,
          newPassword,
        });
        if (res.status == 200) {
          toast.success("change password successfully");
          setNewPassword("");
          setPreviousPassword("");
        }
      }
      console.log("Previous Password:", previousPassword);
      console.log("New Password:", newPassword);

      handleCloseModal();
    } catch (error) {
      const { response } = error;
      toast.error(response.data.message);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-36">
        <h1 className="text-3xl font-bold mb-6">Change Password</h1>
        <button
          onClick={handleOpenModal}
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Change Password
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed  shadow-xl   flex items-center justify-center">
            <div className="bg-white p-6 rounded-md">
              <h2 className="text-xl font-bold mb-4">Change Password</h2>
              <div className="mb-4">
                <label htmlFor="previous-password" className="text-lg">
                  Previous Password:
                </label>
                <input
                  type="password"
                  id="previous-password"
                  value={previousPassword}
                  onChange={handlePreviousPasswordChange}
                  className="border border-gray-300 px-3 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="new-password" className="text-lg">
                  New Password:
                </label>
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  className="border border-gray-300 px-3 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="text-blue hover:text-gray-700 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordChange}
                  className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ChangePasswordPage;
