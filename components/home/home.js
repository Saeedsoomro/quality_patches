import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

// import "../styles/Navbar.css";
import Swiper_first from "./Swiper_first";
import Swiper_second from "./Swiper_second";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import Swiper_three from "./Swiper_three";
import Swiper_mid from "./Swiper_mid";

const Home = () => {
  return (
    <>
      <div>
        <AwesomeSlider className="first-slider h-screen w-screen  ">
          <div className="first-container common-bg h-screen w-screen   ">
            .
          </div>
          <div className="second-container common-bg h-screen w-screen ">.</div>
          <div className="third-container common-bg h-screen w-screen ">.</div>
          <div className="fourth-container common-bg h-screen w-screen ">.</div>
          <div className="fifth-container common-bg h-screen w-screen ">.</div>
        </AwesomeSlider>
      </div>
      <div className="md:px-8 lg:px-20 font-sans my-20 ">
        <Swiper_first />
      </div>

      {/* --------------------- */}

      <div className="px-3 lg:h-screen md:px-8 lg:px-20 font-sans">
        <div className="flex flex-row items-center justify-between">
          <p className="text-lightblack text-2xl font-semibold">
            FEATURED <span className="text-lightblue">SERVICES</span>
          </p>
          <a href="" className="text-blue text-sm">
            View All <span className="">→</span>
          </a>
        </div>
        <div className=" font-sans">
          <Swiper_mid />
        </div>
      </div>

      {/* ----------------------second_swiper------------------ */}
      <div className="mt-10 px-3 py-3 lg:px-20 lg:pt-10 flex flex-col lg:flex-row  justify-around  md:flex-col  lg:h-screen bg-lightgray">
        <div className="w-screen md:p-3  lg:w-1/3 ">
          <Swiper_second />
        </div>

        <div className="mx-6 my-4 lg:my-0 p-4 h-5/6 border-[8px] solid border-slate rounded-3xl flex flex-col items-center justify-center text-center ">
          <h1 className="text-3xl">100k+</h1>
          <p className="text-sm font-thin my-4">EMBLEMS MANUFACTURED DAILY</p>
        </div>
        <div className="mx-6 my-4 lg:my-0 p-4 h-5/6 border-[8px] solid border-slate rounded-3xl flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl">5</h1>
          <p className="text-sm font-thin my-4">FACILITIES WORLDWIDE</p>
        </div>
        <div className="mx-6 my-4 lg:my-0 p-4 h-5/6 border-[8px] solid border-slate rounded-3xl flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl">1</h1>
          <p className="text-sm font-thin my-4">DAY TURNAROUND TIME</p>
        </div>
        <div className="mx-6 my-4 lg:my-0 p-4 h-5/6 border-[8px] solid border-slate rounded-3xl flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl">50k+</h1>
          <p className="text-sm font-thin my-4">HAPPY CUSTOMERS</p>
        </div>
      </div>

      {/* ----------------------------- */}
      <div className="px-4 py-4 md:px-10 lg:h-screen bg-lightgray md:py-10 flex flex-col lg:flex-row  justify-evenly">
        <div className="flex flex-col item-center justify-center  lg:w-2/5">
          <h1 className="text-2xl text-primary ">
            THE LEADER IN
            <span className="text-blue">
              APPAREL BRANDING-EMBLEMS, TRANSFERS, ID LABEL TAPE AND MUCH MORE..
            </span>
          </h1>
          <p className="font-thin tracking-widest text-primary my-4">
            Penn Emblem is proud to be celebrating 75 years of innovation as a
            third-generation family-owned and fourth generation family-operated
            business. As your brand decorator, we take pride in providing
            customers with the highest quality, unique products, expedient
            services, and creative inspiration.
          </p>
          <button className="my-10  font-xs border-1px solid  border-black p-2 rounded-lg  text-primary w-fit">
            LEARN MORE ABOUT US →
          </button>
        </div>
        <div className="bg-white flex flex-col item-center justify-center lg:w-2/5 md:py-10 md:p-14 px-3 py-3">
          <div>
            <h1 className="text-2xl font-thin tracking-wider">
              JOIN 5K+ OTHERS AND BECOME A PART OF OUR COMMUNITY!
            </h1>
            <p className="font-thin  text-primary mt-2 mb-4">
              Stay up to date on new products, trainings, and company news.
            </p>
            <input
              className="border-2px solid border-slate rounded-2xl p-2 my-3 w-full "
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email-input"
            />
            <br />
            <button className="bg-primary text-white font-xs  p-2 rounded-2xl  text-primary text-center w-full">
              SUBSCRIBE
            </button>
            <h1 className="text-2xl font-thin tracking-wider mt-8">
              FIND US ON SOCIAL MEDIA
            </h1>
            <p className="font-thin  text-primary  my-1">
              Stay up-to-date with the latest news
            </p>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            <FaFacebook
              size={30}
              // color="#050A30"
              className="text-primary  hover:text-blue hover:cursor-pointer "
            />
            <FaTwitter
              size={30}
              // color="#050A30"
              className="text-primary  hover:text-blue hover:cursor-pointer  "
            />
            <FaLinkedin
              size={30}
              // color="#050A30"
              className="text-primary  hover:text-blue hover:cursor-pointer "
            />
            <FaPinterest
              size={30}
              // color="#050A30"
              className="text-primary  hover:text-blue hover:cursor-pointer "
            />
            <FaInstagram
              size={30}
              // color="#050A30"
              className="text-primary  hover:text-blue hover:cursor-pointer "
            />
          </div>
        </div>
      </div>

      {/* ---------------------------- */}
      <div className="px-4 md:px-20 my-20 ">
        <Swiper_three />
      </div>
    </>
  );
};

export default Home;
