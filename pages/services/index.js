import React from "react";
import Layout from "@/components/layout/Layout";
import MainComponent from "@/components/services/mainComponent";

const services = () => {
  return (
    <Layout>
      <div className="mt-20 md:mt-28 lg:mt-40 px-4 md:px-6 lg:px-16">
        <div className="flex flex-row text-sm">
          <a href="" className="text-blue">
            Home -
          </a>
          <p className="ml-0.5">Services</p>
        </div>
        <div>
          <h1 className="text-2xl mb-4 mt-2">SERVICES</h1>
        </div>
        <hr className="text-gray" />
      </div>
      <div className=" md:px-0 lg:px-16 flex flex-row flex-wrap justify-evenly items-start my-10">
        <MainComponent />
      </div>
    </Layout>
  );
};

export default services;
