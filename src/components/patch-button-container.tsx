"use client"
import { changeStatus } from "@/actions/action";
import {
  faCaretLeft,
  faCaretRight,
  faCheck,
  faRotateRight,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PatchButtonContainer({ id, status }: {
  id: string
  status: string,
}) {
  return (
    <div className="flex-1 flex justify-end gap-x-2">
      {status === "backlog" ? (
        <>
          <button onClick={() => changeStatus(id, 'cancelled')}>
            <FontAwesomeIcon icon={faX} className="w-4 h-4 text-red-400" />
          </button>
          <button onClick={() => changeStatus(id, 'in progress')}>
            <FontAwesomeIcon
              icon={faCaretRight}
              className="w-4 h-4 text-emerald-400"
            />
          </button>
        </>
      ) : status === "completed" ? (
        <>
          <button onClick={() => changeStatus(id, 'under review')}>
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
            <FontAwesomeIcon icon={faTrash} className="w-4 h-4 text-red-400" />
          </button>
          <button onClick={() => changeStatus(id, 'backlog')}>
            <FontAwesomeIcon
              icon={faRotateRight}
              className="w-4 h-4 text-blue-400"
            />
          </button>
        </>
      ) : (
        <>
          <button onClick={() => changeStatus(id, 'cancelled')}>
            <FontAwesomeIcon icon={faX} className="w-4 h-4 text-red-400" />
          </button>
          {
            status === 'in progress' ? 
            <>
            <button onClick={() => changeStatus(id, 'backlog')}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="w-4 h-4 text-orange-400"
              />
            </button>
          <button onClick={() => changeStatus(id, 'under review')}>
            <FontAwesomeIcon
              icon={faCaretRight}
              className="w-4 h-4 text-emerald-400"
            />
          </button>
            </>
            : 
            <>
            <button onClick={() => changeStatus(id, 'in progress')}>
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="w-4 h-4 text-orange-400"
            />
          </button>
          <button onClick={() => changeStatus(id, 'completed')}>
            <FontAwesomeIcon
              icon={faCaretRight}
              className="w-4 h-4 text-emerald-400"
            />
          </button>
            </>
          }
        </>
      )}
    </div>
  );
}
