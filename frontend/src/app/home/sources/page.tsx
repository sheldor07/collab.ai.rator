import VerticalNavbar from "@/components/VerticalNavbar";
import AIHelpContainer from "@/components/AIHelpContainer";
import FeedbackNotepad from "@/components/FeedbackNotepad";
export default function Page() {
  return (
    <div className="flex flex-row min-h-screen bg-white">
      <VerticalNavbar />
      <div className="ml-24">
        <div className="p-16 text-left">
          <h1 className="text-4xl font-bold">Find Sources</h1>
          <p className="my-2 text-lg text-black whitespace-pre-line">
            Link your sources here
          </p>
          
        </div>
        <AIHelpContainer />
      </div>
    </div>
  );
}
