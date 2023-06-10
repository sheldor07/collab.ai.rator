"use client";
import { use, useEffect, useState } from "react";
export default function ImplicitDetails() {
  const [implicitContent, setImplicitContent] = useState<string>("");
  // create a hook to store the implicit details
  useEffect(() => {
    // fetch the implicit details from the server
    fetch("/api/implicit")
      .then((res) => res.json())
      .then((data) => {
        setImplicitContent(data.implicit);
      });
  }, []);

  return (
    <div className="w-full min-h-[500px] text-center bg-white border-4 border-dashed c border-slate-500 rounded-xl ">
      <h1 className="p-12 text-4xl font-bold text-black">Implicit Details </h1>
      <textarea className="w-full min-h-[450px]  text-black shadow-xl text-md "></textarea>
    </div>
  );
}
