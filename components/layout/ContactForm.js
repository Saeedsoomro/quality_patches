import axios from "axios";
import React, { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { GiLetterBomb } from "react-icons/gi";
import { toast } from "react-toastify";
const ContactForm = () => {
  const [openContactForm, setOpenContactForm] = useState(false);
  const [formValue, setFromValue] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFromValue((prevsValue) => ({
      ...prevsValue,
      [name]: value,
    }));
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const req = await axios({
        method: "post",
        url: "/api/contact",
        data: formValue,
      });
      if (req.status == 200) {
        toast.success("Email has been sent successfully");
        setFromValue({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const toggleContactForm = () => {
    setOpenContactForm(!openContactForm);
  };

  return (
    <div className="fixed top-48 right-0 z-10">
      <div className="flex">
        <div className="relative  ">
          <div className="bg-primary  text-left text-lightgray h-[15rem] flex flex-col justify-between rounded">
            <div className="h-20 w-10 flex flex-col justify-center items-center">
              <BsFillCaretRightFill
                className="mb-6"
                onClick={toggleContactForm}
              />
              <p className="rotate-[-90deg] text-xl">penn</p>
            </div>
            <div className=" rounded-full bg-primary absolute top-[90px] left-[-28px] p-2 ">
              <GiLetterBomb className="text-5xl" />
            </div>
            <div className="h-8 w-10 flex flex-col justify-center mb-8 items-center">
              <p className="rotate-[-90deg] text-xl">contact</p>
            </div>
          </div>
        </div>
        <div
          className={
            openContactForm
              ? "border-8 bg-white border-lightgray transit w-[30rem] scale-x-1 p-4 transition-transform transform translate-x-0 "
              : "border-8 bg-white border-lightgray transit w-[30rem] scale-x-0 p-4 transition-transform transform translate-x-full hidden"
          }
        >
          <form className="w-full text-right" onSubmit={sendEmail}>
            <input
              className="w-full"
              type="text"
              name="name"
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
            <input
              className="w-full"
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="w-full"
              onChange={handleInputChange}
              type="text"
              name="phone"
              placeholder="Enter your phone number"
            />
            <input
              className="w-full"
              onChange={handleInputChange}
              type="text"
              name="subject"
              placeholder="Please Enter subject"
            />
            <textarea
              className="w-full"
              onChange={handleInputChange}
              type="text"
              name="message"
              placeholder="Message"
            />

            <input className="w-20" type="submit" placeholder="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
