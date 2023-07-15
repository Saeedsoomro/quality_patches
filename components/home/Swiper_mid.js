import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

const Swiper_mid = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // slidesPerView={5} // Number of slides to show in PC
      spaceBetween={2} // Space between slides
      breakpoints={{
        768: {
          slidesPerView: 2, // Number of slides to show in iPad
        },
        390: {
          slidesPerView: 1, // Number of slides to show in mobile
        },
        1000: {
          slidesPerView: 5, //PC
        },
      }}
      navigation={true}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="mx-4 ">
          <img
            src="assets/images/person.jpg"
            alt=""
            className="border-[16px] rounded-full border-slate  relative top-14 "
          />
          <div className="bg-lightgray rounded-3xl py-16 text-center md:px-3 ">
            <h1 className="text-lg font-semibold text-slate-700 pt-4 pb-2">
              DECORATION AND APPLICATION
            </h1>
            <p className="text-primary text-sm text-center pb-4">
              Penn Emblem is a full-serrvice branded apparel and...
            </p>
            <a href="#" className="text-blue text-sm">
              More Details
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="assets/images/person.jpg"
            alt=""
            className="border-[16px] rounded-full border-slate  relative top-14 "
          />
          <div className="bg-lightgray rounded-3xl py-16 text-center md:px-3">
            <h1 className="text-lg font-semibold text-slate-700 pt-4 pb-2">
              DECORATION AND APPLICATION
            </h1>
            <p className="text-primary text-sm text-center pb-4">
              Penn Emblem is a full-serrvice branded apparel and...
            </p>
            <a href="#" className="text-blue text-sm">
              More Details
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="assets/images/person.jpg"
            alt=""
            className="border-[16px] rounded-full border-slate  relative top-14 "
          />
          <div className="bg-lightgray rounded-3xl py-16 text-center md:px-3">
            <h1 className="text-lg font-semibold text-slate-700 pt-4 pb-2">
              DECORATION AND APPLICATION
            </h1>
            <p className="text-primary text-sm text-center pb-4">
              Penn Emblem is a full-serrvice branded apparel and...
            </p>
            <a href="#" className="text-blue text-sm">
              More Details
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="assets/images/person.jpg"
            alt=""
            className="border-[16px] rounded-full border-slate  relative top-14 "
          />
          <div className="bg-lightgray rounded-3xl py-16 text-center md:px-3">
            <h1 className="text-lg font-semibold text-slate-700 pt-4 pb-2">
              DECORATION AND APPLICATION
            </h1>
            <p className="text-primary text-sm text-center pb-4">
              Penn Emblem is a full-serrvice branded apparel and...
            </p>
            <a href="#" className="text-blue text-sm">
              More Details
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="assets/images/person.jpg"
            alt=""
            className="border-[16px] rounded-full border-slate  relative top-14 "
          />
          <div className="bg-lightgray rounded-3xl py-16 text-center md:px-3">
            <h1 className="text-lg font-semibold text-slate-700 pt-4 pb-2">
              DECORATION AND APPLICATION
            </h1>
            <p className="text-primary text-sm text-center pb-4">
              Penn Emblem is a full-serrvice branded apparel and...
            </p>
            <a href="#" className="text-blue text-sm">
              More Details
            </a>
          </div>
        </div>
      </SwiperSlide>

      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Swiper_mid;
