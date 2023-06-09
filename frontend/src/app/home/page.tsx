import Timeline from "../../components/Timeline";
import Navbar from "../../components/VerticalNavbar";

export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <Navbar />
      <div className="flex flex-col w-full">
        <div className="py-10 text-center">
          <p className="text-sm font-light text-violet-400">
            THE ULTIMATE CC0001 WRITING TOOL
          </p>
          <h1 className="py-4 text-5xl font-black text-black">
            Welcome to Collab.AI.tor
          </h1>
          <p className="w-full text-sm text-slate-400">
            A workspace to help you brainstorm ideas and write better with an AI
            assistant.
          </p>
        </div>
        <div className="flex flex-col w-2/5 px-10 text-left">
          <h2 className="text-3xl text-black underline">Roadmap</h2>
          <p className="text-lg text-black whitespace-pre-line">
            You will go through each design thinking stages that will guide you to
            write a persuasive Op-Ed
          </p>
        </div>
        <Timeline />
      </div>
    </div>
  );
}
