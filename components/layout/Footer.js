import React from "react";
import { MdLocationOn } from "react-icons/md";
// import paypal from "../images/paypal.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="p-3 bg-lightgray flex flex-col md:flex-row justify-evenly md:pt-10 md:pb-28 ">
        <div className="flex flex-col  justify-evenly my-4 md:my-0">
          <h1 className="my-4 text-slate-600 text-lg">COMPANY INFO</h1>
          <div className="flex flex-col">
            <a href="">Contact Us</a>
            <a href="">Blog</a>
            <a href="">Careers</a>
            <a href="">Site Map</a>
          </div>
        </div>

        <div className="flex flex-col  justify-evenly my-4 md:my-0">
          <h1 className="my-4 text-slate-600 text-lg">QUICK LINKS</h1>
          <div className="flex flex-col">
            <a href="">Request a Login</a>
            <a href="">About Penn Emblem</a>
            <a href="">FAQ</a>
            <a href="">News & Events</a>
          </div>
        </div>

        <div className="flex flex-col  justify-between my-4 md:my-0">
          <div className="flex flex-row items-center md:justify-center">
            <MdLocationOn size={24} />
            <h1 className="my-4 text-slate-600 text-lg mx-2">
              PENNSYLVANIA OFFICE
            </h1>
          </div>
          <div className="flex flex-col  justify-between ">
            <p>2577 Interplex Drive, Suite A</p>
            <p>Trevose, PA 19053,</p>
            <p>Phone/Fax: 800-793-7366</p>
          </div>
        </div>

        <div className="flex flex-col  justify-between my-4 md:my-0">
          <div className="flex flex-row items-center mdjustify-center">
            <MdLocationOn size={24} />
            <h1 className="my-4 text-slate-600 text-lg mx-2">
              CALIFORNIA OFFICE
            </h1>
          </div>
          <p>11199 Inland Ave</p>
          <p>Mira Loma, CA 91752</p>
          <p>Phone/Fax: 800-775-7366</p>
        </div>
        <div className="flex flex-row md:flex-row justify-evenly items-center md:w-1/5">
          <div className="w-1/2">
            <img
              src="assets/images/paypal.png"
              alt="assets/images/paypal.png"
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:w-1/3">
          <h1 className="md:my-4 text-primary text-lg">CONNECT WITH US:</h1>
          <div className="my-3  flex flex-row md:items-center :justify-between md:w-1/2">
            <FaFacebook
              size={30}
              // color="#050A30"
              className="socialIcons "
            />
            <FaTwitter
              size={30}
              // color="#050A30"
              className="socialIcons "
            />
            <FaLinkedin
              size={30}
              // color="#050A30"
              className="socialIcons "
            />
            <FaPinterest
              size={30}
              // color="#050A30"
              className="socialIcons"
            />
            <FaInstagram
              size={30}
              // color="#050A30"
              className="socialIcons "
            />
          </div>
        </div>
        <div className="text-xs md:text-lg text-primary">
          <p>© Copyright 2023, Penn Emblem All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
