import PatchButtonContainer from "./patch-button-container";

export default function TaskListItem({
  id,
  tag,
  task,
  priority,
  status,
}: {
  id: string;
  tag: string;
  task: string;
  priority: string;
  status: string;
}) {
  return (
    <div className="flex capitalize px-2">
      <div className="flex-1 flex items-center gap-x-2">
        {id.toString().slice(0, 8)}
        <span className="bg-white text-neutral-900 text-xs px-1 rounded-md">
          {tag}
        </span>
      </div>
      <div className="flex-1">{task}</div>
      <div
        className={`flex-1 ${
          priority === "critical" && "text-red-600 uppercase"
        }`}
      >
        {priority}
      </div>
      <div
        className={`flex-1 ${
          status === "cancelled"
            ? "text-red-400"
            : status === "backlog"
            ? "text-neutral-400"
            : status === "in progress"
            ? "text-blue-400"
            : status === "under review"
            ? "text-orange-400"
            : "text-green-400"
        }`}
      >
        {status}
      </div>
      <PatchButtonContainer 
        status={status}
        id={id}
      />
    </div>
  );
}
