import React from "react";

const ProductImage = ({ image }) => {
  return (
    <div className=" cursor-pointer">
      <div className="w-[12rem] lg:w-[16rem] rounded-full mx-4 my-4 border-[8px] border-slate">
        <img src={image} alt="" className="w-full rounded-full" />
      </div>
      <p className="text-center text-sm font-thin">none</p>
    </div>
  );
};

export default ProductImage;
