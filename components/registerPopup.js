import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { getError } from "@/utils/error";

const RegisterPopup = ({ isOpen, onClose, id }) => {
  const [user, setUser] = useState();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    handleAccept(id);
  }, [id]);

  if (!isOpen) {
    return null;
  }

  const sendEmail = async (userEmail) => {
    try {
      const req = await axios({
        method: "post",
        url: "/api/get-email",
        data: {
          userEmail,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  async function handleAccept(id) {
    try {
      const { data } = await axios.get(`/api/user-request/${id}`);
      if (data.success == true) {
        setUser(data.user);
        setValue("email", data.user.email);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const submitHandler = async ({ email, password }) => {
    try {
      const res = await axios.post("/api/auth/signup", {
        ...user,
        password,
      });
      console.log(res);
      if (res.status == 201) {
        await axios.delete(`/api/user-request/${id}`);
        sendEmail(user.email);
        closePopup();
        toast.success(res.data.message);
      }
      if (res.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  function closePopup() {
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Assign Id password</h2>
        <form
          className="flex flex-col mt-40"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="mb-4">
            <input
              type="email"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
              className="w-full"
              id="email"
              autoFocus
            ></input>
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "password is more than 5 chars",
                },
              })}
              className="w-full"
              id="password"
              autoFocus
            ></input>
            {errors.password && (
              <div className="text-red-500 ">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4 ">
            <input
              type="submit"
              placeholder="Login"
              className="primary-button"
            />
          </div>
        </form>
        <button
          className="mt-4 bg-blue text-white px-4 py-2 rounded"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterPopup;
