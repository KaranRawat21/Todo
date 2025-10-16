import { TiTick } from "react-icons/ti";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { useState } from "react";

export default function ToDoItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);

  const handleEdit = () => {
    if (editValue.trim() === "") return;
    onEdit(task.id, editValue);
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-gray-200 p-3 rounded-2xl shadow-2xl flex flex-wrap items-center gap-3 transition-all duration-200 hover:shadow-lg">

      {/* Tick Icon */}
      <div
        onClick={() => onToggle(task.id)}
        className={`${task.completed ? "bg-purple-500 text-white" : "bg-white border border-gray-500 text-gray-400"
          } w-[30px] h-[30px] rounded-full flex justify-center items-center text-2xl flex-shrink-0 cursor-pointer`}>
        <TiTick />
      </div>

      {/* Text or Input */}
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          className="flex-1 min-w-[150px] border border-gray-400 rounded-md px-2 py-1 text-sm sm:text-base outline-0"
        />
      ) : (
        <p
          className={`flex-1 min-w-[150px] break-words whitespace-pre-wrap overflow-hidden text-sm sm:text-base text-gray-700 ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.text}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-2 flex-shrink-0">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="py-2 px-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            <FaRegSave />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="py-2 px-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">
            <MdEdit />
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="py-2 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
