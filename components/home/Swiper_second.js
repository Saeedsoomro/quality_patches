import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

const Swiper_second = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1} // Number of slides to show in PC
      // spaceBetween={2} // Space between slides
      // breakpoints={{
      //   768: {
      //     slidesPerView: 2, // Number of slides to show in iPad
      //   },
      //   480: {
      //     slidesPerView: 1, // Number of slides to show in mobile
      //   },
      // }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="font-sans">
          <div className="text-xl ">
            <h1 className="font-semibold text-primary  tracking-widest">
              WHY CHOOSE <span className="text-blue">PENN?</span>
            </h1>
            <h1 className="font-thin">SOCIAL PROOF</h1>
          </div>
          <div className="my-8">
            <p className="text-base font-thin text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odio, itaque quis voluptas, quidem temporibus ea expedita unde
              nobis similique et eum accusantium eos porro obcaecati! Quos
              dignissimos totam quasi.
            </p>
          </div>
          <div className="">
            <p className="text-primary font-bold">Dustin Phelps</p>
            <p className="text-base font-thin text-primary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              rem?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="font-sans">
          <div className="text-xl ">
            <h1 className="font-semibold text-primary tracking-widest">
              WHY CHOOSE <span className="text-blue">PENN?</span>
            </h1>
            <h1 className="font-thin">SOCIAL PROOF</h1>
          </div>
          <div className="my-8">
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odio, itaque quis voluptas, quidem temporibus ea expedita unde
              nobis similique et eum accusantium eos porro obcaecati! Quos
              dignissimos totam quasi.
            </p>
          </div>
          <div className="">
            <p className="text-primary font-bold">Dustin Phelps</p>
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              rem?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="font-sans">
          <div className="text-xl ">
            <h1 className="font-semibold text-primary tracking-widest">
              WHY CHOOSE <span className="text-blue">PENN?</span>
            </h1>
            <h1 className="font-thin">SOCIAL PROOF</h1>
          </div>
          <div className="my-8">
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odio, itaque quis voluptas, quidem temporibus ea expedita unde
              nobis similique et eum accusantium eos porro obcaecati! Quos
              dignissimos totam quasi.
            </p>
          </div>
          <div className="">
            <p className="text-primary font-bold">Dustin Phelps</p>
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              rem?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="font-sans">
          <div className="text-xl ">
            <h1 className="font-semibold text-primary tracking-widest">
              WHY CHOOSE <span className="text-blue">PENN?</span>
            </h1>
            <h1 className="font-thin">SOCIAL PROOF</h1>
          </div>
          <div className="my-8">
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odio, itaque quis voluptas, quidem temporibus ea expedita unde
              nobis similique et eum accusantium eos porro obcaecati! Quos
              dignissimos totam quasi.
            </p>
          </div>
          <div className="">
            <p className="text-primary font-bold">Dustin Phelps</p>
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              rem?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="font-sans">
          <div className="text-xl ">
            <h1 className="font-semibold text-primary tracking-widest">
              WHY CHOOSE <span className="text-blue">PENN?</span>
            </h1>
            <h1 className="font-thin">SOCIAL PROOF</h1>
          </div>
          <div className="my-8">
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odio, itaque quis voluptas, quidem temporibus ea expedita unde
              nobis similique et eum accusantium eos porro obcaecati! Quos
              dignissimos totam quasi.
            </p>
          </div>
          <div className="">
            <p className="text-primary font-bold">Dustin Phelps</p>
            <p className="text-base font-thin text-primay">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              rem?
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Swiper_second;
