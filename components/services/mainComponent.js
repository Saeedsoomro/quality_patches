import React from "react";
import Link from "next/link";
import { ServiceComponent } from "@/utils/data";

const MainComponent = () => {
  return (
    <>
      {ServiceComponent.map((item, index) => (
        <div key={index} className="mx-4  md:w-[23rem]">
          <div>
            <img
              src={item.imgUrl}
              alt=""
              className="border-[16px] rounded-full border-slate  relative top-14 left-2 md:left-5 "
            />
            <div className="bg-lightgray rounded-3xl py-16 text-center md:px-3 ">
              <h1 className="text-lg font-semibold text-primary pt-4 pb-2 uppercase">
                {item.heading}
              </h1>
              <p className="text-primary text-sm text-center pb-4">
                {item.paragraph}
              </p>
              <Link href="#" legacyBehavior>
                <a className="text-blue text-sm">More Details</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainComponent;
