import Accordion from "@/components/product/Accordion";
import AccordionComponent from "@/components/product/Accordion";
import React, { useEffect, useState } from "react";
import { ProductAccordion, Products } from "@/utils/data";
import Items from "@/components/product/Items";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Index = () => {
  const [data, setData] = useState(ProductAccordion);
  const [products, setProducts] = useState(Products);
  const [categories, setCategories] = useState();
  const [product, setProduct] = useState();

  const handleMenuMouseLeave = () => {
    setMenu("");
  };

  const fetchProductsBycategory = async (id) => {
    try {
      const { data } = await axios.get(`/api/product/category/${id}`);
      if (data) {
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function gettProductCategory() {
    try {
      const { data } = await axios.get("/api/admin/category");
      if (data) {
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    gettProductCategory();
  }, []);

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <Layout>
      <div className="mt-20 md:mt-24 lg:mt-40 px-4 lg:px-16">
        <div className="flex flex-row text-sm">
          <a href="" className="text-blue">
            Home -
          </a>
          <p className="ml-0.5">Products</p>
        </div>
        <div>
          <h1 className="text-2xl mb-4 mt-2">PRODUCTS</h1>
        </div>
        <hr className="text-gray" />
      </div>

      <div className=" mt-4  px-4 sm:px-0 lg:pl-16 flex flex-col sm:flex-row mb-6">
        <div className="block sm:hidden">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="hidden md:block md:w-2/6 lg:w-1/5">
          {categories?.map((cat, index) => {
            return (
              <Accordion
                key={cat._id}
                index={index}
                cat={cat}
                product={product}
                fetchProductsBycategory={fetchProductsBycategory}
              />
            );
          })}
        </div>
        <div className="mt-4 sm:mt-0 sm:px-4  md:w-4/5">
          <div>
            <h1 className="font-semibold  text-xl">
              GARMENT LABEL SYSTEMS AND SUPPLIES
            </h1>
          </div>
          <div className="flex flex-row flex-wrap">
            {product?.map((prod) => {
              return <Items key={prod._id} {...prod} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
