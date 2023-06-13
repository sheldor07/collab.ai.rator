"use client";
import VerticalNavbar from "@/components/VerticalNavbar";
import AIHelpBot from "@/components/AIHelpContainer";
import SourceCollate from "@/components/SourceCollate";
import sourceList from "./../../../utils/SourceList";
import { useState } from "react";

export default function Page() {
  const [source, setSource] = useState(sourceList[0]);

  return (
    <>
      <div className="flex flex-row min-h-screen bg-white">
        <VerticalNavbar />
        <div className="p-16 ml-24">
          <div className="text-left ">
            <h1 className="text-4xl font-bold">Comprehened & Collate</h1>
            <p className="my-2 text-lg text-black whitespace-pre-line">
              Read carefully and collate phrases; key ideas & supporting details
              that may address your question direction directly or indirectly
            </p>
          </div>
          <div className="my-18">
            {sourceList.map((source, index) => {
              return (
                <SourceCollate
                  key={source.sourceId}
                  sourceId={source.sourceId}
                  title={source.title}
                  link={source.link}
                  isChosen={source.isChosen}
                  ifParaphrase={true}
                  content = {source.content}
                />
              );
            })}
          </div>
        </div>
        <AIHelpBot />
      </div>
    </>
  );
}
