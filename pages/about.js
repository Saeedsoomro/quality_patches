import React from "react";
import { image } from "../public/assets/images/aboutusbg.png";
import Content from "@/components/product/Content";
import Layout from "@/components/layout/Layout";

const Aboutus = () => {
  return (
    <Layout>
      <div className="mt-40 px-16">
        <div className="flex flex-row text-sm">
          <a href="" className="text-blue">
            Home -
          </a>
          <a href="" className="text-blue ml-0.5">
            About Us -
          </a>
          <p className="ml-0.5">About Penn Emblem</p>
        </div>
        <div>
          <h1 className="text-2xl mb-4 mt-2">ABOUT PENN EMBLEM</h1>
        </div>
        <hr className="text-gray" />
      </div>

      <div
        style={{
          backgroundImage: "url('/assets/images/aboutusbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(400px - 64px)",
          marginLeft: "64px",
          marginRight: "64px",
          marginTop: "64px",
        }}
      >
        {/* <img src={image} alt="" className="h-full w-full" /> */}
      </div>

      <div className="px-16 mt-16 mb-4">
        <Content />
      </div>
    </Layout>
  );
};

export default Aboutus;
