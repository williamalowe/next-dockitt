import { faCaretLeft, faCaretRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskTableItem({ id, task, priority, status }: {
  id: string,
  task: string,
  priority: string,
  status: string
}) {
  return (
    <div className="flex px-2">
      <div className="flex-1">{id}</div>
      <div className="flex-1">{task}</div>
      <div className="flex-1">{priority}</div>
      <div className="flex-1">{status}</div>
      <div className="flex-1 flex justify-end">
        <button className="p-1">
          <FontAwesomeIcon icon={faX} className="w-auto h-full text-red-600"/>
        </button>
        <button className="p-1">
          <FontAwesomeIcon icon={faCaretLeft} className="w-auto h-full text-orange-600"/>
        </button>
        <button className="p-1">
          <FontAwesomeIcon icon={faCaretRight} className="w-auto h-full text-green-600"/>
        </button>
      </div>
    </div>
  )
}
