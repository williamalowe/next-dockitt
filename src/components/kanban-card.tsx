import PatchButtonContainer from "./patch-button-container";

export default function KanbanCard({
  id,
  title,
  tag,
  description,
  priority,
  status,
  points,
}: {
  id: string;
  title: string;
  tag: string;
  description: string;
  priority: string;
  status: string;
  points: number;
}) {
  return (
    <div className="relative flex flex-col gap-y-1 p-2 border-2 border-neutral-600 rounded bg-neutral-800 max-h-48">
      <h5 className="font-bold">{title}</h5>
      <h5 className="text-sm">
        <span className="font-bold">ID: </span>
        {id.toString().slice(0, 8)}
      </h5>
      <p className="text-sm overflow-scroll no-scrollbar">{description}</p>
      <h5>
        Priority:{" "}
        <span
          className={`${
            priority === "critical" ? "text-red-600 uppercase" : "capitalize"
          }`}
        >
          {priority}
        </span>
      </h5>
      <PatchButtonContainer status={status} id={id} />
      <div className="absolute top-0 right-0 px-2 bg-neutral-950 border-l-2 border-b-2 border-neutral-600 rounded-b text-xs font-bold">
        {tag}
      </div>
      <div className="absolute bottom-1 left-1 w-4 h-4 p-2 border-2 border-neutral-600 flex items-center justify-center rounded bg-neutral-950 text-neutral-400 font-bold text-xs">
        {points}
      </div>
    </div>
  );
}
