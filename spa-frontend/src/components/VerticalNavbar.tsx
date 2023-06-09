import Svg0 from "./../assets/navbar-svg/0.svg";
import Svg1 from "./../assets/navbar-svg/1.svg";
import Svg2 from "./../assets/navbar-svg/2.svg";
import Svg3 from "./../assets/navbar-svg/3.svg";
import Svg4 from "./../assets/navbar-svg/4.svg";
import Svg5 from "./../assets/navbar-svg/5.svg";
import Svg6 from "./../assets/navbar-svg/6.svg";
import Svg7 from "./../assets/navbar-svg/7.svg";
import Svg8 from "./../assets/navbar-svg/8.svg";
import Svg9 from "./../assets/navbar-svg/9.svg";
import ToggleSvg from "./../assets/navbar-svg/toggle.svg";
import CloseSvg from "./../assets/navbar-svg/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", icon: Svg0, link: "/" },
    { name: "Empathise", icon: Svg1, link: "/home/empathize" },
    { name: "Gather Insights", icon: Svg2, link: "/home/empathize" },
    { name: "Craft Question", icon: Svg3, link: "/home/question" },
    { name: "Introduce Op-Ed", icon: Svg4, link: "/home/introduce" },
    { name: "Find Sources", icon: Svg5, link: "/home/sources" },
    { name: "Comprehend & Collate", icon: Svg6, link: "/home/collate" },
    { name: "Identify & Ideate", icon: Svg7, link: "/home/ideate" },
    { name: "Summarise & Reflect", icon: Svg8, link: "/home/ideate" },
    { name: "Conclude & Refine", icon: Svg9, link: "/home/conclude" },
  ];
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed duration-100 ease-in  min-h-screen rounded-r-lg   bg-gray-800 text-white flex flex-col  ${
        isOpen ? "w-48" : "w-14"
      }`}>
      <div className="flex flex-row justify-between p-4">
        {!isOpen ? (
          <>
            <button
              className="w-full text-center translate-x-16 bg-white rounded-md "
              onClick={toggleNavbar}>
              <div className="w-5 h-5 mx-auto">
                <img src={ToggleSvg} alt="Toggle" />
              </div>
            </button>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold">Roadmap</h1>
            <button
              className="text-center bg-white rounded-md "
              onClick={toggleNavbar}>
              <div className="w-5 h-5 mx-auto">
                <img src={CloseSvg} alt="Close" />
              </div>
            </button>
          </>
        )}
      </div>
      <div className="flex-grow overflow-y-auto">
        {isOpen ? (
          <nav className="flex flex-col">
            <div>
              {" "}
              {/* Added flex-row class */}
              {navItems.map((item, index) => (
                <Link
                  to={`${item.link}`}
                  className="flex flex-row w-full p-4 text-left align-items-center"
                  key={index}>
                  <div className="w-8 h-8">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        ) : (
          <nav className="flex flex-col flex-1">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <Link
                  to={`${item.link}`}
                  className="flex flex-row w-full p-4 text-left align-items-center"
                  key={index}>
                  <div className="w-8 h-8">
                    <img src={item.icon} alt={item.name} />
                  </div>
                </Link>
              </div>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default VerticalNavbar;
