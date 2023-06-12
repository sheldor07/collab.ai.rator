export default function ResearchQuestion(props: any) {
  return (
    <div className="my-4">
      <p className="text-lg">
        {props.index + 1}){props.question}
      </p>
    </div>
  );
}
