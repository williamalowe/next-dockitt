import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewTaskForm({ handleSubmit }: { handleSubmit: any }) {
  return (
    <form className="max-w-96" action={handleSubmit}>
      <div className="relative flex flex-col gap-y-2 p-2 border-2 border-neutral-600 bg-neutral-800 rounded">
        <div>
          <input
            className="bg-neutral-800 w-full"
            name="title"
            type="text"
            placeholder="+ Add Task Title"
          />
        </div>
        <input
          className="absolute w-16 top-0 right-0 px-2 py-1 bg-neutral-950 border-l-2 border-b-2 border-neutral-600 rounded-b text-xs font-bold"
          name="tag"
          type="text"
          placeholder="+ Tag"
        />
        <textarea
          name="description"
          className="w-full border-2 border-neutral-600 bg-neutral-800 rounded text-base"
          rows={4}
          placeholder="+ Description"
        />
        <div className="flex gap-x-2">
          <label className="bg-neutral-800 text-neutral-400 w-16">
            Priority:
          </label>
          <select
            className="bg-neutral-600 rounded"
            name="priority"
            id="priority"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>
        <div className="flex gap-x-2">
          <label className="bg-neutral-800 text-neutral-400 w-16">
            Status:
          </label>
          <select className="bg-neutral-600 rounded" name="status" id="status">
            <option value="backlog">Backlog</option>
            <option value="in progress">In Progress</option>
            <option value="under review">Under Review</option>
          </select>
        </div>
        <div className="flex gap-x-2">
          <label className="bg-neutral-800 text-neutral-400 w-16">
            Points:
          </label>
          <select className="bg-neutral-600 rounded" name="points" id="points">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <button className="w-full mt-2" type="submit">
          <div className="flex gap-x-2 p-2 text-xs text-neutral-400 font-semibold items-center justify-center">
            <p>Add Card</p>
            <FontAwesomeIcon icon={faPlus} className="w-2"/>
          </div>
        </button>

      {/* <div className="flex gap-x-2">
        <div className="flex-1 flex gap-x-2">
          <label className="border-2 border-white w-fit px-2 rounded p-1 bg-neutral-800">
            Task Title
          </label>
          <input
            name="title"
            className="flex-1 border-2 border-white w-fit px-2 rounded text-base"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="flex gap-x-2">
          <label className="border-2 border-white w-fit px-2 rounded p-1 bg-neutral-800">
            Task Tag
          </label>
          <input
            name="tag"
            className="border-2 border-white w-fit px-2 rounded text-base"
            type="text"
            placeholder="Tag (Optional)"
          />
        </div>
      </div>
      <div className="flex gap-x-2">
        <label className="flex justify-center items-center border-2 border-white w-fit px-2 rounded p-1 bg-neutral-800">
          Task Description
        </label>
        <textarea
          name="description"
          className="w-full border-2 border-white px-2 rounded text-base"
          rows={4}
          placeholder="Description"
        />
      </div>
      <div className="flex gap-x-2 justify-center">
        <div className="flex gap-x-2">
          <label className="flex justify-center items-center border-2 border-white w-fit px-2 rounded p-1 bg-neutral-800">
            Task Status
          </label>
          <div>
            <div>
              <input type="radio" name="status" value="backlog" />
              <label htmlFor="backlog">&nbsp;Backlog</label>
            </div>
            <div>
              <input type="radio" name="status" value="in progress" />
              <label htmlFor="in progress">&nbsp;In Progress</label>
            </div>
            <div>
              <input type="radio" name="status" value="under review" />
              <label htmlFor="under review">&nbsp;Under Review</label>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <label className="flex justify-center items-center border-2 border-white w-fit px-2 rounded p-1 bg-neutral-800">
            Task Priority
          </label>
          <div className="grid grid-cols-2">
            <div>
              <input type="radio" name="priority" value="low" checked />
              <label htmlFor="low">&nbsp;Low</label>
            </div>
            <div>
              <input type="radio" name="priority" value="medium" />
              <label htmlFor="medium">&nbsp;Medium</label>
            </div>
            <div>
              <input type="radio" name="priority" value="high" />
              <label htmlFor="high">&nbsp;High</label>
            </div>
            <div>
              <input type="radio" name="priority" value="critical" />
              <label htmlFor="critical">&nbsp;Critical</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2">
        <label className="flex justify-center items-center border-2 border-white w-fit px-2 rounded p-1 bg-neutral-800">
          Task Points
        </label>
        <input
          name="points"
          className="bg-neutral-800"
          type="range"
          min="1"
          max="5"
          placeholder="Title"
        />
      </div>
      <button type="submit">Submit</button> */}
    </form>
  );
}
