import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordion = ({ cat, index, fetchProductsBycategory, product }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (index == 0) {
      setShow(true);
      fetchProductsBycategory(cat?._id);
    }
  }, []);
  function onOpenAccord(id) {
    if (show == false) {
      fetchProductsBycategory(id);
      console.log(show);
    }
    setShow(!show);
  }

  return (
    <>
      <div className="border-[1px] flex flex-row justify-between p-2 border-gray m-1 font-semibold text-lightblack">
        <h1 className="cursor-pointer" onClick={() => onOpenAccord(cat._id)}>
          {cat?.name}
        </h1>
        <p className="cursor-pointer " onClick={() => onOpenAccord(cat._id)}>
          {show ? (
            <FiChevronUp size={24} color="black" />
          ) : (
            <FiChevronDown size={24} color="black" />
          )}
        </p>
      </div>
      {show && product && (
        <div className="p-2 m-1 ">
          {product.map((prod) => (
            <div key={prod._id}>
              <Link href={`/products/${prod._id}`} className="p-2">
                {prod?.title}
              </Link>
              <hr className="text-gray" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Accordion;
