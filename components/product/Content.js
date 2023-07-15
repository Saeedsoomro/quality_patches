import React, { useState } from "react";

const Content = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleOnClick = (buttonValue) => {
    setActiveButton(buttonValue);
  };
  return (
    <>
      <div>
        <button
          onClick={() => handleOnClick(1)}
          className=" p-3 w-1/3 border-[1px]"
          style={{
            backgroundColor: activeButton === 1 ? "#0A1C43" : "white",
            color: activeButton === 1 ? "white" : "black",
          }}
        >
          ABOUT US
        </button>
        <button
          onClick={() => handleOnClick(2)}
          className="text-black p-3 w-1/3 border-[1px]"
          style={{
            backgroundColor: activeButton === 2 ? "#0A1C43" : "white",
            color: activeButton === 2 ? "white" : "black",
          }}
        >
          WHAT WE DO
        </button>
        <button
          onClick={() => handleOnClick(3)}
          className="text-black p-3 w-1/3 border-[1px]"
          style={{
            backgroundColor: activeButton === 3 ? "#0A1C43" : "white",
            color: activeButton === 3 ? "white" : "black",
          }}
        >
          HISTORY & STATS
        </button>
      </div>

      {activeButton === 1 && (
        <div className="text-sm font-thin border-[1px] p-4">
          Your favorite brand, a work uniform, a sports team jersey, your
          school’s name or organization’s logo — whatever you represent, Penn
          Emblem represents you — through innovation, quality and family legacy,
          we will create and decorate your vision. <br /> <br /> Penn Emblem is
          a full-service branded apparel and promotional product decoration
          company. With over 50 different decoration options, 75 years of
          experience, 13 markets served and 4 global locations, we are America’s
          largest supplier and brand decorator for the rental uniform and
          promotional product industry.
          <br /> <br /> We help you preserve the memories that may only seem
          like a stitch in time, but will become a piece of the fabric of your
          legacy.
        </div>
      )}

      {activeButton === 2 && (
        <div className="text-sm font-thin border-[1px] p-4">
          <span className="font-semibold">
            As the largest provider of image and identification products,
            service and solutions, Penn Emblem’s domestic and international
            manufacturing capabilities proudly deliver cost-effective solutions
            such as:
          </span>
          <br />
          <br />
          <ol className="px-6" style={{ listStyleType: "disc" }}>
            <li>
              <a href="" className="text-blue">
                Custom Embroidered
              </a>
            </li>
            <li>
              <a href="" className="text-blue">
                Woven
              </a>
            </li>
            <li>
              <a href="" className="text-blue">
                Silkscreen
              </a>
            </li>
            <li>
              <a href="" className="text-blue">
                Sublimation
              </a>
            </li>
            <li>
              <a href="" className="text-blue">
                Screen-printed
              </a>
            </li>
            <li>
              <a href="" className="text-blue">
                Appliqués
              </a>
            </li>
            <li>
              <a href="" className="text-blue">
                Heat Transfers
              </a>
            </li>
          </ol>
          <span className="font-semibold">
            Penn Emblem Company helps brands come to life through innovative
            embellishment solutions, serving markets such as:
          </span>
          <br />
          <br />
          <ol className="px-6" style={{ listStyleType: "disc" }}>
            <li className="">Uniform Services</li>
            <li>Athletic Organizations</li>
          </ol>
        </div>
      )}
      {activeButton === 3 && (
        <div className="text-sm font-thin border-[1px] p-4">
          For 75 years, Penn Emblem has provided customers with high quality,
          cutting-edge products. Unlike many other companies, however, Penn
          Emblem has proudly served those customers through the common thread of
          family for four generations. In 1947, company founder, Frank
          Blumenthal, began embroidering emblems out of his garage in
          Philadelphia, beginning with cotton, oval name tags and American flags
          for gas station uniforms. In the 1960’s, he brought the first heat
          sealable emblems to the industry, completely revolutionizing the
          rental uniform business.
          <br />
          <br />
          In 1970, Frank’s oldest son, Robert, took the reins, adding new
          technologies such as screen-printing, to the embellishment industry.
          For years, Penn Emblem Company cultivated new business through
          innovative systems and designs, continuously remaining the market
          leader and industry trendsetter.
          <br />
          <br /> In 2010, Frank’s granddaughter, Randi Blumenthal-Joseph, became
          the third generation of leadership to continue the legacy of quality
          and innovation, while also shifting the company to become certified as
          a Woman’s Business Enterprise, to better support clients focused on
          supply chain diversity, and to proudly represent female leadership.
          Penn Emblem continues to serve customers worldwide with an ever
          growing array of image and identification solutions under Randi’s
          leadership and through the fibers of Penn Emblem’s rich history.
          <br />
          <br /> Many companies can delivery quality products, but only Penn
          Emblem Company threads generational pride and heart throughout
          everything we create, to produce the best representation of your
          company for your brand. For all types of emblematic identification,
          Penn Emblem will proudly make the process seamless, from our stitches
          to yours.
        </div>
      )}
    </>
  );
};

export default Content;
