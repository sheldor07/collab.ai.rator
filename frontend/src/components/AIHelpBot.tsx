"use client";
import ChatWindow from "./ChatWindow";
import Image from "next/image";
import AIHelpBotSvg from "./../../public/AIHelpBot.svg";
import { useState } from "react";
export default function AIHelpBot(props: any) {
  const [chatWindow, setChatWindow] = useState(true);
  return (
    <div className="fixed right-10 bottom-24">
      {chatWindow ? <ChatWindow {...props} /> : null}
      <button className="rounded-full shadow-xl ">
        <div className="p-2">
          <Image src={AIHelpBotSvg} alt="AI Help Bot" />
        </div>
      </button>
    </div>
  );
}
