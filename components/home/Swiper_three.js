import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

const Swiper_three = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // slidesPerView={5} // Number of slides to show in PC
      spaceBetween={80} // Space between slides
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
        <div className="">
          <img
            src="https://www.mustangmktg.com/eblast/mission/2017-05/logo.png"
            alt=""
            className="   "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b75b84af93fd41423029563/91affe18-00e6-4b37-9bf7-4950693c2590/AHG-2-Color-Horizontal-Logo-on-white-01.jpg"
            alt=""
            className="  "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <img
            src="https://networkcsc.com/wp-content/uploads/2021/05/CSCNetwork-2021.svg"
            alt=""
            className="   "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <img
            src="https://www.redkap.com/on/demandware.static/Sites-redkap_us-Site/-/default/dwf40d6af1/images/logo.png"
            alt=""
            className=" "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <img
            src="https://cdn.cookielaw.org/logos/27c1738a-2a24-421a-89c5-7ce651fef62c/8952a765-42a9-4e44-928b-1b3c85fa7b5f/e7d497ad-9de1-4ee3-bbac-730e192dbd82/Cintas_RFTW_Logo.png"
            alt=""
            className="  "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <img
            src="https://mma.prnewswire.com/media/1887423/Galls_RGB_100_Logo.jpg?p=facebook"
            alt=""
            className=""
          />
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Swiper_three;
