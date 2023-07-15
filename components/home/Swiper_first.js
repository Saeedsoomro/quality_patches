import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

const Swiper_first = () => {
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
        <div className="mx-4">
          <img
            src="https://pennemblem.com/wp-content/uploads/2019/04/PennLockRFID_Chip-003-4.jpg"
            alt=""
            className="border-[16px] rounded-full border-slate w-full"
          />
          <p className="text-xl text-center my-4 text-primary  ">
            PENNLOCK(RFID CHIP)
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="assets/images/img1.jpg"
            alt=""
            className=" border-[16px] rounded-full border-slate w-full "
          />
          <p className="text-xl text-center my-4 text-primary">TAPE AND INK</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
            alt=""
            className="  border-[16px] rounded-full border-slate w-full "
          />
          <p className="text-xl text-center my-4 text-primary">
            GARMENT WOVEN LABLELS
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/greatstatesealofpennsylvania.jpg"
            alt=""
            className="  border-[16px] rounded-full border-slate "
          />
          <p className="text-xl text-center my-4 text-primary uppercase ">
            state flag penn emblems
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/United_States_Postal_Inspection_Service_logo.svg"
            alt=""
            className=" border-[16px] rounded-full border-slate "
          />
          <p className="text-xl text-center my-4 text-primary uppercase ">
            postal emblems
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-4">
          <img
            src="https://pennemblem.com/wp-content/uploads/2019/09/Chenile-003.jpg"
            alt=""
            className=" border-[16px] rounded-full border-slate "
          />
          <p className="text-xl text-center my-4 text-primary uppercase">
            american flag
          </p>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Swiper_first;
