"use client";
import AIHelpBotSvg from "./../../public/AIHelpBot.svg";
import CloseSvg from "./../../public/navbar-svg/close.svg";
import ExplainAIBot from "./../../public/ExplainAIBot.svg";
import FeedbackAIBot from "./../../public/FeedbackAIBot.svg";
import Image from "next/image";
import { useState } from "react";

export default function ChatWindow(props: any) {
  const [chatScreen, setChatScreen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [gotResponse, setGotResponse] = useState(false);
  const [response, setResponse] = useState("");
  const toggleChatScreen = () => {
    setChatScreen(!chatScreen);
  };
  function sendPrompt(question: string) {
    setPrompt(question);
    toggleChatScreen();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGotResponse(true);
      setResponse("This is the response");
    }, 300);
  }
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
    <div className="z-30 shadow-lg  flex rounded-xl flex-col min-w-[300px] min-h-[500px] h-full align-items-center">
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
        <button
          onClick={() => {
            props.toggleChatWindow();
          }}>
          <Image src={CloseSvg} alt="AI Help Bot" />
        </button>
      </div>
      {
        // Chat Screen
        chatScreen ? (
          <div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-end w-full p-2 my-2 ">
                <p className="p-2 text-sm text-white bg-blue-500 rounded-xl">
                  {prompt}
                </p>
              </div>
              {loading ? (
                <div className="flex flex-row justify-start w-full p-2 my-2 ">
                  <p className="p-2 text-sm text-white bg-blue-500 rounded-xl">
                    Loading...
                  </p>
                </div>
              ) : (
                <div className="flex flex-row justify-start w-full p-2 my-2 ">
                  <p className="p-2 text-sm text-white bg-blue-500 rounded-xl">
                    {response}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full p-6 h-5/6">
            <div className="flex flex-col justify-center w-full my-2 text-center h-1/2">
              <div className="w-6 mx-auto">
                <Image src={ExplainAIBot} alt="AI Help Bot" />
              </div>
              <p>Explain</p>
              {selectedExplainQuestions.map((question: any, index: any) => (
                <button
                  className="w-full p-2 my-2 text-sm text-center rounded-md text-slate-800 bg-slate-100"
                  key={index}
                  onClick={() => {
                    sendPrompt(question);
                  }}>
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
                  key={index}
                  onClick={() => {
                    sendPrompt(question);
                  }}>
                  {question}
                </button>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
}
