import ExternalLinkSvg from "../../public/external-link.svg";
import Image from "next/image";
export default function SourceCollate(props: any) {
  return (
    <>
      <p className="py-2 font-bold text-md text-violet-500">
        {" "}
        SOURCE {props.sourceId}{" "}
      </p>
      <div
        className={`grid grid-cols-1 ${
          props.ifParaphrase ? " xl:grid-cols-2" : " "
        } xl:p-4 border-4 border-dashed rounded-lg border-violet-200 min-h-[400px]`}>
        <div className="flex flex-col p-2 ">
          <div className="flex flex-row justify-between p-2 rounded-md bg-violet-200">
            <a href={props.link} className="flex flex-col ">
              <p className="text-lg font-bold">{props.title}</p>
              <p className="text-sm text-gray-500">{props.link}</p>
            </a>
            <div className="w-5 h-5 ">
              <Image src={ExternalLinkSvg} alt="external link" />
            </div>
          </div>
          <textarea className="h-full p-2 my-8 text-sm text-gray-500">
            {props.content}
          </textarea>
        </div>
        {props.ifParaphrase ? (
          <div className="flex flex-col invisible p-4 border-l-4 border-dashed xl:visible">
            <h1 className="text-lg font-bold text-black">Paraphrase</h1>
            <p>Sum up the argument in your own words</p>
            <textarea className="p-2 m-2 text-sm text-gray-500 h-3/4"></textarea>
          </div>
        ) : null}
      </div>
    </>
  );
}
