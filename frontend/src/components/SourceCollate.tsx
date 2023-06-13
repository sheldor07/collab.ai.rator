import ExternalLinkSvg from "../../public/external-link.svg";
import Image from "next/image";
export default function SourceCollate(props: any) {
  return (
    <>
      <p className="py-2 font-bold text-md text-violet-500">
        {" "}
        SOURCE {props.sourceId}{" "}
      </p>
      <div className="grid grid-cols-2 p-8 border-4 border-dashed rounded-lg border-violet-200 min-h-[400px]">
        <div className="flex flex-col p-2 border-r-2 border-dashed">
          <div className="flex flex-row justify-between p-2 rounded-md bg-violet-200">
            <a href={props.link} className="flex flex-col ">
              <p className="text-lg font-bold">{props.title}</p>
              <p className="text-sm text-gray-500">{props.link}</p>
            </a>
            <div className="w-5 h-5 ">
              <Image src={ExternalLinkSvg} alt="external link" />
            </div>
          </div>
          <textarea className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </textarea>
        </div>
      </div>
    </>
  );
}
