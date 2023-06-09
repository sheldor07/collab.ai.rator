export default function TimePoint(props: any) {
  return (
    <div>
      {props.top ? (
        <div className="relative flex items-center text-center translate-x-1/2">
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="absolute w-full text-center bottom-16 text-slate-400">
            <div className="inline-block p-2 shadow-lg">
              <p className="text-xs font-light">{props.content}</p>
            </div>
          </div>
          <p className="absolute text-xl font-bold text-center text-blue-500 bottom-8">{props.name}</p>
       
          <div className="absolute w-full h-2 transform bg-gray-400 left-1/2 top-1/2"></div>
        </div>
      ) : (
        <div className="relative flex items-center">
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full"></div>
          <p className="absolute -mb-32 text-xl font-bold text-center text-blue-500">{props.name}</p>
          <div className="absolute w-full -mb-56 text-sm font-light text-center">
            <div className="inline-block p-2 border border-blue-500 shadow-lg">
              <p className="text-xs text-slate-400">{props.content}</p>
            </div>
          </div>
          <div className="absolute w-full h-2 transform translate-x-1/2 bg-gray-400 left-1/2 top-1/2"></div>
        </div>
      )}
    </div>
  );
}
