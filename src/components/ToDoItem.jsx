import { TiTick } from "react-icons/ti";
import { MdEdit, MdDelete } from "react-icons/md";

export default function ToDoItem({ task }) {
  return (
    <div className="w-full bg-gray-200 p-3 rounded-2xl shadow-2xl flex flex-wrap items-center gap-3">

      {/* Tick Icon */}
      <div className={`${task.completed ? "bg-purple-500" : "bg-white border border-gray-500"} w-[30px] h-[30px] rounded-full text-white flex justify-center items-center text-2xl flex-shrink-0 cursor-pointer`}>
        < TiTick />
      </div>

      {/* Text */}
      <p className="flex-1 min-w-[150px] break-words whitespace-pre-wrap overflow-hidden text-sm sm:text-base text-gray-700">
        {task.text}
      </p>

      {/* Buttons */}
      <div className="flex gap-2 flex-shrink-0">
        <button className="py-2 px-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition cursor-pointer">
          <MdEdit />
        </button>
        <button className="py-2 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer">
          <MdDelete />
        </button>
      </div>
    </div >
  );
}
