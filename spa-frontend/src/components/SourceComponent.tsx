export default function SourceComponent(props: any) {
  return (
    <div
      className={`flex overflow-x-auto flex-row w-4/5 p-4 m-2 ${
        props.isSource == false ? "bg-slate-200" : "bg-blue-500"
      }`}>
      <a
        href={props.link}
        className={`whitespace-nowrap font-bold text-lg ${
          props.isSource == false ? "text-black" : "text-white "
        }`}>
        {" "}
        {props.title}
      </a>
    </div>
  );
}
