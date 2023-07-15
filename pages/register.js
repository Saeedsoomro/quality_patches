import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout/Layout";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import { RiMessage2Line } from "react-icons/ri";
import { FaCity } from "react-icons/fa";
import { HiOutlineArchive } from "react-icons/hi";
import { MdKeyboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
export default function RegisterScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      // router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (userEmail) => {
    try {
      const req = await axios({
        method: "post",
        url: "/api/send-email",
        data: {
          userEmail,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = async ({
    compony,
    city,
    zip,
    customerNumber,
    requestedBy,
    customerName,
    state,
    email,
    phone,
    department,
  }) => {
    try {
      const res = await axios.post("/api/auth/signup-request", {
        compony,
        city,
        zip,
        customerNumber,
        requestedBy,
        customerName,
        state,
        email,
        phone,
        department,
      });
      if (res.status == 201) {
        toast.success(res.data.message);
        reset();
        sendEmail(res.data.user.email);
        router.push(redirect || "/");
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Create Account">
      <form
        className="mx-auto mt-40 max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="text-left">
          <div className="flex flex-row text-sm">
            <a href="" className="text-blue">
              Home -
            </a>
            <p className="ml-0.5">Request a Login</p>
          </div>
          <div>
            <h1 className="text-2xl mb-4 mt-2">REQUEST A LOGIN</h1>
          </div>
          <hr className="text-gray" />
        </div>

        <div className="font-thin  my-10 px-16">
          <p>
            Need a Login and Password for Penn Emblem Online Services? Please
            fill out the form below and a Penn Emblem customer service
            specialist will reach out to you shortly. Thank you!
          </p>
        </div>

        <div className="flex flex-row ">
          <div className="w-1/2 p-4">
            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <RiMessage2Line size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="compony"
                placeholder="Compony"
                autoFocus
                {...register("compony", {
                  required: "Please enter compony",
                })}
              />
              {errors.compony && (
                <div className="text-red-500">{errors.compony.message}</div>
              )}
            </div>

            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <FaCity size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="city"
                placeholder="City"
                autoFocus
                {...register("city", {
                  required: "Please enter city",
                })}
              />
              {errors.city && (
                <div className="text-red-500">{errors.city.message}</div>
              )}
            </div>

            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <HiOutlineArchive size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="zip"
                placeholder="Zip"
                autoFocus
                {...register("zip", {
                  required: "Please enter zip",
                })}
              />
              {errors.zip && (
                <div className="text-red-500">{errors.zip.message}</div>
              )}
            </div>

            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <MdKeyboard size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="customerNumber"
                placeholder="Penn Customer Number"
                autoFocus
                {...register("customerNumber", {
                  required: "Please enter customer number",
                })}
              />
              {errors.customerNumber && (
                <div className="text-red-500">
                  {errors.customerNumber.message}
                </div>
              )}
            </div>

            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <MdKeyboard size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="requestedBy"
                placeholder="Requested By"
                autoFocus
                {...register("requestedBy", {
                  required: "Please enter customer number",
                })}
              />
              {errors.requestedBy && (
                <div className="text-red-500">{errors.requestedBy.message}</div>
              )}
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <FaUser size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="customerName"
                placeholder="Customer Name"
                autoFocus
                {...register("customerName", {
                  required: "Please enter customer name",
                })}
              />
              {errors.customerName && (
                <div className="text-red-500">
                  {errors.customerName.message}
                </div>
              )}
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <FaCity size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="state"
                placeholder="State"
                autoFocus
                {...register("state", {
                  required: "Please enter state",
                })}
              />
              {errors.state && (
                <div className="text-red-500">{errors.state.message}</div>
              )}
            </div>

            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <RiMessage2Line size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="email"
                placeholder="Customer Email"
                autoFocus
                {...register("email", {
                  required: "Please enter email",
                })}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>

            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <RiMessage2Line size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="phone"
                placeholder="Customer Phone"
                autoFocus
                {...register("phone", {
                  required: "Please enter phone",
                })}
              />
              {errors.phone && (
                <div className="text-red-500">{errors.phone.message}</div>
              )}
            </div>
            <div className="flex flex-row items-center justify-between my-2">
              <div className="border-[4px] rounded-full p-[4px]">
                <RiMessage2Line size={30} color="black" />
              </div>
              <input
                type="text"
                className="w-full"
                id="department"
                placeholder="Department"
                autoFocus
                {...register("department", {
                  required: "Please enter department",
                })}
              />
              {errors.department && (
                <div className="text-red-500">{errors.department.message}</div>
              )}
            </div>
            <input
              type="submit"
              placeholder="Submit"
              className="border px-4 py-2"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
}
