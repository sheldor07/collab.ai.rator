import AIHelpBotSvg from "./../../public/AIHelpBot.svg";
import CloseSvg from "./../../public/navbar-svg/close.svg";
import ExplainAIBot from "./../../public/ExplainAIBot.svg";
import FeedbackAIBot from "./../../public/FeedbackAIBot.svg";
import Image from "next/image";

export default function ChatWindow(props: any) {
  const explainQuestions = {
    default: [
      "Explain the task I am supposed to do",
      "*Write your own question*",
    ],
    blog1: ["What is the problem?"],
    question: ["What is the problem?"],
  };

  const feedbackQuestions = {
    default: ["Can you check my grammar?", "Give me feedback on this"],
    blog1: ["What is the problem?"],
    question: ["What is the problem?"],
  };

  const selectedExplainQuestions = explainQuestions.default;
  const selectedFeedbackQuestions = feedbackQuestions.default;
  return (
    <div className="shadow-lg  flex rounded-xl flex-col min-w-[300px] min-h-[500px] h-full align-items-center">
      <div className="flex flex-row justify-between px-4 py-1 border-2 border-slate-100">
        <div className="flex flex-row w-full h-1/6">
          <div className="w-5 h-5">
            <Image src={AIHelpBotSvg} alt="AI Help Bot" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-blue-500">AI Chat</p>
            <p className="text-[10px] text-green-500">Online</p>
          </div>
        </div>
        <div>
          <Image src={CloseSvg} alt="AI Help Bot" />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full p-6 h-5/6">
        <div className="flex flex-col justify-center w-full my-2 text-center h-1/2">
          <div className="w-6 mx-auto">
            <Image src={ExplainAIBot} alt="AI Help Bot" />
          </div>
          <p>Explain</p>
          {selectedExplainQuestions.map((question: any, index: any) => (
            <button
              className="w-full p-2 my-2 text-sm text-center rounded-md text-slate-800 bg-slate-100"
              key={index}>
              {question}
            </button>
          ))}
        </div>
        <div className="flex flex-col justify-center w-full my-2 text-center h-1/2">
          <div className="w-6 mx-auto">
            <Image src={FeedbackAIBot} alt="AI Help Bot" />
          </div>
          <p>Feedback & Edit</p>
          {selectedFeedbackQuestions.map((question: any, index: any) => (
            <button
              className="w-full p-2 my-2 text-sm text-center rounded-md text-slate-800 bg-slate-100"
              key={index}>
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
