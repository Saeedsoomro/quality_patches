import React, { useContext, useEffect, useState } from "react";
// import { Gallery } from "@/utils/data";
import { useRouter } from "next/router";
import axios from "axios";
import ProductImage from "@/components/product/ProductImage";
import Layout from "@/components/layout/Layout";
import { Store } from "@/utils/store";

const ProductComp = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  const fetchProductById = async (productId) => {
    try {
      const { data } = await axios.get(`/api/product/${productId}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout>
      <div className="mt-20 md:mt-28 lg:mt-40 px-4 md:px-6 lg:px-16">
        <div className="flex flex-row text-sm">
          <a href="" className="text-blue">
            Home -
          </a>
          <a href="" className="text-blue ml-1">
            Products -
          </a>
          <p className="ml-0.5">Services</p>
        </div>
        <div>
          <h1 className="text-2xl mb-4 mt-2">SERVICES</h1>
        </div>
        <hr className="text-gray" />
      </div>
      {/* body */}
      <div className="lg:px-16 flex flex-col lg:flex-row   mt-5 w-full ">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col sm:flex-row w-full  ">
            <div className="rounded-full mx-4 my-4 border-[8px] border-slate w-[19rem] h-[19rem] ">
              <img
                src={product?.images[0]}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="p-5 flex-grow">
              <p>{product?.desc}</p>
              <h1 className="text-2xl text-primary font-semibold mt-3">
                DIMENSIONS
              </h1>
              <img
                src="./assets/images/Product2.jpg"
                alt=""
                className="w-full h-[4rem]"
              />
              <div className="flex flex-row justify-between items-start">
                <p>Minimum Size</p>
                <p>Maximum Size</p>
              </div>
              <div className="flex flex-row justify-between items-start">
                <p>{`${product?.dimensions.max[0]}X${product?.dimensions.max[1]}`}</p>
                <p>{`${product?.dimensions.min[0]}X${product?.dimensions.min[1]}`}</p>
              </div>
              <div className="flex justify-between text-blue mt-4">
                <div>
                  <a href="">Download Specsheet</a>
                  <a href="">Download Slick</a>
                </div>
                <div>
                  <button
                    onClick={addToCartHandler}
                    className="px-4 py-2 bg-primary text-white rounded-md mr-4"
                  >
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 bg-blue text-white rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="m-2">
            <div>
              <h1 className="text-xl text-primary font-bold mt-3">COLOR</h1>
              <p className="border-[1px] border-solid border-gray p-4 mt-4 font-thin">
                <a href="" className="text-blue">
                  View Color Chart
                </a>
              </p>
            </div>
            <div>
              <h1 className="text-xl text-primary font-bold mt-3">FABRIC</h1>
              <p className="border-[1px] border-solid border-gray p-4 mt-4 font-thin">
                <span className="font-bold">Fabric - </span>100% Polyester Twill
                <br />
                <span className="font-bold">Thread - </span>100% Polyester for
                Embroidery Thread
              </p>
            </div>
            <div>
              <h1 className="text-xl text-primary font-bold mt-3">
                PRODUCTION TIME
              </h1>
              <div className="border-[1px] border-solid border-gray p-8 mt-4 flex flex-row justify-between items-center">
                <div>
                  <p className=" font-bold">*Sketch card or scan:</p>
                  <p className="font-thin">1-2 days (no additional cost)</p>
                </div>
                <div>
                  <p className=" font-bold">Will ship in</p>
                  <p className="font-thin">
                    Most orders will ship in {product?.production_time} business
                    days. Rush pricing and delivery also available.
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-xl text-primary font-bold mt-3">
                  ARTWORK TIP:
                </h1>
                <p className=" p-4  font-thin">
                  Accepted Graphic File Types: .cdr, .ai, .eps, .pdf, .jpg,
                  .png, .psd
                </p>
                <p className=" p-4  font-thin">
                  Accepted Embroidery File Types: .dst, .emb, .pxf, .tbf, .dsb,
                  .exp
                </p>
                <i className=" p-4  font-thin">*Additional sample charge</i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-[1px] border-solid border-gray  ">
            <h1 className="border-b-2 border-gray text-lightblue text-2xl font-semibold text-center p-4">
              Features
            </h1>
            <ol className="list-disc px-6 py-6 ">
              {product?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ol>
            <p className="bg-gray p-[6.5px] text-center ">
              Minimum Quantity
              <span className="text-red text-xl font-bold ">
                {product?.min_quantity}
              </span>
            </p>
          </div>
          <div className="border-[1px] border-solid border-gray h-[22.1rem] mt-3 ">
            <img src="./assets/images/Product3.jpg" alt="" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="  text-lightblue text-2xl font-semibold text-center">
          GALLERY
        </h1>
        <div className="flex flex-row justify-center flex-wrap">
          {product?.images.map((image, index) => {
            return <ProductImage key={index} image={image} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProductComp;
