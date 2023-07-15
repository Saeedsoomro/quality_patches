import Layout from "@/components/layout/Layout";
import { serviceContent } from "@/utils/data";
import React, { useState } from "react";

const Servicecomponent = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
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

        {serviceContent.map((item) => (
          <>
            {/* first component */}

            <div className="md:px-0 lg:px-16 my-10 flex flex-row justify-between  ">
              <div className="hidden sm:block md:h-[20rem] lg:h-[30rem] w-[45rem]">
                <img
                  src={item.imgUrlOne}
                  alt=""
                  className="border-[16px]  border-slate h-full w-full"
                />
              </div>
              <div className="w-[45rem] pl-6 pr-10">
                <h1 className="font-semibold text-2xl">{item.headingOne}</h1>
                <br />
                <p className="text-lg font-thin text-primary">
                  {readMore
                    ? item.contentOne
                    : item.contentOne.slice(0, 300) + "..."}
                </p>
                <button
                  className="text-blue font-semibold"
                  onClick={() => serReadMore(!readMore)}
                >
                  {readMore ? "View less" : "View more"}
                </button>
                <div className="flex flex-row flex-wrap justify-start items-center mt-8">
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-gray lg:mx-16" />
            {/* second component */}
            <div className="md:px-0 lg:px-16 my-10 flex flex-row justify-between  ">
              <div className="w-[45rem] pl-6 pr-10">
                <h1 className="font-semibold text-2xl">{item.headingTwo}</h1>
                <br />
                <p className="text-lg font-thin text-primary">
                  {readMore
                    ? item.contentTwo
                    : item.contentTwo.slice(0, 300) + "..."}
                </p>
                <button
                  className="text-blue font-semibold"
                  onClick={() => serReadMore(!readMore)}
                >
                  {readMore ? "View less" : "View more"}
                </button>
                <div className="flex flex-row flex-wrap justify-start items-center mt-8">
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block md:h-[20rem] lg:h-[30rem] w-[45rem]">
                <img
                  src={item.imgUrlTwo}
                  alt=""
                  className="border-[16px]  border-slate h-full w-full"
                />
              </div>
            </div>
            {/* Third Component */}
            <div className="md:px-0 lg:px-16 my-10 flex flex-row justify-between  ">
              <div className="hidden sm:block md:h-[20rem] lg:h-[30rem] w-[45rem]">
                <img
                  src={item.imgUrlThree}
                  alt=""
                  className="border-[16px]  border-slate h-full w-full"
                />
              </div>
              <div className="w-[45rem] pl-6 pr-10">
                <h1 className="font-semibold text-2xl">{item.headingThree}</h1>
                <br />
                <p className="text-lg font-thin text-primary">
                  {readMore
                    ? item.contentThree
                    : item.contentThree.slice(0, 300) + "..."}
                </p>
                <button
                  className="text-blue font-semibold"
                  onClick={() => serReadMore(!readMore)}
                >
                  {readMore ? "View less" : "View more"}
                </button>
                <div className="flex flex-row flex-wrap justify-start items-center mt-8">
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-gray lg:mx-16" />
            {/* Fourth Component */}
            <div className="md:px-0 lg:px-16 my-10 flex flex-row justify-between  ">
              <div className="w-[45rem] pl-6 pr-10">
                <h1 className="font-semibold text-2xl">{item.headingFour}</h1>
                <br />
                <p className="text-lg font-thin text-primary">
                  {readMore
                    ? item.contentFour
                    : item.contentFour.slice(0, 300) + "..."}
                </p>
                <button
                  className="text-blue font-semibold"
                  onClick={() => serReadMore(!readMore)}
                >
                  {readMore ? "View less" : "View more"}
                </button>
                <div className="flex flex-row flex-wrap justify-start items-center mt-8">
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="m-2 md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                  <div className="md:w-[6rem] lg:w-[12rem]">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdkSU-zM_Qg_z50Fa_Na5Kv42k2MekZNUcw&usqp=CAU"
                      alt=""
                      className="  border-[16px] rounded-full border-slate w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block md:h-[20rem] lg:h-[30rem] w-[45rem]">
                <img
                  src={item.imgUrlFour}
                  alt=""
                  className="border-[16px]  border-slate h-full w-full"
                />
              </div>
            </div>
          </>
        ))}
      </Layout>
    </>
  );
};

export default Servicecomponent;
