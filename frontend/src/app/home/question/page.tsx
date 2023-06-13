import VerticalNavbar from "@/components/VerticalNavbar";
import ResearchQuestion from "@/components/ResearchQuestion";
import AIHelpContainer from "@/components/AIHelpContainer";
import FeedbackNotepad from "@/components/FeedbackNotepad";
import Image from "next/image";
import PlusSvg from "./../../../../public/plusSymbol.svg";
export default function Page() {
  const questions = [
    "What is the problem?",
    "Why is it important?",
    "What is the solution?",
    "What is the impact?",
  ];

  return (
    <div className="flex flex-row min-h-screen bg-white">
      <VerticalNavbar />

      <div className="flex flex-col w-full p-16 ml-24 ">
        <div className="text-left">
          <h1 className="text-3xl font-bold">Craft Research Question</h1>
          <p className="my-2 text-lg text-black whitespace-pre-line">
            brainstorm quesitons based on your insights
          </p>
        </div>
        <div className="flex flex-col justify-start w-1/3 pt-12">
          {questions.map((question, index) => (
            <ResearchQuestion question={question} index={index} key={index} />
          ))}
          <button className="p-4 border-2 border-dashed rounded-md border-slate-400 text-slate-400">
            add question
            <div className="inline-block w-5 h-5 translate-x-1 translate-y-1">
              <Image src={PlusSvg} alt="Proceed Arrow" />
            </div>
          </button>
        </div>
      </div>
      <AIHelpContainer page="question" />
    </div>
  );
}
