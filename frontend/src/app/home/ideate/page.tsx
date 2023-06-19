import VerticalNavbar from "@/components/VerticalNavbar";
import AIHelpContainer from "@/components/AIHelpContainer";
import SourceCollate from "@/components/SourceCollate";
import sourceList from "./../../../utils/SourceList";
const ideateList = [
  {
    question:
      "What ideas from the 2 authors that collides or contrast one another?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra at sed egestas.",
  },
  {
    question:
      "What are the missing gap? What did they not talk about that could be equally important?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra at sed egestas.",
  },
  {
    question:
      "Who could be responsible for the things you notice in observations. What ideas and perspective can they suggest?",
    content:
      " Who could be responsible for the things you notice in observations. What ideas and perspective can they suggest?",
  },
];
export default function Page() {
  return (
    <>
      <div className="flex flex-row min-h-screen bg-white">
        <VerticalNavbar />
        <div className="p-16 ml-24 ">
          <div className="text-left ">
            <h1 className="text-4xl font-bold">Identify & Ideate</h1>
            <p className="w-2/3 my-2 text-lg text-black whitespace-pre-line">
              Compare the two authors’ views. Search for gaps; factors or
              context not considered but may be important. Consider others’
              perspective and give your take on the issue.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              {sourceList.map((source, index) => {
                return (
                  <SourceCollate
                    key={source.sourceId}
                    sourceId={source.sourceId}
                    title={source.title}
                    link={source.link}
                    isChosen={source.isChosen}
                    ifParaphrase={false}
                    content={source.content}
                  />
                );
              })}
            </div>
            <div className="flex flex-col mt-20 ml-12 ">
              {ideateList.map((ideate, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row border-b-4 border-dashed min-h-[200px]">
                    <p className="p-4 font-bold text-black text-md max-w-[200px] ">
                      {ideate.question}
                    </p>
                    <textarea className="w-full p-4 text-black border-l-4">
                      {ideate.content}
                    </textarea>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <AIHelpContainer />
      </div>
    </>
  );
}
