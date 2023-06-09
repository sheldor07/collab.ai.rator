import VerticalNavbar from "../../../components/VerticalNavbar";
import AEIOUComp from "../../../components/AEIOUComp";
export default function Page() {
  const colItems = [
    {
      name: "Activity",
      content:
        "Actions that people develop or execute related to the analyzed situation.",
    },
    {
      name: "Environment",
      content: "Physical space where the activity takes place.",
    },
    {
      name: "Interaction",
      content:
        "Actions that people develop or execute related to the analyzed situation.",
    },
    {
      name: "Object",
      content:
        "Actions that people develop or execute related to the analyzed situation.",
    },
    {
      name: "User",
      content:
        "Actions that people develop or execute related to the analyzed situation.",
    },
  ];
  return (
    <div className="flex flex-row h-screen bg-white">
      <VerticalNavbar />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between p-16">
          <div className="flex flex-col">
            {" "}
            {/* Wrap in a div with flex-col */}
            <h1 className="text-4xl font-bold text-black">Title: Airport</h1>
            <p className="my-4 text-blue-500 text-md">THEME: PLACES</p>
          </div>
          <div className="ml-auto">
            {" "}
            {/* Move the purple box and use ml-auto class */}
            <p className="ml-24 text-right text-black bg-violet-200">
              Use the AEIOU framework to categorize and interpret observations
              gathered during your field study.
            </p>
          </div>
        </div>
        <div className="flex flex-row mx-5">
          {" "}
          {/* Wrap colItems map function in a div */}
          {colItems.map((item, index) => {
            return (
              <>
                <AEIOUComp
                  name={item.name}
                  content={item.content}
                  key={index}
                />

              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
