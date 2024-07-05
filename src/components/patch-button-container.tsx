import {
  faCaretLeft,
  faCaretRight,
  faCheck,
  faRotateRight,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PatchButtonContainer({ status }: {
  status: string,
}) {
  return (
    <div className="flex-1 flex justify-end gap-x-2">
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
            <FontAwesomeIcon icon={faTrash} className="w-4 h-4 text-red-400" />
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
  );
}
