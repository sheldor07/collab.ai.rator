"use client";
import ChatWindow from "./ChatWindow";
import Image from "next/image";
import AIHelpBotSvg from "./../../public/AIHelpBot.svg";
import FeedbackNotepadSvg from "./../../public/FeedbackNotebook.svg";
import FeedbackNotepad from "./FeedbackNotepad";
import { useState } from "react";
export default function AIHelpBot(props: any) {
  const [chatWindow, setChatWindow] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const toggleChatWindow = () => {
    setFeedback(false);
    setChatWindow(!chatWindow);
  };
  const toggleFeedback = () => {
    setFeedback(!feedback);
    setChatWindow(false);
  };
  return (
    <>
      <div className="fixed z-10 right-10 bottom-48">
        {feedback ? (
          <FeedbackNotepad {...props} toggleChatWindow={toggleFeedback} />
        ) : null}
        <button
          onClick={() => {
            toggleFeedback();
          }}
          className="fixed rounded-full shadow-xl right-5 bottom-48 ">
          <div className="p-2">
            <Image src={FeedbackNotepadSvg} alt="AI Help Bot" />
          </div>
        </button>
      </div>
      <div className="fixed right-10 bottom-24">
        {chatWindow ? (
          <ChatWindow {...props} toggleChatWindow={toggleChatWindow} />
        ) : null}

        <button
          onClick={() => {
            toggleChatWindow();
          }}
          className="fixed rounded-full shadow-xl right-5 bottom-24 ">
          <div className="p-2">
            <Image src={AIHelpBotSvg} alt="AI Help Bot" />
          </div>
        </button>
      </div>
    </>
  );
}
