import VerticalNavbar from "@/components/VerticalNavbar";
import AIHelpContainer from "@/components/AIHelpContainer";
export default function Page() {
  return (
    <div className="flex flex-row min-h-screen bg-white">
      <VerticalNavbar />
      <div className="p-16 ml-24 ">
        <div className="text-left ">
          <h1 className="text-4xl font-bold">Conclude & Refine</h1>

          <p className="w-2/3 my-2 text-xl text-black whitespace-pre-line">
            Conclude your Op-Ed and do your final checks before submitting on
            Turnitin.
          </p>
          <p className="my-4 text-lg text-black whitespace-pre-line ">
            Title : The Decline of Community Service
          </p>
        </div>
        <textarea className="w-full min-h-[400px] p-4 text-black "></textarea>
      </div>{" "}
      <AIHelpContainer />
    </div>
  );
}
