import VerticalNavbar from "../components/VerticalNavbar";
import AIHelpContainer from "../components/AIHelpContainer";
import SourceComponent from "../components/SourceComponent";
import plusSymbolSvg from "./../assets/plusSymbol.svg";
export default function Page() {
  const sourcelist = [
    {
      title:
        "The Decline of Community Service: Unraveling the Fabric of Society",
      link: "https://www.google.com",
      isChosen: true,
    },
    {
      title:
        "The Decline of Community Service: Unraveling the Fabric of Society",
      link: "https://www.google.com",
      isChosen: true,
    },
    {
      title:
        "The Decline of Community Service: Unraveling the Fabric of Society",
      link: "https://www.google.com",
      isChosen: false,
    },
    {
      title:
        "The Decline of Community Service: Unraveling the Fabric of Society",
      link: "https://www.google.com",
      isChosen: false,
    },
    {
      title:
        "The Decline of Community Service: Unraveling the Fabric of Society",
      link: "https://www.google.com",
      isChosen: false,
    },
    {
      title:
        "The Decline of Community Service: Unraveling the Fabric of Society",
      link: "https://www.google.com",
      isChosen: false,
    },
  ];
  return (
    <div className="flex flex-row min-h-screen bg-white">
      <VerticalNavbar />
      <div className="p-16 ml-24">
        <div className="text-left ">
          <h1 className="text-4xl font-bold">Find Sources</h1>
          <p className="my-2 text-lg text-black whitespace-pre-line">
            Link your sources here
          </p>
        </div>
        <div className="grid justify-start grid-cols-2 gap-2 pt-12">
          {sourcelist.map((source, index) => (
            <SourceComponent
              title={source.title}
              link={source.link}
              key={index}
              isSource={source.isChosen}
            />
          ))}
          <div
            className={`flex border-dashed border-4  rounded-lg justify-center overflow-x-auto flex-row w-3/4 p-4 m-2 `}>
            <a
              className={`text-slate-500 whitespace-nowrap font-bold text-lg `}>
              add source{" "}
              <div
                className={` inline-block w-5 h-5 translate-x-1 translate-y-1`}>
                <img src={plusSymbolSvg} alt="Proceed Arrow" />
              </div>
            </a>
          </div>
        </div>
        <AIHelpContainer page="question" />
      </div>
    </div>
  );
}
