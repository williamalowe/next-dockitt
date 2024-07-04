import {
  faCaretLeft,
  faCaretRight,
  faCheck,
  faRotateRight,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        {id}
        <span className="bg-white text-neutral-900 text-xs px-1 rounded-md">
          {tag}
        </span>
      </div>
      <div className="flex-1">{task}</div>
      <div className="flex-1">{priority}</div>
      <div className="flex-1">{status}</div>
      <div className="flex-1 flex justify-end gap-x-4">
        {status === "backlog" ? (
          <>
            <button>
              <FontAwesomeIcon icon={faX} className="w-4 h-4 text-red-600" />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="w-4 h-4 text-green-600"
              />
            </button>
          </>
        ) : status === "completed" ? (
          <>
            <button>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="w-4 h-4 text-orange-600"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCheck}
                className="w-4 h-4 text-green-600"
              />
            </button>
          </>
        ) : status === "cancelled" ? (
          <>
            <button>
              <FontAwesomeIcon
                icon={faTrash}
                className="w-4 h-4 text-red-600"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faRotateRight}
                className="w-4 h-4 text-blue-600"
              />
            </button>
          </>
        ) : (
          <>
            <button>
              <FontAwesomeIcon icon={faX} className="w-4 h-4 text-red-600" />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="w-4 h-4 text-orange-600"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="w-4 h-4 text-green-600"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
