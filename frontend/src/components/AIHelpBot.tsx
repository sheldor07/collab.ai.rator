"use client";
import ChatWindow from "./ChatWindow";
import Image from "next/image";
import AIHelpBotSvg from "./../../public/AIHelpBot.svg";
import { useState } from "react";
export default function AIHelpBot(props: any) {
  const [chatWindow, setChatWindow] = useState(true);
  const toggleChatWindow = () => {
    setChatWindow(!chatWindow);
  };
  return (
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
  );
}
