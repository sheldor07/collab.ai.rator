import AIHelpBot from "@/components/AIHelpBot";
import VerticalNavbar from "@/components/VerticalNavbar";
export default function Page() {
  return (
    <div className="flex flex-row min-h-screen bg-white">
      <VerticalNavbar />
      <div className="ml-24">
        <div className="flex flex-col p-16">
          <div>
            <h1 className="text-4xl font-bold text-black">Introduce Op-Ed</h1>
            <p className="my-4 text-black whitespace-pre-line text-md">
              Introduce your topic with your observation and how it lead to your
              insights and chosen research question.
            </p>
          </div>
          <p className="my-12 text-lg">
            Title: The Decline of Community Service: Unraveling the Fabric of
            Society
          </p>
          <textarea className="w-full h-full min-h-[400px] text-black"></textarea>
        </div>
        <AIHelpBot />
      </div>
    </div>
  );
}
