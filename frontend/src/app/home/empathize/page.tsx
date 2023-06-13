import VerticalNavbar from "../../../components/VerticalNavbar";
import AEIOUComp from "../../../components/AEIOUComp";
import ImplicitExplicit from "@/components/ImplicitExplicit";
import colItems from "../../../../src/utils/AEIOUItems";
import Blog1 from "../../../components/Blog1";
import ProceedArrowSvg from "./../../../../public/proceed_arrow.svg";
import Image from "next/image";
import AIHelpBot from "@/components/AIHelpContainer";
export default function Page() {
  return (
    <>
      <div className="flex flex-row min-h-screen bg-white">
        <VerticalNavbar />
        <div className="ml-24">
          {" "}
          {/* Add this wrapper div */}
          <div className="flex flex-col p-16">
            {" "}
            {/* Add flex-col class */}
            <div>
              <h1 className="text-4xl font-bold text-black">Title: Airport</h1>
              <p className="my-4 text-blue-500 text-md">THEME: PLACES</p>
            </div>
            <div className="ml-auto">
              <p className="p-8 ml-24 text-right text-black rounded-xl bg-violet-200">
                {" "}
                {/* Update the class name */}
                Use the AEIOU framework to categorize and interpret observations
                gathered during your field study.
              </p>
            </div>
          </div>
          <div className="flex flex-row mx-5">
            {colItems.map((item, index) => (
              <AEIOUComp name={item.name} content={item.content} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="ml-24">
        <ImplicitExplicit />
      </div>

      <Blog1 />
      <div className="fixed bottom-0 right-0 m-4">
        <button className="flex flex-row px-4 py-2 text-lg text-white align-middle bg-blue-500 rounded-md ">
          Proceed
          <div className="inline-block px-1 py-1">
            <Image src={ProceedArrowSvg} alt="Proceed Arrow" />
          </div>
        </button>
        <AIHelpBot />
      </div>
    </>
  );
}
