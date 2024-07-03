import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function TaskTable() {
  const tableLabels = [
    {
      label: "ID",
    },
    {
      label: "Task",
    },
    {
      label: "Priority",
    },
    {
      label: "Status",
    },
    {
      label: "",
    },
  ];
  return (
    <div className="border mt-4">
      <div className="flex px-2 bg-emerald-600 rounded-t">
        {tableLabels.map((label) => {
          return (
            <div key={label.label} className="flex-1 text-white font-bold">
              {label.label}
            </div>
          );
        })}
      </div>
      <div></div>
      <Link href="/new-task">
        <div className="flex p-2 bg-emerald-600 rounded-b justify-center">
          <FontAwesomeIcon icon={faPlus} className="w-auto h-4 text-white" />
        </div>
      </Link>
    </div>
  );
}
