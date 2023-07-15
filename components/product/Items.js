import Link from "next/link";
import React from "react";

const Items = ({ images, title, _id }) => {
  return (
    <div className=" cursor-pointer">
      <Link href={`/products/${_id}`} legacyBehavior>
        <div className=" w-[10rem] lg:w-[16rem] rounded-full mx-2 lg:mx-4 my-4 border-[8px] border-slate">
          <img src={`${images[0]}`} alt="" className="w-full rounded-full" />
        </div>
      </Link>
      <p className="text-center text-sm font-thin">{title}</p>
    </div>
  );
};

export default Items;
