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
      <div className={`flex-1 ${priority === 'critical' && 'text-red-600 uppercase'}`}>{priority}</div>
      <div className={`flex-1 ${status === 'cancelled' ? 'text-red-400' : status === 'backlog' ? 'text-neutral-400' : status === 'in progress' ? 'text-blue-400' : status === 'under review' ? 'text-orange-400' : 'text-green-400'}`}>{status}</div>
      <div className="flex-1 flex justify-end gap-x-4">
        {status === "backlog" ? (
          <>
            <button>
              <FontAwesomeIcon icon={faX} className="w-4 h-4 text-red-400" />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="w-4 h-4 text-emerald-400"
              />
            </button>
          </>
        ) : status === "completed" ? (
          <>
            <button>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="w-4 h-4 text-orange-400"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCheck}
                className="w-4 h-4 text-emerald-400"
              />
            </button>
          </>
        ) : status === "cancelled" ? (
          <>
            <button>
              <FontAwesomeIcon
                icon={faTrash}
                className="w-4 h-4 text-red-400"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faRotateRight}
                className="w-4 h-4 text-blue-400"
              />
            </button>
          </>
        ) : (
          <>
            <button>
              <FontAwesomeIcon icon={faX} className="w-4 h-4 text-red-400" />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="w-4 h-4 text-orange-400"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="w-4 h-4 text-emerald-400"
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
