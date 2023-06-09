"use client";
import React, { useState } from "react";
import Svg0 from "../../public/navbar-svg/0.svg";
import Svg1 from "../../public/navbar-svg/1.svg";
import Svg2 from "../../public/navbar-svg/2.svg";
import Svg3 from "../../public/navbar-svg/3.svg";
import Svg4 from "../../public/navbar-svg/4.svg";
import Svg5 from "../../public/navbar-svg/5.svg";
import Svg6 from "../../public/navbar-svg/6.svg";
import Svg7 from "../../public/navbar-svg/7.svg";
import Svg8 from "../../public/navbar-svg/8.svg";
import Svg9 from "../../public/navbar-svg/9.svg";
import ToggleSvg from "../../public/navbar-svg/toggle.svg";
import CloseSvg from "../../public/navbar-svg/close.svg";
import Image from "next/image";
const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navItems = [
    { name: "Empathise", icon: Svg1 },
    { name: "Gather Insights", icon: Svg2 },
    { name: "Craft Question", icon: Svg3 },
    { name: "Introduce Op-Ed", icon: Svg4 },
    { name: "Find Sources", icon: Svg5 },
    { name: "Comprehend & Collate", icon: Svg6 },
    { name: "Identify & Ideate", icon: Svg7 },
    { name: "Summarise & Reflect", icon: Svg8 },
    { name: "Conclude & Refine", icon: Svg9 },
  ];
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` duration-100 w-20  h-screen  bg-gray-800 text-white flex flex-col  ${
        isOpen ? "w-56" : " "
      }`}>
      <div className="flex flex-row justify-between p-4">
        {!isOpen ? (
          <div className="w-8 h-8 mx-auto ">
            <Image src={Svg0} alt="Logo" />
          </div>
        ) : (
          <h1 className="text-xl font-bold">Roadmap</h1>
        )}

        {!isOpen ? (
          <button
            className="w-full text-center translate-x-16 bg-white rounded-md "
            onClick={toggleNavbar}>
            <div className="w-5 h-5 mx-auto ">
              <Image src={ToggleSvg} alt="Toggle" />
            </div>
          </button>
        ) : (
          <button
            className="text-center bg-white rounded-md "
            onClick={toggleNavbar}>
            <div className="w-5 h-5 mx-auto">
              <Image src={CloseSvg} alt="Close" />
            </div>
          </button>
        )}
      </div>
      {isOpen ? (
        <nav className="flex flex-col">
          <div>
            {" "}
            {/* Added flex-row class */}
            {navItems.map((item, index) => (
              <a
                href="#"
                className="flex flex-row w-full p-4 text-left hover:bg-gray-700"
                key={index}>
                <div className="w-8 h-8">
                  <Image src={item.icon} alt={item.name} />
                </div>
                <span className="text-xs">{item.name}</span>
              </a>
            ))}
          </div>
        </nav>
      ) : (
        <nav className="flex flex-col flex-1">
          {navItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <a href="#" className="w-full p-4 text-center hover:bg-gray-700">
                <div className="w-8 h-8 mx-auto">
                  <Image src={item.icon} alt={item.name} />
                </div>
              </a>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default VerticalNavbar;
