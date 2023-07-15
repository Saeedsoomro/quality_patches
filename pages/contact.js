import Layout from "@/components/layout/Layout";
import axios from "axios";
import React, { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { GiLetterBomb } from "react-icons/gi";
import { toast } from "react-toastify";
const Contact = () => {
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
        setFormValue({
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
    <Layout>
      <div className="text center px-80 mt-40">
        <form className="w-full text-right" onSubmit={sendEmail}>
          <input
            className="w-full"
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <input
            className="w-full"
            type="email"
            value={formValue.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Enter your email"
          />
          <input
            className="w-full"
            onChange={handleInputChange}
            value={formValue.phone}
            type="text"
            name="phone"
            placeholder="Enter your phone number"
          />
          <input
            className="w-full"
            onChange={handleInputChange}
            type="text"
            value={formValue.subject}
            name="subject"
            placeholder="Please Enter subject"
          />
          <textarea
            className="w-full"
            onChange={handleInputChange}
            type="text"
            value={formValue.message}
            name="message"
            placeholder="Message"
          />

          <input className="w-20" type="submit" placeholder="SEND" />
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
